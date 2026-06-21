#!/usr/bin/env python3
"""
Convert the custom Phoenix 125M (PhoenixForCausalLM) into a stock HF
LlamaForCausalLM checkpoint so it can be ONNX-exported and run in-browser
via Transformers.js.

Phoenix is LLaMA-style but uses *interleaved complex RoPE* (Meta's original
convention). HF Llama uses the split-half rotate_half convention, so q_proj /
k_proj rows must be permuted (the canonical convert_llama_weights_to_hf trick).

Verifies logit parity against the original before saving. Run with the training
venv (has torch + the local model package):

    HF_HOME=/mnt/nas/exports/hf_home \
    OUT=/mnt/nas/exports/phoenix-125m-llama \
    ~/VSCode/preTrainLLM/.venv/bin/python scripts/phoenix_to_llama.py
"""
import os, sys
from pathlib import Path

PRETRAIN = os.path.expanduser("~/VSCode/preTrainLLM")
sys.path.insert(0, PRETRAIN)  # so `import model.transformer` resolves

NAS_BASE = os.environ.get("NAS_BASE", "/mnt/nas/exports")
os.environ.setdefault("HF_HOME", f"{NAS_BASE}/hf_home")
Path(os.environ["HF_HOME"]).mkdir(parents=True, exist_ok=True)
REPO = os.environ.get("REPO", "shreyash-pandey-katni/phoenix-125m")
OUT = Path(os.environ.get("OUT", f"{NAS_BASE}/phoenix-125m-llama"))

import torch
from transformers import LlamaConfig, LlamaForCausalLM, AutoTokenizer
from model.hf_wrapper import PhoenixForCausalLM, PhoenixConfig

# Phoenix's complex RoPE buffer only recomputes cleanly on a device move, so we
# run the reference on CUDA (CPU leaves freqs_cis NaN in this torch build).
DEV = "cuda" if torch.cuda.is_available() else "cpu"
print(f"[load] Phoenix from {REPO} on {DEV} (cache -> {os.environ['HF_HOME']})")
pcfg = PhoenixConfig.from_pretrained(REPO)
phoenix = PhoenixForCausalLM.from_pretrained(REPO, config=pcfg, dtype=torch.float32).eval().to(DEV)
sd = phoenix.state_dict()

H, HD = pcfg.n_heads, pcfg.d_model // pcfg.n_heads
DIM = pcfg.d_model

def permute(w):
    # interleaved (Meta) -> rotate_half (HF). w: (out, in)
    return w.view(H, DIM // H // 2, 2, DIM).transpose(1, 2).reshape(DIM, DIM)

new = {}
new["model.embed_tokens.weight"] = sd["model.tok_emb.weight"]
new["model.norm.weight"] = sd["model.final_norm.weight"]
new["lm_head.weight"] = sd.get("model.output.weight", sd["model.tok_emb.weight"])
for i in range(pcfg.n_layers):
    p, l = f"model.layers.{i}", f"model.layers.{i}"
    new[f"{l}.input_layernorm.weight"] = sd[f"{p}.attn_norm.weight"]
    new[f"{l}.post_attention_layernorm.weight"] = sd[f"{p}.ff_norm.weight"]
    new[f"{l}.self_attn.q_proj.weight"] = permute(sd[f"{p}.attn.wq.weight"])
    new[f"{l}.self_attn.k_proj.weight"] = permute(sd[f"{p}.attn.wk.weight"])
    new[f"{l}.self_attn.v_proj.weight"] = sd[f"{p}.attn.wv.weight"]
    new[f"{l}.self_attn.o_proj.weight"] = sd[f"{p}.attn.wo.weight"]
    new[f"{l}.mlp.gate_proj.weight"] = sd[f"{p}.ff.w_gate.weight"]
    new[f"{l}.mlp.up_proj.weight"] = sd[f"{p}.ff.w_up.weight"]
    new[f"{l}.mlp.down_proj.weight"] = sd[f"{p}.ff.w_down.weight"]

lcfg = LlamaConfig(
    vocab_size=pcfg.vocab_size, hidden_size=DIM, intermediate_size=pcfg.d_ff,
    num_hidden_layers=pcfg.n_layers, num_attention_heads=H, num_key_value_heads=H,
    head_dim=HD, max_position_embeddings=pcfg.max_seq_len, rms_norm_eps=1e-6,
    rope_theta=10000.0, hidden_act="silu", attention_bias=False, mlp_bias=False,
    tie_word_embeddings=pcfg.tie_embeddings,
    bos_token_id=pcfg.bos_token_id, eos_token_id=pcfg.eos_token_id, pad_token_id=pcfg.pad_token_id,
)
llama = LlamaForCausalLM(lcfg).eval().to(DEV)
missing, unexpected = llama.load_state_dict(new, strict=False)
# tie ok if lm_head missing
print(f"[load_state_dict] missing={missing}  unexpected={unexpected}")

# ---- parity check ----
torch.manual_seed(0)
ids = torch.randint(0, pcfg.vocab_size, (1, 24)).to(DEV)
with torch.no_grad():
    lp = phoenix(ids).logits
    ll = llama(ids).logits
diff = (lp - ll).abs().max().item()
agree = (lp.argmax(-1) == ll.argmax(-1)).float().mean().item()
print(f"[parity] max|Δlogit|={diff:.4e}  argmax_agreement={agree:.3f}")
if diff > 1e-2 or agree < 0.999:
    print("[parity] FAIL — RoPE permute likely wrong. Aborting before save.")
    sys.exit(2)
print("[parity] PASS")

OUT.mkdir(parents=True, exist_ok=True)
llama.to("cpu").save_pretrained(OUT, safe_serialization=True)
AutoTokenizer.from_pretrained(REPO).save_pretrained(OUT)
print(f"[done] saved HF Llama checkpoint -> {OUT}")
