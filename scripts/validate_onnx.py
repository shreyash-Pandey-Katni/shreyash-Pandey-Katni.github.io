#!/usr/bin/env python3
"""Validate int8 ONNX vs fp32 Llama on fixed token ids (no tokenizer needed)."""
import numpy as np
import torch
from transformers import LlamaForCausalLM
import onnxruntime as ort

LLAMA = "/mnt/nas/exports/phoenix-125m-llama"
REPO = "/mnt/nas/exports/phoenix-125m-onnx-repo"

ids = torch.tensor([[2, 791, 9281, 1024, 55, 700, 333, 21, 9, 1200, 64, 5]])
ref = LlamaForCausalLM.from_pretrained(LLAMA).eval()
with torch.no_grad():
    lref = ref(ids).logits

# Raw onnxruntime forward with empty KV cache (12 layers, 12 kv heads, head_dim 64)
sess = ort.InferenceSession(f"{REPO}/onnx/model_quantized.onnx", providers=["CPUExecutionProvider"])
T = ids.shape[1]
feeds = {
    "input_ids": ids.numpy().astype(np.int64),
    "attention_mask": np.ones((1, T), np.int64),
    "position_ids": np.arange(T, dtype=np.int64)[None, :],
}
for i in range(12):
    feeds[f"past_key_values.{i}.key"] = np.zeros((1, 12, 0, 64), np.float32)
    feeds[f"past_key_values.{i}.value"] = np.zeros((1, 12, 0, 64), np.float32)
lq = torch.from_numpy(sess.run(["logits"], feeds)[0])

nan = torch.isnan(lq).any().item()
agree = (lref.argmax(-1) == lq.argmax(-1)).float().mean().item()
# top-5 overlap on the final position (what scoring/generation cares about)
t5r = set(lref[0, -1].topk(5).indices.tolist())
t5q = set(lq[0, -1].topk(5).indices.tolist())
print(f"int8 nan={nan}  argmax_agree={agree:.3f}  top5_overlap={len(t5r & t5q)}/5")
print("OK" if (not nan and agree > 0.7) else "DEGRADED")
