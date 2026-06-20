const primaryEmail = "shreyash.pandey.katni@gmail.com";
const contactSubject = encodeURIComponent(
  "Let's talk about an AI systems role"
);

export const primaryContactHref = `mailto:${primaryEmail}?subject=${contactSubject}`;

export const siteMeta = {
  name: "Shreyash Pandey",
  role: "AI Systems Engineer",
  location: "Bengaluru, India",
  email: primaryEmail,
  website: "https://shreyash.co.in",
  github: "https://github.com/shreyash-Pandey-Katni",
  linkedin: "https://www.linkedin.com/in/shreyash-pandey-katni/",
  medium: "https://shreyashpandeykatni.medium.com/",
  stackOverflow: "https://stackoverflow.com/users/14551505/shreyash-pandey",
  topmate: "https://topmate.io/shreyash_pandey_katni",
  huggingFace: "https://huggingface.co/shreyash-Pandey-Katni",
  contactBlurb:
    "I am most interested in roles where AI systems, backend engineering, and reliability work intersect. That usually means agent infrastructure, evaluation-heavy product work, automation platforms, or developer tooling.",
};

export const navigationLinks = [
  {
    path: "/",
    label: "Home",
    summary: "Overview, proof points, and current focus.",
  },
  {
    path: "/work",
    label: "Work",
    summary: "Selected product and applied AI work.",
  },
  {
    path: "/about",
    label: "About",
    summary: "Background, skills, and how I operate.",
  },
  {
    path: "/projects",
    label: "Projects",
    summary: "Flagship 2026 builds and earlier experiments.",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: siteMeta.github,
    icon: "social-links__link--gh",
  },
  {
    name: "LinkedIn",
    href: siteMeta.linkedin,
    icon: "social-links__link--li",
  },
  {
    name: "Stack Overflow",
    href: siteMeta.stackOverflow,
    icon: "social-links__link--so",
  },
  {
    name: "Medium",
    href: siteMeta.medium,
    icon: "social-links__link--me",
  },
  {
    name: "Topmate",
    href: siteMeta.topmate,
    icon: "social-links__link--tm",
  },
];

export const experienceTimeline = [
  {
    period: "2024 - Present",
    role: "Software Development Engineer 2",
    company: "IBM Software Labs",
    location: "Bengaluru, India",
    summary:
      "I design and ship reliability-heavy AI capabilities inside browser automation and testing products. The work combines embeddings, vision-language models, service decomposition, and a lot of operational discipline.",
    achievements: [
      "Designed AI-powered auto-healing with a three-tier recovery ladder: CSS selectors, text embeddings, then IBM Granite 3.3 VLM.",
      "Built logic that autonomously corrects locator failures across 5K+ test cases with 100% Firefox accuracy and 83% Chrome accuracy in internal evaluation.",
      "Helped re-architect the SAT runtime from a monolith into four microservices handling 4K-5K requests per minute with sub-second latency.",
      "Led a Java 8 to 17 migration and CI/CD improvements that improved build speed by 30% while maintaining 99% uptime.",
    ],
  },
  {
    period: "2023 - 2024",
    role: "Software Engineer 2",
    company: "Software AG (now IBM)",
    location: "Bengaluru, India",
    summary:
      "This phase pushed me deeper into AI product work: semantic retrieval, internal copilots, and prediction systems grounded in practical product needs rather than demos.",
    achievements: [
      "Built a semantic search engine using NLP, knowledge graphs, and FAISS. The project won the TechInterrupt Hackathon: first in India and fourth internationally.",
      "Developed an AI chatbot with LangChain and Flask that reduced internal support tickets by 70%.",
      "Created a failure prediction system using PyTorch and time-series analysis that supported 99.99% system availability.",
    ],
  },
  {
    period: "2022 - 2023",
    role: "Software Engineer",
    company: "Software AG",
    location: "Bengaluru, India",
    summary:
      "I worked on enterprise integration platform capabilities across Java, Spring Boot, and REST APIs, building the foundation that still shapes how I reason about production systems.",
    achievements: [
      "Delivered webMethods platform features for enterprise integration use cases using Java and Spring Boot.",
      "Built with a strong emphasis on compatibility, API contracts, and release quality, and was recognized as a 2023 Star Performer.",
    ],
  },
];

export const workPrinciples = [
  {
    title: "Start with the cheapest reliable fallback",
    description:
      "I design systems to attempt deterministic recovery first, then graduate into ML and model-based fallbacks only when they are justified.",
  },
  {
    title: "Treat evaluation as part of the product",
    description:
      "When the system contains AI, the measurement loop is not optional. I care about observable accuracy, drift, error budgets, and failure analysis.",
  },
  {
    title: "Bias toward boring operations",
    description:
      "I prefer architectures that are easier to debug, deploy, and recover under pressure over clever stacks that only look good in diagrams.",
  },
  {
    title: "Ship ownership, not isolated demos",
    description:
      "The work that matters is the work that survives adoption. I optimize for maintainability, team adoption, and operational credibility.",
  },
];

export const capabilityGroups = [
  {
    title: "AI and ML",
    items: [
      "PyTorch",
      "Transformers",
      "LLM pretraining",
      "Text embeddings",
      "Knowledge graphs",
      "LangChain",
      "Computer vision",
      "FAISS",
    ],
  },
  {
    title: "Backend and platform",
    items: [
      "Java",
      "Python",
      "Go",
      "Spring Boot",
      "Flask",
      "REST APIs",
      "Microservices",
      "Kafka",
      "gRPC",
    ],
  },
  {
    title: "Operations",
    items: [
      "Docker",
      "Jenkins",
      "NGINX",
      "CI/CD",
      "Linux",
      "Reliability engineering",
      "State management",
      "Release ownership",
    ],
  },
];

export const flagshipProjects = [
  {
    year: "2026",
    title: "Phoenix 125M",
    slug: "phoenix-125m",
    category: "Decoder-only language model",
    status: "Released",
    tagline: "A 125M parameter LLM trained end-to-end on a single RTX 3080 Ti, from corpus to checkpoint.",
    summary:
      "A LLaMA-style 125M parameter model trained from scratch on a single RTX 3080 Ti with a custom tokenizer, data pipeline, and training loop.",
    details:
      "The project is an end-to-end exercise in model building: corpus curation, tokenization, training stability, benchmarking, and open-source packaging.",
    proof: "~2B tokens processed, Apache 2.0 release, WinoGrande 0.507.",
    why: "I wanted to learn how LLMs actually work, not from an API, but by building one end-to-end. With a single 3080 Ti, training a 125M model from scratch was the right scope: ambitious enough to be real, small enough to be feasible on consumer hardware. Every decision, from architecture to data pipeline to training stability, was a lesson I could not have learned any other way.",
    skills: ["PyTorch", "Transformers", "Tokenization", "Benchmarking", "Distributed training"],
    href: "https://huggingface.co/shreyash-Pandey-Katni/phoenix-125m",
    ctaLabel: "View model card",
    stats: [
      { value: "125M", label: "Parameters" },
      { value: "~2B", label: "Tokens trained" },
      { value: "0.507", label: "WinoGrande score" },
    ],
    architecture: [
      {
        name: "Data Pipeline: 7 stages",
        span: 4,
        dark: true,
        html: `<ol class="flow-steps">
  <li class="flow-step">
    <div class="flow-step__num">01</div>
    <div class="flow-step__body">
      <h4>Download</h4>
      <p>Fetch from HuggingFace and AIKosh. Validate sources and write to raw corpus directory.</p>
      <div class="flow-step__tags"><span>HuggingFace</span><span>AIKosh</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">02</div>
    <div class="flow-step__body">
      <h4>Extract</h4>
      <p>PDF text via PyMuPDF, HTML via BeautifulSoup. Structured text out, noise stripped.</p>
      <div class="flow-step__tags"><span>PyMuPDF</span><span>BeautifulSoup</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">03</div>
    <div class="flow-step__body">
      <h4>Detect and Redact</h4>
      <p>XLM-RoBERTa language detection filters non-English. PII patterns redacted before any training.</p>
      <div class="flow-step__tags"><span>XLM-RoBERTa</span><span>PII redaction</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">04</div>
    <div class="flow-step__body">
      <h4>Deduplicate</h4>
      <p>MinHash LSH deduplication across the full corpus by n-gram signature. Near-duplicates removed.</p>
      <div class="flow-step__tags"><span>MinHash LSH</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">05</div>
    <div class="flow-step__body">
      <h4>Mix</h4>
      <p>Corpus blended by source ratio: Wikipedia, C4-en, OpenWebText2, Gutenberg, StackExchange, ArXiv.</p>
      <div class="flow-step__tags"><span>source mixing</span><span>domain balance</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">06</div>
    <div class="flow-step__body">
      <h4>Tokenize</h4>
      <p>BPE tokenizer trained on the mixed corpus. 32K vocab, byte-level fallback, special tokens added.</p>
      <div class="flow-step__tags"><span>BPE 32K</span><span>byte-level</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">07</div>
    <div class="flow-step__body">
      <h4>Shard</h4>
      <p>uint16 binary shard output for memory-mapped loading during training. No full corpus in RAM.</p>
      <div class="flow-step__tags"><span>uint16 shards</span><span>memory-mapped</span></div>
    </div>
  </li>
</ol>`,
      },
      {
        name: "Model",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>RoPE</strong> · rotary positional encoding</span></li>
  <li><span><strong>SwiGLU</strong> · gated activation, no ReLU</span></li>
  <li><span><strong>RMSNorm</strong> · pre-norm, no bias</span></li>
  <li><span><strong>FlashAttention</strong> · PyTorch 2.x kernel</span></li>
  <li><span><strong>12L / 12H / d768</strong> · 125M parameters</span></li>
  <li><span><strong>bf16</strong> · weight-tied in/out embeddings</span></li>
</ul>`,
      },
      {
        name: "Training Loop",
        html: `<ul class="bullet-list">
  <li><span><strong>Precision</strong> · bf16 mixed precision throughout</span></li>
  <li><span><strong>Memory</strong> · gradient checkpointing to fit 12 GB VRAM</span></li>
  <li><span><strong>Schedule</strong> · cosine LR with linear warmup</span></li>
  <li><span><strong>Stability</strong> · gradient clipping at 1.0, AdamW optimizer</span></li>
  <li><span><strong>Checkpoints</strong> · every 1,000 steps to NAS via SMB</span></li>
</ul>`,
      },
      {
        name: "Evaluation Harness",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>Perplexity</strong> · WikiText-103 held-out set</span></li>
  <li><span><strong>HellaSwag</strong> · normalized, zero-shot</span></li>
  <li><span><strong>WinoGrande</strong> · commonsense reasoning</span></li>
  <li><span><strong>ARC-Easy</strong> · science QA, 570 samples</span></li>
  <li><span><strong>LAMBADA</strong> · long-range accuracy</span></li>
  <li><span><strong>PIQA</strong> · physical intuition substitute</span></li>
</ul>
<p class="bullet-list__meta">All benchmarks implemented from scratch, matching lm-evaluation-harness conventions</p>`,
      },
      {
        name: "HuggingFace Export",
        description: "Custom PhoenixForCausalLM class registered with HuggingFace Auto classes. Full tokenizer, model card with benchmark results, and inference examples. Apache 2.0 license.",
      },
    ],
    techStack: {
      core: ["PyTorch 2.x", "HuggingFace Transformers", "BPE Tokenizer (32K)", "FlashAttention", "RoPE", "SwiGLU", "RMSNorm"],
      infra: ["RTX 3080 Ti (12 GB VRAM)", "NAS via SMB", "Ray (distributed preprocessing)"],
      tools: ["MinHash LSH dedup", "XLM-RoBERTa (lang detect + PII)", "PyMuPDF", "BeautifulSoup"],
    },
    highlights: [
      "Trained a 125M parameter LLM from scratch on a single consumer GPU. No cloud, no distributed training.",
      "Built a 7-stage data pipeline processing ~2B tokens from Wikipedia, C4-en, OpenWebText2, Project Gutenberg, StackExchange, and ArXiv.",
      "WinoGrande score of 0.507: above random chance (0.50), showing the model captures basic commonsense structure.",
      "Released under Apache 2.0 on HuggingFace with full model card, tokenizer, and inference examples.",
      "Set up the next project: a QLoRA fine-tune of Mistral 7B on text-to-SQL with the same evaluation discipline.",
    ],
    benchmarks: [
      { name: "WinoGrande", value: "0.507", note: "chance = 0.50" },
      { name: "HellaSwag", value: "0.279", note: "1K samples" },
      { name: "ARC-Easy", value: "0.358", note: "570 samples" },
      { name: "WikiText-103 PPL", value: "928.9", note: "lower = better" },
      { name: "LAMBADA accuracy", value: "0.003", note: "long-range hard at 125M" },
    ],
  },
  {
    year: "2026",
    title: "Sweta-Hi and Sweta-Kn",
    slug: "sweta",
    category: "Multilingual language models",
    status: "Released",
    tagline: "Hindi and Kannada language models trained from scratch, a technical tribute to the languages closest to my life.",
    summary:
      "Hindi and Kannada pretraining efforts built on a LLaMA-style architecture with custom tokenizers and an end-to-end multilingual data pipeline.",
    details:
      "This work is focused on underrepresented language coverage, practical training throughput, and evaluation quality ahead of release.",
    proof: "Custom tokenizers, async data loading, released on HuggingFace.",
    why: "Hindi is my mother tongue. I moved to Bengaluru for work and the city and its people welcomed me warmly. Training a Kannada language model felt like a small technical contribution to the community that gave me opportunity. Both languages are underrepresented in open-source LLM research relative to their speaker populations.",
    skills: ["Multilingual NLP", "Data engineering", "Custom tokenizers", "Model evaluation"],
    href: "https://huggingface.co/shreyash-pandey-katni/sweta-125m-multilingual",
    ctaLabel: "View model card",
    stats: [
      { value: "134M", label: "Parameters" },
      { value: "64K", label: "Vocab size" },
      { value: "3", label: "Languages (EN + HI + KN)" },
    ],
    architecture: [
      {
        name: "Multilingual Corpus",
        html: `<ul class="bullet-list">
  <li><span><strong>Sangraha Hindi</strong> · 34.5 GB verified Hindi text</span></li>
  <li><span><strong>Sangraha Kannada</strong> · 14 GB verified Kannada text</span></li>
  <li><span><strong>Samanantar</strong> · 49.6M English-Indic sentence pairs</span></li>
  <li><span><strong>IndicCorp v2</strong> · Indian-context English</span></li>
  <li><span><strong>Aya Dataset</strong> · 8K Hindi and Kannada instruction pairs</span></li>
  <li><span><strong>KCC Agriculture Q&amp;A</strong> · domain coverage</span></li>
</ul>`,
      },
      {
        name: "Custom 64K BPE Tokenizer",
        html: `<ul class="bullet-list">
  <li><span><strong>Joint training</strong> · English, Hindi, and Kannada trained together on a balanced corpus</span></li>
  <li><span><strong>64K vocab</strong> · double Phoenix's 32K to cover both Indic scripts without fragmentation</span></li>
  <li><span><strong>Language-balanced</strong> · tokenizer training corpus balanced across all three languages</span></li>
</ul>`,
      },
      {
        name: "Model",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>RoPE</strong> · rotary positional encoding</span></li>
  <li><span><strong>SwiGLU</strong> · gated activation, no ReLU</span></li>
  <li><span><strong>RMSNorm</strong> · pre-norm, no bias</span></li>
  <li><span><strong>FlashAttention</strong> · PyTorch 2.x kernel</span></li>
  <li><span><strong>134M params</strong> · 64K embedding table</span></li>
  <li><span><strong>bf16</strong> · same architecture as Phoenix</span></li>
</ul>`,
      },
      {
        name: "Per-Language Evaluation",
        description: "Separate perplexity evaluation for each language using held-out sets from each corpus. Tracks EN, HI, and KN PPL independently to detect language forgetting during training.",
      },
    ],
    techStack: {
      core: ["PyTorch 2.x", "HuggingFace Transformers", "BPE Tokenizer (64K)", "FlashAttention", "RoPE", "SwiGLU"],
      data: ["Sangraha (Hindi 34.5 GB, Kannada 14 GB)", "Samanantar (49.6M pairs)", "IndicCorp v2", "Aya Dataset"],
      tools: ["XLM-RoBERTa (lang detection)", "MinHash LSH dedup", "Ray (distributed preprocessing)"],
    },
    highlights: [
      "Custom 64K BPE tokenizer trained jointly on English, Hindi, and Kannada, covering both Indic scripts without excessive fragmentation.",
      "Hindi perplexity of 14.5: strong signal the model has absorbed Hindi language structure at 134M parameters.",
      "Kannada perplexity of 34.0: meaningful open-source coverage for a language with limited LLM representation.",
      "Reuses the full Phoenix 125M pipeline, demonstrating the architecture generalises cleanly to multilingual training.",
      "Released on HuggingFace as a contribution to Indian language NLP.",
    ],
    benchmarks: [
      { name: "Hindi PPL", value: "14.5", note: "134M params, step 2250" },
      { name: "Kannada PPL", value: "34.0", note: "134M params, step 2250" },
      { name: "English PPL", value: "215.7", note: "secondary language" },
    ],
  },
  {
    year: "2026",
    title: "SQLForge: Mistral 7B QLoRA",
    slug: "mistral-7b-sql-qlora",
    category: "Fine-tuning · Text-to-SQL",
    status: "Released",
    tagline: "QLoRA fine-tune of Mistral 7B v0.3 on text-to-SQL. Exact set match goes from 9 percent to 87 percent on the internal test split, trained on a single RTX 3080 Ti.",
    summary:
      "A 4-bit QLoRA fine-tune that turns Mistral 7B v0.3 into a reliable text-to-SQL model. The same 12 GB GPU used for Phoenix 125M, with a 3.75 GB VRAM headroom budgeted up front, and a schema-aware evaluation rebuild after the first WikiSQL run showed the metric was lying.",
    details:
      "The project is a focused engineering exercise in capability lift on consumer hardware: model selection by VRAM math, LoRA rank tuning, instruction-template-correct loss masking, and an evaluation harness that does true execution-accuracy comparison against table rows rather than string match.",
    proof: "+77.8 percentage point exact-match lift, 97.4 percent valid SQL, ~8.25 GB peak VRAM on a 12 GB card.",
    why: "After pretraining Phoenix 125M from scratch, the natural next question was: can the same hardware do something practically useful? Text-to-SQL was the right target. The base Mistral 7B knows SQL syntax from The Stack pretraining but is unreliable on real schemas. QLoRA on 178K examples was small enough to fit, large enough to matter, and the eval signal is concrete (does the query return the right rows). The schema-aware eval rebuild was the most important part. The first WikiSQL run reported 0 percent valid SQL because the validator was checking string equality instead of execution. Fixing that turned a panic moment into a 97.4 percent result.",
    skills: ["QLoRA", "Fine-tuning", "bitsandbytes", "PEFT", "Text-to-SQL", "Evaluation harnesses", "vLLM"],
    href: "https://huggingface.co/shreyash-pandey-katni/SQLForge-Mistral-7B-QLoRA",
    ctaLabel: "View model on HuggingFace",
    stats: [
      { value: "+77.8 pp", label: "Exact match lift over base" },
      { value: "8.25 GB", label: "Peak VRAM on 12 GB card" },
      { value: "97.4%", label: "Valid SQL (schema-aware)" },
    ],
    architecture: [
      {
        name: "Model selection",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>Mistral 7B v0.3</strong> · Apache 2.0, no gating</span></li>
  <li><span><strong>~8.25 GB peak VRAM</strong> · 3.75 GB headroom on 12 GB</span></li>
  <li><span><strong>Code-heavy pretraining</strong> · The Stack v1 + GitHub</span></li>
  <li><span><strong>Trivial chat template</strong> · clean loss masking on answers</span></li>
  <li><span><strong>vLLM ready</strong> · no extra flags for serving</span></li>
  <li><span><strong>Largest delta</strong> · capable base → big eval lift</span></li>
</ul>
<p class="bullet-list__meta">Beat Llama 3.1 8B (gated, 10.5 GB), Phi-3.5-mini (under-utilises GPU), Qwen2.5 7B</p>`,
      },
      {
        name: "VRAM budget on 12 GB",
        span: 4,
        dark: true,
        html: `<ol class="flow-steps">
  <li class="flow-step">
    <div class="flow-step__num">3.60</div>
    <div class="flow-step__body">
      <h4>Model weights</h4>
      <p>4-bit NF4 quantisation with double quantisation. ~22 GB BF16 base compressed into 3.6 GB.</p>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">0.03</div>
    <div class="flow-step__body">
      <h4>LoRA adapters</h4>
      <p>Rank 64 across 7 target modules (q, k, v, o, gate, up, down) in BF16. Trainable parameter count is tiny.</p>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">0.12</div>
    <div class="flow-step__body">
      <h4>AdamW optimiser state</h4>
      <p>FP32 momentum and variance for adapter weights only. The frozen base model contributes nothing here.</p>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">3.00</div>
    <div class="flow-step__body">
      <h4>Activations</h4>
      <p>Batch size 1, sequence length 512, gradient checkpointing on. Recompute trades compute for memory.</p>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">1.50</div>
    <div class="flow-step__body">
      <h4>CUDA kernels and fragmentation</h4>
      <p>Overhead for cuBLAS, bitsandbytes kernels, and allocator fragmentation. Buffered to stay safe.</p>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">8.25</div>
    <div class="flow-step__body">
      <h4>Total estimate</h4>
      <p>3.75 GB headroom on a 12 GB RTX 3080 Ti. Allows future sequence-length and rank increases without OOM.</p>
    </div>
  </li>
</ol>`,
      },
      {
        name: "Data and recipe",
        html: `<ul class="bullet-list">
  <li><span><strong>Primary</strong> · b-mc2/sql-create-context (78,577 examples, Apache 2.0)</span></li>
  <li><span><strong>Augmentation</strong> · gretelai/synthetic_text_to_sql (100K, Apache 2.0)</span></li>
  <li><span><strong>Quantisation</strong> · 4-bit NF4 with double quant via bitsandbytes</span></li>
  <li><span><strong>LoRA</strong> · rank 64, alpha 16, dropout 0.05, 7 target modules</span></li>
  <li><span><strong>Loss masking</strong> · DataCollatorForCompletionOnlyLM on the [/INST] split</span></li>
  <li><span><strong>Schedule</strong> · cosine LR with warmup, gradient checkpointing on</span></li>
</ul>`,
      },
      {
        name: "Evaluation harness",
        description: "Three benchmarks: a 500-example internal test split (exact set match plus schema-aware valid SQL), WikiSQL test set with true execution accuracy against table rows, and Spider 1.0 dev for community comparability. The first WikiSQL run reported 0 percent valid SQL because the validator was checking string equality; rewriting it to actually run the queries against table schemas turned the metric honest and revealed a real 97.4 percent valid rate.",
      },
      {
        name: "Serving",
        description: "Adapter merged back into the base weights and re-exported in safetensors format. Loads cleanly into vLLM with no custom code, ready for batched throughput serving. Apache 2.0 license, published on HuggingFace alongside the evaluation results.",
      },
    ],
    techStack: {
      core: ["PyTorch 2.x", "HuggingFace Transformers", "PEFT (QLoRA)", "bitsandbytes (4-bit NF4)", "TRL (SFTTrainer)"],
      data: ["b-mc2/sql-create-context", "gretelai/synthetic_text_to_sql", "WikiSQL", "Spider 1.0 dev"],
      tools: ["vLLM (serving)", "sqlglot (schema-aware validation)", "NAS via SMB (checkpoints)", "HuggingFace Hub"],
    },
    highlights: [
      "Exact set match jumped from 9.2 percent (base Mistral 7B v0.3) to 87.0 percent on the 500-example internal test split. A 77.8 percentage point lift from a single fine-tune run.",
      "Schema-aware valid SQL hit 97.4 percent. The original string-match validator reported 0 percent; rewriting it to execute queries against table schemas turned a panic into a real result.",
      "Trained on a single RTX 3080 Ti with ~8.25 GB peak VRAM. The 3.75 GB headroom budgeted up front meant zero OOM during a 1,173-second eval run on 500 examples.",
      "WikiSQL execution accuracy of 28.19 percent on 15,878 test examples, evaluated by actually running the predicted SQL against the WikiSQL table rows.",
      "Picked Mistral 7B v0.3 over Llama 3.1 8B and Phi-3.5-mini after a written decision matrix on VRAM, license, code pretraining, and instruction template stability.",
      "Adapter merged into base weights and exported in safetensors. Loads into vLLM with no extra flags. Released under Apache 2.0 on HuggingFace.",
    ],
    benchmarks: [
      { name: "Exact set match", value: "87.0%", note: "internal test, 500 examples" },
      { name: "Baseline EM", value: "9.2%", note: "base Mistral, same split" },
      { name: "Valid SQL (schema-aware)", value: "97.4%", note: "vs 86.2% baseline" },
      { name: "WikiSQL execution accuracy", value: "28.19%", note: "15,878 examples" },
      { name: "Peak VRAM", value: "8.25 GB", note: "on 12 GB RTX 3080 Ti" },
    ],
  },
  {
    year: "2026",
    title: "LinkedIn Post Swarm",
    slug: "linkedin-post-swarm",
    category: "Agentic content pipeline",
    status: "Live",
    tagline: "A multi-agent AI pipeline that researches, drafts, critiques, and publishes LinkedIn posts, with a human approval gate before every post.",
    summary:
      "A multi-agent publishing workflow that uses Claude, Ollama, Playwright, and Telegram for draft generation, review, approval, and scheduled publishing.",
    details:
      "The system includes critic-revision loops, source aggregation, state management, retries, and escalation paths so autonomy stays controllable.",
    proof: "Human-in-the-loop approvals, resilient retries, scheduled output.",
    why: "Maintaining a consistent LinkedIn presence was taking hours I did not have, and I kept skipping it. The system had to match my voice exactly: no hustle content, no vague motivation, only genuine technical signal. The harder engineering problem was keeping the human in the loop without making the approval flow annoying enough to skip.",
    skills: ["Agent orchestration", "Prompt engineering", "Playwright", "Telegram Bot API", "Workflow reliability"],
    stats: [
      { value: "~1/day", label: "Follower requests (was ~1/month)" },
      { value: "5×", label: "Engagement growth in 1 month" },
      { value: "6", label: "Posts published" },
    ],
    architecture: [
      {
        name: "Publishing pipeline",
        span: 4,
        dark: true,
        html: `<svg class="flow-svg" viewBox="0 0 880 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LinkedIn post publishing pipeline">
  <defs>
    <marker id="li-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
    <marker id="li-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--bg-accent)"/>
    </marker>
  </defs>

  <g transform="translate(10,30)">
    <rect class="node-box" width="140" height="80" rx="10"/>
    <text class="node-label" x="70" y="28">Research</text>
    <text class="node-sub" x="70" y="48">Qwen2.5 14B Q4</text>
    <text class="node-sub" x="70" y="64">7 RSS sources</text>
  </g>

  <g transform="translate(190,30)">
    <rect class="node-box" width="140" height="80" rx="10"/>
    <text class="node-label" x="70" y="28">Orchestrate</text>
    <text class="node-sub" x="70" y="48">Claude Sonnet</text>
    <text class="node-sub" x="70" y="64">write + manage loop</text>
  </g>

  <g transform="translate(370,30)">
    <rect class="node-box" width="140" height="80" rx="10"/>
    <text class="node-label" x="70" y="28">Critic</text>
    <text class="node-sub" x="70" y="48">Qwen2.5 14B Q4</text>
    <text class="node-sub" x="70" y="64">threshold 6.5/10</text>
  </g>

  <g transform="translate(550,30)">
    <rect class="node-box" width="140" height="80" rx="10"/>
    <text class="node-label" x="70" y="28">Approve</text>
    <text class="node-sub" x="70" y="48">Telegram bot</text>
    <text class="node-sub" x="70" y="64">9 action buttons</text>
  </g>

  <g transform="translate(730,30)">
    <rect class="node-box" width="140" height="80" rx="10"/>
    <text class="node-label" x="70" y="28">Publish</text>
    <text class="node-sub" x="70" y="48">Playwright</text>
    <text class="node-sub" x="70" y="64">Mon/Thu 8AM IST</text>
  </g>

  <g color="var(--text-secondary)">
    <line class="edge" x1="150" y1="70" x2="190" y2="70" marker-end="url(#li-arr)"/>
    <line class="edge" x1="330" y1="70" x2="370" y2="70" marker-end="url(#li-arr)"/>
    <line class="edge" x1="510" y1="70" x2="550" y2="70" marker-end="url(#li-arr)"/>
    <line class="edge" x1="690" y1="70" x2="730" y2="70" marker-end="url(#li-arr)"/>
  </g>

  <path class="edge edge--dashed" d="M440,110 L440,162 L260,162 L260,110" marker-end="url(#li-loop)"/>
  <text class="edge-label" x="350" y="180">score &lt; 6.5, max 10 iterations</text>
</svg>`,
      },
      {
        name: "Research Agent",
        description: "Qwen2.5 14B Q4 via Ollama. Fetches and relevance-scores stories from 7 RSS and web sources with CoT reasoning. Prefers today's news with a 3-day fallback. Returns top-3 story briefs to the orchestrator.",
      },
      {
        name: "Claude Orchestrator",
        description: "claude-sonnet-4 via API. Picks story, writes post in persona, manages the revision loop, and escalates to Telegram if the critic loop exceeds 10 iterations. Prompt caching on all static context blocks to reduce API cost.",
      },
      {
        name: "Critic Agent",
        description: "Qwen2.5 14B Q4. Scores drafts on 4 weighted axes: authenticity (30%), depth (25%), recruiter signal (20%), hook quality (15%). Threshold 6.5. Returns structured JSON feedback with improvement directions for each revision.",
      },
      {
        name: "Telegram Approval Bot",
        html: `<ul class="bullet-list">
  <li><span><strong>Approve</strong> · schedule the draft for publishing</span></li>
  <li><span><strong>Regenerate</strong> · optional direction text, re-runs critic loop</span></li>
  <li><span><strong>Reject</strong> · discard and move to next story</span></li>
  <li><span><strong>Edit inline</strong> · direct text edit without regeneration</span></li>
  <li><span><strong>Undo</strong> · 3-step draft history</span></li>
  <li><span><strong>As Carousel</strong> · export to multi-slide PDF via fpdf2</span></li>
  <li><span><strong>As Article</strong> · publish as LinkedIn long-form</span></li>
  <li><span><strong>With Image</strong> · attach a generated or uploaded image</span></li>
  <li><span><strong>Cross-post</strong> · toggle Twitter/X and Bluesky alongside</span></li>
</ul>`,
      },
      {
        name: "Playwright Publisher",
        description: "Persistent browser session posts at scheduled time (Mon/Thu 8:00 AM IST). Screenshots confirmation. Supports Text, Carousel PDF (fpdf2), LinkedIn Article, and image-attached formats.",
      },
      {
        name: "Journal System: Monday posts",
        description: "LLMLingua-2 compresses journal.md entries (≥60% token reduction). Mistral 7B extracts a structured brief. Claude writes personal-update posts from the compressed work log, giving Monday posts a different voice from Thursday external-discovery posts.",
      },
    ],
    techStack: {
      core: ["Claude claude-sonnet-4 (orchestration)", "Qwen2.5 14B Q4 (research + critic)", "Mistral 7B (scheduler)", "Ollama (local SLM hosting)"],
      infra: ["Playwright (browser automation)", "Telegram Bot API (approval)", "FastAPI + HTMX (dashboard)", "RTX 3080 Ti (12 GB VRAM)"],
      tools: ["fpdf2 (carousel PDFs)", "tweepy (Twitter/X)", "atproto (Bluesky)", "LLMLingua-2 (compression)", "RSS feed parser"],
    },
    highlights: [
      "LinkedIn follower requests grew from ~1/month to ~1/day within one month of deployment.",
      "Post engagement grew from ~400 to ~2,000 impressions per month in four weeks.",
      "Zero autonomous posts: every draft routes through Telegram approval with full edit, undo, and regenerate controls.",
      "Critic agent enforces a 6.5/10 quality threshold across 4 axes before any draft reaches the approval queue.",
      "6 posts published; cross-posting support live for Twitter/X and Bluesky.",
    ],
  },
  {
    year: "2026",
    title: "Rudra",
    slug: "rudra",
    category: "Autonomous AI security orchestrator",
    status: "Parked",
    statusNote: "Frontier LLMs (Claude, GPT-4) have tightened restrictions on offensive security tasks. Smaller local models via Ollama lack the reasoning depth needed for the exploit loop. Two agents are fully implemented. Parked until the model landscape shifts.",
    tagline: "An autonomous multi-agent offensive security platform for creative, non-templated vulnerability exploitation.",
    summary:
      "A multi-agent offensive security architecture built around strict scope guardrails, sandboxed execution, and auditable event-driven workflows.",
    details:
      "The emphasis is on safe autonomy: typed validation, retry budgets, isolation boundaries, and guardrails that make the system usable for serious testing.",
    proof: "Recon + Analyst agents complete. Scope validation, sandbox, and audit trail fully designed.",
    why: "Tools like Metasploit work from rigid, templated modules: you pick an exploit and fire it. I wanted a system that reasons about a specific target surface, writes custom exploit code for that surface, tests it in a sandbox, and iterates on failures the way a skilled human would. The interesting engineering problem was keeping that autonomy safe: scope enforcement that cannot be overridden by an LLM, sandboxed execution with network isolation, and a full audit trail.",
    skills: ["AI security", "Sandbox design", "Distributed systems", "Event-driven architecture", "API integration"],
    stats: [
      { value: "4", label: "Agent types designed" },
      { value: "2 / 4", label: "Agents fully implemented" },
      { value: "22 GB", label: "Total cluster VRAM" },
    ],
    architecture: [
      {
        name: "System overview",
        span: 4,
        dark: true,
        html: `<svg class="flow-svg" viewBox="0 0 880 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rudra agent architecture">
  <defs>
    <marker id="ru-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>

  <g transform="translate(10,25)">
    <rect class="node-box" width="180" height="80" rx="10"/>
    <text class="node-label" x="90" y="28">Target Input</text>
    <text class="node-sub" x="90" y="46">CLI rakshak / FastAPI</text>
    <text class="node-sub" x="90" y="62">scope definition</text>
  </g>

  <g transform="translate(230,25)">
    <rect class="node-box" width="180" height="80" rx="10"/>
    <text class="node-label" x="90" y="28">Scope Check</text>
    <text class="node-sub" x="90" y="46">hard-coded Python</text>
    <text class="node-sub" x="90" y="62">RFC1918 / loopback blocked</text>
  </g>

  <g transform="translate(450,25)">
    <rect class="node-box" width="180" height="80" rx="10"/>
    <text class="node-label" x="90" y="28">Agent Chain</text>
    <text class="node-sub" x="90" y="46">Recon ✓ · Analyst ✓</text>
    <text class="node-sub" x="90" y="62">Exploit ⏸ · Kafka bus</text>
  </g>

  <g transform="translate(670,25)">
    <rect class="node-box" width="180" height="80" rx="10"/>
    <text class="node-label" x="90" y="28">Docker Sandbox</text>
    <text class="node-sub" x="90" y="46">300s TTL, isolated</text>
    <text class="node-sub" x="90" y="62">iptables scope guard</text>
  </g>

  <g color="var(--text-secondary)">
    <line class="edge" x1="190" y1="65" x2="230" y2="65" marker-end="url(#ru-arr)"/>
    <line class="edge" x1="410" y1="65" x2="450" y2="65" marker-end="url(#ru-arr)"/>
    <line class="edge" x1="630" y1="65" x2="670" y2="65" marker-end="url(#ru-arr)"/>
  </g>
</svg>`,
      },
      {
        name: "Client to Orchestrator",
        description: "CLI (rakshak) or FastAPI accepts target hostname/IP and scope definition. Scope validated at input: RFC1918, loopback, and link-local addresses rejected before any agent is spawned. Pre-scan health check verifies Ray cluster, Ollama, Docker, Redis, Kafka, Cassandra, and Qdrant.",
      },
      {
        name: "Orchestrator (FastAPI + Ray actor)",
        description: "Manages agent lifecycle, concurrency budget (Redis counter), and heartbeat monitoring (120s timeout). Scope enforcement is hard-coded Python, never delegated to an LLM instruction.",
      },
      {
        name: "Shared Bus",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>Kafka</strong> · event routing between agents</span></li>
  <li><span><strong>Redis</strong> · concurrency budget and live state</span></li>
  <li><span><strong>Cassandra</strong> · persistent findings and attempt history</span></li>
  <li><span><strong>Qdrant</strong> · semantic CVE search and partial-win similarity</span></li>
</ul>`,
      },
      {
        name: "Recon Agent ✅ Complete",
        description: "Fingerprints open ports, services, versions, frameworks, auth mechanisms, and API endpoints. Writes surface map to Redis and publishes to Kafka rudra.recon.discovered. Results flow into Cassandra target_intelligence.",
      },
      {
        name: "Analyst Agent ✅ Complete",
        description: "Consumes surface map, queries Qdrant CVE knowledge base, fetches CVSS scores from NVD API. Scores CVEs by confidence. CVSS scores are always fetched from NVD, never estimated by LLM.",
      },
      {
        name: "Exploit Agent (Parked)",
        html: `<ul class="bullet-list">
  <li><span><strong>Reason</strong> · LLM analyzes CVE and target surface to plan approach</span></li>
  <li><span><strong>Write</strong> · generates Python exploit, AST-validated before execution</span></li>
  <li><span><strong>Execute</strong> · runs in isolated Docker sandbox, max 300s</span></li>
  <li><span><strong>Interpret</strong> · LLM reads output, classifies success or failure mode</span></li>
  <li><span><strong>Iterate</strong> · up to 5 retries with failure context; extended if progress_score &gt; 0.7</span></li>
</ul>`,
      },
      {
        name: "Sandbox",
        html: `<ul class="bullet-list">
  <li><span><strong>Ephemeral container</strong> · fresh Docker instance per exploit run</span></li>
  <li><span><strong>300s TTL</strong> · auto-destroyed on completion or timeout</span></li>
  <li><span><strong>iptables whitelist</strong> · Linux (M1) allows only target IPs</span></li>
  <li><span><strong>tinyproxy</strong> · traffic cop on Windows machines (M2/M3)</span></li>
  <li><span><strong>Scope breach kill</strong> · any out-of-scope connection terminates container immediately</span></li>
</ul>`,
      },
    ],
    techStack: {
      core: ["Python 3.11", "FastAPI", "Ray (distributed agents)", "LiteLLM + Ollama", "LangGraph"],
      infra: ["Kafka (event bus)", "Redis (state)", "Cassandra (findings)", "Qdrant (semantic search)", "Docker (sandbox)"],
      tools: ["impacket", "scapy", "pwntools", "paramiko", "NVD API (CVSS)", "ruff", "mypy", "pytest"],
    },
    highlights: [
      "Recon Agent fully implemented: fingerprints ports, services, versions, auth mechanisms, and API endpoints.",
      "Analyst Agent fully implemented: maps findings to CVEs via Qdrant semantic search with CVSS scores from NVD, never LLM-estimated.",
      "Scope enforcement is hard-coded Python: RFC1918 and loopback always blocked regardless of target configuration.",
      "AST-based code validator checks every generated exploit for syntax, import whitelist, and blocked patterns before sandbox execution.",
      "3-machine Ray cluster provides 22 GB total VRAM (RTX 3080 Ti + A1000 + T600) for distributed agent workloads.",
    ],
  },
  {
    year: "2026",
    title: "LocalLeads",
    slug: "local-leads",
    category: "AI-powered lead generation workflow",
    status: "Live",
    statusNote: "Pivoted from automated batch outreach. Website generation costs ~₹500/site, so sites are now built on demand when a business shows interest. Current focus is discovery and cold email showing what can be added to their existing IT infrastructure.",
    tagline: "An AI pipeline that finds local businesses without a digital presence and pitches them one.",
    summary:
      "An end-to-end backend system for business discovery, AI content generation, site assembly, deployment, and personalized outreach.",
    details:
      "Operational controls include SQLite state tracking, Telegram approvals, deployment automation, and delivery flows aimed at production-style reliability.",
    proof: "~25 businesses contacted, live deployment automation, Telegram approval gates.",
    why: "Local businesses in India have low digital presence. The idea was to eliminate the manual work of finding them, building a site, deploying it, and pitching it, replacing a multi-hour agency process with an automated pipeline that runs in minutes. The hard part was keeping the cost low enough for the economics to work.",
    skills: ["Backend development", "Playwright", "SQLite", "Workflow engineering", "Operational automation"],
    stats: [
      { value: "~25", label: "Businesses contacted" },
      { value: "< 2 min", label: "Site generation time" },
      { value: "₹500", label: "Cost per generated site" },
    ],
    architecture: [
      {
        name: "End-to-end pipeline",
        span: 4,
        dark: true,
        html: `<ol class="flow-steps">
  <li class="flow-step">
    <div class="flow-step__num">01</div>
    <div class="flow-step__body">
      <h4>Scrape</h4>
      <p>Playwright scrapes Google Maps by category, city, and radius. Filters to businesses without a website and with a valid phone number.</p>
      <div class="flow-step__tags"><span>Google Maps</span><span>Playwright</span><span>SQLite</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">02</div>
    <div class="flow-step__body">
      <h4>State Track</h4>
      <p>SQLite records every discovered business, processing status, deploy URL, and outreach history. Prevents duplicate pitches across runs.</p>
      <div class="flow-step__tags"><span>SQLite</span><span>14-day expiry</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">03</div>
    <div class="flow-step__body">
      <h4>Generate Site</h4>
      <p>Ollama SLMs generate copy (description, services, tagline) per business in under 2 minutes. Real images sourced online. Output is self-contained static HTML/CSS.</p>
      <div class="flow-step__tags"><span>Ollama SLMs</span><span>&lt; 2 min</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">04</div>
    <div class="flow-step__body">
      <h4>Deploy</h4>
      <p>Netlify CLI deploys to a live subdomain before the owner ever sees it. 14-day expiry with Telegram approval gate to keep free tier headroom.</p>
      <div class="flow-step__tags"><span>Netlify CLI</span><span>live URL</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">05</div>
    <div class="flow-step__body">
      <h4>Write Copy</h4>
      <p>Claude writes 2-3 scored message variants per business with auto-detected language (Hindi or English) based on name and location.</p>
      <div class="flow-step__tags"><span>Claude API</span><span>Hindi/English</span><span>scored</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">06</div>
    <div class="flow-step__body">
      <h4>Approve and Deliver</h4>
      <p>Full report card in Telegram: name, phone, live URL, scored variants. Owner picks one. Delivered via WhatsApp or cold email.</p>
      <div class="flow-step__tags"><span>Telegram approval</span><span>WhatsApp</span><span>cold email</span></div>
    </div>
  </li>
</ol>`,
      },
      {
        name: "Scraper (Playwright to Google Maps)",
        description: "Scrapes Google Maps for businesses matching configured categories, city, and radius. Filters to businesses without a website and with a valid phone number. No API key required. Results written to SQLite.",
      },
      {
        name: "State Manager (SQLite)",
        description: "Tracks all discovered businesses, processing status, deploy URLs, deploy dates, and outreach history. Prevents duplicate outreach across runs. Flags sites for the 14-day expiry check.",
      },
      {
        name: "Website Generator",
        description: "Ollama SLMs generate website copy (description, services, tagline) per business in under 2 minutes. Real images sourced online via image search. Output is a self-contained static HTML/CSS site.",
      },
      {
        name: "Netlify Deployer",
        description: "Deploys each generated site to Netlify via CLI. Business gets a live URL with a custom subdomain before the owner reviews. 14-day expiry with a Telegram approval gate before removal to keep Netlify free tier headroom.",
      },
      {
        name: "Sales Copy Writer (Claude)",
        description: "Claude writes 2–3 scored message variants per business with auto-detected language (Hindi/English) based on business name and location. Each variant is scored for clarity and conversion.",
      },
      {
        name: "Telegram Approval + Outreach",
        description: "Full report card per business: name, location, phone, generated website URL, and scored message variants. Owner approves one variant. Delivery via WhatsApp (whatsapp-web.js) or cold email for IT advisory pitches.",
      },
    ],
    techStack: {
      core: ["Python", "Claude API (sales copy)", "Ollama SLMs (site content)", "Playwright (scraping)"],
      infra: ["Netlify CLI (deployment)", "whatsapp-web.js (WhatsApp)", "SQLite (state)", "Telegram Bot API (approval)"],
      tools: ["Static HTML/CSS generator", "Auto Hindi/English lang detection", "Google Maps scraping", "python-dotenv"],
    },
    highlights: [
      "Scrapes Google Maps to find businesses without websites and with a valid phone. No API key, no spend.",
      "Generates a complete static website per business using local Ollama SLMs in under 2 minutes, with real images sourced online.",
      "Deploys to Netlify automatically before human review, with a live URL included in every pitch.",
      "Claude writes 2–3 scored, language-appropriate message variants per business with one-click Telegram approval.",
      "~25 businesses discovered and contacted; pivoted to cold email + IT advisory after cost analysis showed ₹500/site spend.",
    ],
  },
  {
    year: "2026",
    title: "ATIS",
    slug: "atis",
    category: "Autonomous trading intelligence system",
    status: "In Progress",
    tagline: "A near-institutional-grade multi-agent AI system for swing trading on Indian equities. 59 agents, a live Neo4j knowledge graph, a Rust hot path, and a 3-machine K3s cluster at home.",
    summary:
      "A 6-tier autonomous system that ingests research papers and filings, builds a causal knowledge graph, backtests theses with walk-forward and Monte Carlo validation, and generates daily ranked swing trade signals on 600 NSE/BSE stocks.",
    details:
      "The system is built on three principles: every signal traces to a validated thesis in the knowledge graph, every LLM reasoning step is verified against Neo4j facts, and the architecture self-improves through Elo-based thesis lifecycle management and agent decision auditing.",
    proof: "59 agents built, Rust hot path implemented, 85/100 system effectiveness score on free data alone.",
    why: "I wanted to replace intuition-based trading with something systematic and auditable, where every signal has a traceable, backtested reason. I also wanted to understand what near-institutional-grade tooling actually looks like when you strip away the Bloomberg terminal and the vendor data feeds. The constraint of free data only forced cleaner thinking: if the architecture works here, it works anywhere. The Rust hot path came from a real pain point (broker connection limits and Python's 5 to 15 ms latency floor), not from wanting to use Rust for its own sake.",
    skills: ["LangGraph", "Neo4j", "Rust", "VectorBT", "GraphRAG", "K3s", "Kafka", "Qdrant"],
    stats: [
      { value: "59", label: "Agents across 7 layers" },
      { value: "<5μs", label: "Tick-to-signal latency (Rust)" },
      { value: "85/100", label: "System effectiveness score" },
    ],
    architecture: [
      {
        name: "Six-tier pipeline",
        span: 4,
        dark: true,
        html: `<ol class="flow-steps">
  <li class="flow-step">
    <div class="flow-step__num">01</div>
    <div class="flow-step__body">
      <h4>Knowledge Pipeline</h4>
      <p>Ingest research papers and filings, extract entities, build deduplicated theses with provenance.</p>
      <div class="flow-step__tags"><span>ingestion</span><span>extraction</span><span>thesis building</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">02</div>
    <div class="flow-step__body">
      <h4>Backtesting Engine</h4>
      <p>Walk-forward and Monte Carlo validation with full transaction cost accounting on GPU.</p>
      <div class="flow-step__tags"><span>walk-forward</span><span>Monte Carlo</span><span>portfolio sim</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">03</div>
    <div class="flow-step__body">
      <h4>Daily Screening</h4>
      <p>Regime detection, news ingestion, technical scanner, and fundamental filter run before market open.</p>
      <div class="flow-step__tags"><span>regime</span><span>news</span><span>scanner</span><span>fundamentals</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">04</div>
    <div class="flow-step__body">
      <h4>Graph Reasoning</h4>
      <p>GraphRAG multi-hop traversal, subgraph narration, and causal chain analysis over the knowledge graph.</p>
      <div class="flow-step__tags"><span>GraphRAG</span><span>subgraph narrator</span><span>causal chains</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">05</div>
    <div class="flow-step__body">
      <h4>Live Monitoring</h4>
      <p>Real-time position monitor, Elo updater, risk checks, and drawdown protection on every tick.</p>
      <div class="flow-step__tags"><span>positions</span><span>Elo updater</span><span>risk</span><span>drawdown</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">06</div>
    <div class="flow-step__body">
      <h4>Output</h4>
      <p>Ranked daily signals, dummy trades for tracking, live dashboard, and Telegram approvals.</p>
      <div class="flow-step__tags"><span>ranked signals</span><span>dummy trades</span><span>dashboard</span><span>Telegram</span></div>
    </div>
  </li>
</ol>`,
      },
      {
        name: "GraphRAG reasoning chain",
        description: "Agents never receive raw Cypher output. Every reasoning step is verified against Neo4j; if hallucination rate goes above 15 percent, a Telegram alert fires.",
        span: 4,
        html: `<svg class="flow-svg" viewBox="0 0 880 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GraphRAG reasoning chain">
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
    <marker id="arr-alert" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--bg-accent)"/>
    </marker>
  </defs>

  <g transform="translate(20,40)">
    <rect class="node-box" width="140" height="74" rx="10"/>
    <text class="node-label" x="70" y="32">Neo4j KG</text>
    <text class="node-sub" x="70" y="52">600 stocks · theses</text>
  </g>
  <g transform="translate(190,40)">
    <rect class="node-box" width="140" height="74" rx="10"/>
    <text class="node-label" x="70" y="32">GraphRAG</text>
    <text class="node-sub" x="70" y="52">multi-hop · max 3</text>
  </g>
  <g transform="translate(360,40)">
    <rect class="node-box" width="140" height="74" rx="10"/>
    <text class="node-label" x="70" y="32">Mistral 7B</text>
    <text class="node-sub" x="70" y="52">subgraph narrator</text>
  </g>
  <g transform="translate(530,40)">
    <rect class="node-box" width="140" height="74" rx="10"/>
    <text class="node-label" x="70" y="32">7-step CoT</text>
    <text class="node-sub" x="70" y="52">regime → trade</text>
  </g>
  <g transform="translate(700,40)">
    <rect class="node-box" width="160" height="74" rx="10"/>
    <text class="node-label" x="80" y="32">Verification</text>
    <text class="node-sub" x="80" y="52">claims vs Neo4j</text>
  </g>

  <g color="var(--text-secondary)">
    <line class="edge" x1="160" y1="77" x2="190" y2="77" marker-end="url(#arr)"/>
    <line class="edge" x1="330" y1="77" x2="360" y2="77" marker-end="url(#arr)"/>
    <line class="edge" x1="500" y1="77" x2="530" y2="77" marker-end="url(#arr)"/>
    <line class="edge" x1="670" y1="77" x2="700" y2="77" marker-end="url(#arr)"/>
  </g>

  <g transform="translate(700,170)">
    <rect class="alert-box" width="160" height="60" rx="10"/>
    <text class="node-label" x="80" y="28" style="fill: var(--bg-accent);">Telegram alert</text>
    <text class="node-sub" x="80" y="46">hallucination &gt; 15%</text>
  </g>
  <path class="edge edge--dashed" d="M780,114 L780,170" marker-end="url(#arr-alert)"/>
  <text class="edge-label" x="820" y="146">fail</text>
</svg>`,
      },
      {
        name: "59-agent swarm, 7 layers",
        description: "Ingestion (7), Knowledge (9), Analysis (5), Signal (7), Infrastructure (14), Validation (3), Additional (10). Each agent has a fixed LLM, temperature, and output contract.",
      },
      {
        name: "Neo4j knowledge graph",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>Ontology</strong> · node and edge type schema</span></li>
  <li><span><strong>Knowledge</strong> · thesis registry with Elo scores</span></li>
  <li><span><strong>Market Structure</strong> · 600-stock dependency graph</span></li>
  <li><span><strong>Temporal</strong> · alpha decay over time</span></li>
  <li><span><strong>Event</strong> · historical causal chains</span></li>
  <li><span><strong>Decision</strong> · agent verdict audit trail</span></li>
</ul>
<p class="bullet-list__meta">20 node types  ·  25 edge types</p>`,
      },
      {
        name: "Rust hot path",
        description: "Single Dhan WebSocket feeds Chronicle Queue. Rust fans out ticks to live, dummy, and backtest consumers from one connection. Under 5 μs end to end. Eliminates Python's GIL overhead and broker connection exhaustion.",
      },
      {
        name: "3-machine K3s cluster",
        html: `<ul class="bullet-list">
  <li><span><strong>M1</strong> · RTX 3080 Ti, 12 GB · orchestrator, Qwen2.5 14B, GPU backtesting</span></li>
  <li><span><strong>M2</strong> · A1000, 6 GB · Mistral 7B, knowledge graph generation</span></li>
  <li><span><strong>M3</strong> · T600, 4 GB · PostgreSQL, Neo4j, Qdrant, Redis</span></li>
</ul>
<p class="bullet-list__meta">Ceph replication factor 2  ·  any one node can fail</p>`,
      },
    ],
    techStack: {
      core: ["Python 3.11", "Rust (Chronicle Queue hot path)", "LangGraph (agent orchestration)", "Neo4j (knowledge graph)", "Qwen2.5 14B + Mistral 7B via Ollama", "Claude API (validation, 5% of ops)"],
      infra: ["K3s (3-node cluster)", "Ceph (distributed storage)", "PostgreSQL + streaming replication", "Redis Streams + Sentinel", "Qdrant (vector DB)", "Docker"],
      tools: ["VectorBT (GPU backtesting)", "Optuna (Bayesian optimisation)", "spaCy en_core_web_trf + custom NER", "scipy (correlation, regime clustering)", "Celery", "Streamlit", "Telegram Bot API"],
    },
    highlights: [
      "59 agents across 7 layers covering knowledge ingestion, backtesting, daily screening, graph reasoning, live monitoring, and output.",
      "Neo4j knowledge graph with 6 layers, 20 node types, and 25 edge types. Enables second and third-order causal propagation across 600 NSE/BSE stocks.",
      "GraphRAG verification agent checks every LLM reasoning claim against Neo4j facts and logs hallucination rate per agent. Alert fires above 15 percent.",
      "Rust and Chronicle Queue hot path achieves under 5 μs tick-to-consumer latency and solves broker connection exhaustion with a single WebSocket.",
      "Walk-forward and Monte Carlo backtesting via VectorBT with full transaction cost accounting. System effectiveness: 85/100 on free data.",
      "Elo-based thesis lifecycle management and temporal edge decay mean the system's knowledge improves over time without manual intervention.",
      "3-machine home K3s cluster with Ceph replication. If any one machine fails, the other two hold all Tier 1 data and trading continues.",
    ],
  },
  {
    year: "2026",
    title: "Dhan MCP Server",
    slug: "dhan-mcp",
    category: "Model Context Protocol server",
    status: "Released",
    tagline: "A Model Context Protocol server that lets Claude and Copilot query my live Dhan broker account and Indian market data in plain English.",
    summary:
      "A Model Context Protocol server that exposes my live DhanHQ broker account and Indian market data to any MCP client, so Claude or Copilot can answer questions about holdings, positions, and option chains directly.",
    details:
      "Built on the official DhanHQ SDK v2 with 11 live tools across portfolio, market data, options, and instrument discovery, two transports, and order placement implemented but disabled so it can never touch real money unintentionally.",
    proof: "11 live MCP tools, official DhanHQ SDK v2, order placement disabled by default for safety.",
    why: "I wanted my AI assistants to talk to my actual broker account, not a toy sandbox. So I wrapped Dhan's official SDK in a Model Context Protocol server, which means Claude or Copilot can pull my holdings, scan an option chain, or fetch historical data just by being asked in plain English. I deliberately left order placement commented out: the tools are written and tested, but a model that can read my portfolio is useful, while a model that can place orders on its own is a liability I did not want by default. Turning trading on is a conscious choice I make, not something that ships enabled.",
    skills: ["MCP", "FastMCP", "DhanHQ API", "Python", "Options data", "API integration"],
    href: "https://github.com/shreyash-Pandey-Katni/Dhan-MCP-Server",
    ctaLabel: "View on GitHub",
    stats: [
      { value: "11", label: "Live MCP tools" },
      { value: "Δ Θ Γ V", label: "Option Greeks per contract" },
      { value: "2", label: "Transports (stdio + HTTP)" },
    ],
    architecture: [
      {
        name: "Request lifecycle",
        span: 4,
        dark: true,
        html: `<ol class="flow-steps">
  <li class="flow-step">
    <div class="flow-step__num">01</div>
    <div class="flow-step__body">
      <h4>MCP Client</h4>
      <p>Claude, Copilot, or any MCP host calls a tool over stdio or HTTP.</p>
      <div class="flow-step__tags"><span>Claude</span><span>Copilot</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">02</div>
    <div class="flow-step__body">
      <h4>FastMCP</h4>
      <p>Tool dispatched through FastMCP with a typed signature and a shared app context.</p>
      <div class="flow-step__tags"><span>typed tools</span><span>app context</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">03</div>
    <div class="flow-step__body">
      <h4>Config</h4>
      <p>Credentials load from env or INI, secrets masked in logs, sandbox stub if DHAN_FAKE is set.</p>
      <div class="flow-step__tags"><span>env / INI</span><span>secret masking</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">04</div>
    <div class="flow-step__body">
      <h4>DhanHQ SDK v2</h4>
      <p>Official SDK call routed to the right Dhan REST endpoint for the requested data.</p>
      <div class="flow-step__tags"><span>dhanhq 2.0</span><span>REST</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">05</div>
    <div class="flow-step__body">
      <h4>Dhan REST API</h4>
      <p>Live NSE and BSE data, holdings, positions, or a full option chain comes back.</p>
      <div class="flow-step__tags"><span>NSE / BSE</span><span>option chain</span></div>
    </div>
  </li>
  <li class="flow-step">
    <div class="flow-step__num">06</div>
    <div class="flow-step__body">
      <h4>Normalize</h4>
      <p>Failure payloads parsed, DH-1111 treated as empty, clean JSON returned to the model.</p>
      <div class="flow-step__tags"><span>DH-1111 empty</span><span>clean JSON</span></div>
    </div>
  </li>
</ol>`,
      },
      {
        name: "Tool surface",
        html: `<ul class="bullet-list bullet-list--two-col">
  <li><span><strong>Portfolio</strong> · holdings, positions, orders, order by id</span></li>
  <li><span><strong>Market data</strong> · OHLC, intraday minute, historical daily</span></li>
  <li><span><strong>Options</strong> · chain with Greeks, expiry list, contract lookup</span></li>
  <li><span><strong>Discovery</strong> · security id search across NSE and BSE</span></li>
</ul>
<p class="bullet-list__meta">11 live tools  ·  1 config resource</p>`,
      },
      {
        name: "Order placement, off by default",
        description: "place_order and cancel_order are fully implemented but left commented out in the server. The running service is read-only by design, so an LLM cannot move real money by accident. Enabling live trading is a deliberate one-line change, not the default.",
      },
      {
        name: "Config and safety",
        html: `<ul class="bullet-list">
  <li><span><strong>Credentials</strong> · env vars or INI, never hardcoded</span></li>
  <li><span><strong>Secret masking</strong> · tokens shown as abc***xyz in logs</span></li>
  <li><span><strong>Sandbox stub</strong> · DHAN_FAKE swaps in a mock client</span></li>
  <li><span><strong>Graceful empty</strong> · DH-1111 returns empty data, not an error</span></li>
  <li><span><strong>Rate aware</strong> · respects the 1 request / 3s options limit</span></li>
</ul>`,
      },
      {
        name: "Two transports",
        description: "stdio for local hosts like Claude Desktop and Copilot, and streamable-HTTP for running the server remotely. Same tool surface either way, selected without touching tool code.",
      },
    ],
    techStack: {
      core: ["Python 3.11", "FastMCP (mcp[cli] 1.14)", "DhanHQ SDK v2", "Pydantic v2", "Model Context Protocol"],
      infra: ["stdio transport", "Streamable-HTTP transport", "INI / env config"],
      tools: ["DhanHQ REST API", "NSE / BSE instruments", "Option chain + Greeks", "DHAN_FAKE sandbox stub"],
    },
    highlights: [
      "Eleven live MCP tools cover portfolio (holdings, positions, orders), market data (OHLC, intraday, historical), options (chain with Greeks, expiries, contract lookup), and instrument discovery across NSE and BSE.",
      "Order placement and cancellation are fully implemented but left commented out, so an LLM connected to the server is read-only by default and cannot move real money by accident.",
      "The option chain tool returns full Greeks (Delta, Theta, Gamma, Vega) and respects Dhan's one request per three seconds options limit.",
      "Two transports from the same code: stdio for local hosts like Claude Desktop and Copilot, and streamable-HTTP for running the server remotely.",
      "Credentials load from environment or an INI file with secret masking in logs, and a DHAN_FAKE sandbox stub lets me develop without live access.",
      "Feeds the same DhanHQ market data that the Rust hot path in ATIS consumes, so the broker integration is shared across my trading work.",
    ],
  },
  {
    year: "2026",
    title: "CodeAtlas",
    slug: "codeatlas",
    category: "Code comprehension tool",
    status: "Released",
    tagline: "Paste C source code, get an interactive Mermaid flowchart for every function, rendered on a Figma-like canvas with zoom, pan, and SVG or PNG export.",
    summary:
      "A code comprehension tool that turns C source into per-function Mermaid flowcharts, with two interchangeable engines: a deterministic AST path and an LLM path, served over a FastAPI backend and a React canvas.",
    details:
      "The same backend exposes two diagram modes selected by an environment flag. AST mode parses C with ast-grep and emits Mermaid directly, fast and deterministic with no model in the loop. LLM mode sends each function to a model through LiteLLM, so it works against local Ollama, GitHub Models, OpenAI, or Anthropic without code changes.",
    proof: "Two diagram engines (AST and LLM), four-service Docker stack, default to local Ollama so it runs free and offline.",
    why: "Reading unfamiliar C is slow, and most diagram tools either need a heavy IDE or hand-drawing. I wanted to paste a file and immediately see the control flow per function. Building both an AST engine and an LLM engine forced a clean separation: the deterministic path proves correctness and runs without a model, while the LLM path adds richer narration when a backend is available.",
    skills: ["FastAPI", "ast-grep", "LiteLLM", "React", "TypeScript", "Mermaid", "WebSocket", "Docker"],
    href: "https://github.com/shreyash-Pandey-Katni/CodeAtlas",
    ctaLabel: "View on GitHub",
    stats: [
      { value: "2", label: "Diagram engines (AST + LLM)" },
      { value: "4", label: "Dockerized services" },
      { value: "Local", label: "Default LLM via Ollama" },
    ],
    architecture: [
      {
        name: "Two diagram engines",
        html: `<ul class="bullet-list">
  <li><span><strong>AST mode</strong> · ast-grep parses C and emits Mermaid directly, deterministic, no model needed</span></li>
  <li><span><strong>LLM mode</strong> · each function sent through LiteLLM with few-shot prompts for richer diagrams</span></li>
  <li><span><strong>Provider agnostic</strong> · Ollama, GitHub Models, OpenAI, or Anthropic, switched by config</span></li>
  <li><span><strong>Persistence</strong> · aiosqlite stores parsed functions and generated diagrams</span></li>
</ul>`,
      },
      {
        name: "Frontend canvas",
        description: "React 19 and TypeScript with Tailwind and Mermaid 11, built with Vite and served by Nginx, which also proxies the API and the WebSocket back to the FastAPI backend. The canvas supports zoom, pan, and SVG or PNG export per function.",
      },
    ],
    techStack: {
      core: ["FastAPI (Python 3.11)", "ast-grep-py", "LiteLLM", "aiosqlite", "Uvicorn"],
      infra: ["Docker Compose (4 services)", "Nginx (SPA + API/WS proxy)", "Ollama (local LLM)"],
      tools: ["React 19", "TypeScript", "Tailwind CSS 4", "Mermaid 11", "Vite"],
    },
    highlights: [
      "Two interchangeable diagram engines from one backend: a deterministic ast-grep AST path that needs no model, and an LLM path for richer diagrams.",
      "LLM calls go through LiteLLM, so the same code runs against local Ollama, GitHub Models, OpenAI, or Anthropic, selected by configuration.",
      "React 19 and TypeScript canvas renders Mermaid per function with zoom, pan, and SVG or PNG export.",
      "Ships as a four-service Docker Compose stack and defaults to local Ollama, so it runs free and offline out of the box.",
    ],
  },
  {
    year: "2026",
    title: "GraphMind",
    slug: "graphmind",
    category: "GraphRAG knowledge graph",
    status: "Released",
    tagline: "A GraphRAG system over financial trade data that fuses a Neo4j knowledge graph, dense vector search, and BM25 into one retrieval surface for a LangGraph agent.",
    summary:
      "A GraphRAG build that ingests trade and research data into a Neo4j knowledge graph and a ChromaDB vector store, then answers questions through a LangGraph ReAct agent that picks between graph traversal, dense retrieval, and hybrid search.",
    details:
      "Retrieval is three-pronged: Neo4j Cypher for multi-hop relationship questions (which analysts covered an instrument, how funds connect to trades to sectors), dense vectors for semantic similarity, and BM25 for exact terms like tickers. Dense and sparse results are merged with Reciprocal Rank Fusion so meaning and exact-match both count.",
    proof: "Neo4j + ChromaDB + BM25 fused via Reciprocal Rank Fusion, exposed as tools to a LangGraph ReAct agent.",
    why: "Pure vector RAG misses relationship questions, and a pure knowledge graph misses fuzzy semantic ones. Financial data needs both, plus exact-match on tickers like HDFCBANK that embeddings smear together. Building all three retrievers and fusing them taught me where each one breaks and why a hybrid, agent-routed approach beats any single retriever.",
    skills: ["GraphRAG", "Neo4j", "Cypher", "ChromaDB", "BM25", "LangGraph", "NetworkX", "Reciprocal Rank Fusion"],
    href: "https://github.com/shreyash-Pandey-Katni/GraphMind",
    ctaLabel: "View on GitHub",
    stats: [
      { value: "3", label: "Retrievers fused (graph + dense + BM25)" },
      { value: "RRF", label: "Reciprocal Rank Fusion merge" },
      { value: "ReAct", label: "LangGraph agent routing" },
    ],
    architecture: [
      {
        name: "Three retrievers, one agent",
        html: `<ul class="bullet-list">
  <li><span><strong>Knowledge graph</strong> · Neo4j Cypher for multi-hop analyst, fund, trade, instrument, and sector relationships</span></li>
  <li><span><strong>Dense</strong> · ChromaDB vector search over sentence-transformer embeddings</span></li>
  <li><span><strong>Sparse</strong> · BM25Okapi for exact terms like tickers</span></li>
  <li><span><strong>Fusion</strong> · dense and BM25 merged with Reciprocal Rank Fusion before ranking</span></li>
  <li><span><strong>Routing</strong> · a LangGraph ReAct agent picks the right tool per question</span></li>
</ul>`,
      },
      {
        name: "Graph ingestion and constraints",
        description: "Uniqueness constraints on Instrument, Fund, Trade, Analyst, and Sector nodes are created before ingestion so repeated MERGE statements never silently duplicate nodes. NetworkX handles the smaller in-process graph and visualization alongside the Neo4j store.",
      },
    ],
    techStack: {
      core: ["Neo4j 5.20", "Cypher", "ChromaDB", "rank_bm25 (BM25Okapi)", "sentence-transformers"],
      infra: ["LangGraph", "LangChain", "neo4j Python driver", "Docker Compose"],
      tools: ["NetworkX", "Reciprocal Rank Fusion", "spaCy", "Ollama"],
    },
    highlights: [
      "Fuses three retrievers, a Neo4j knowledge graph, ChromaDB dense vectors, and BM25, into a single retrieval surface.",
      "Dense and sparse results are combined with Reciprocal Rank Fusion, so semantic meaning and exact-match terms like tickers both contribute.",
      "A LangGraph ReAct agent routes each question to graph traversal, vector search, or hybrid retrieval as the question demands.",
      "Uniqueness constraints on Instrument, Fund, Trade, Analyst, and Sector nodes prevent duplicate graph nodes during MERGE-based ingestion.",
    ],
  },
];

export const archiveProjects = [
  {
    period: "2023",
    title: "Semantic Search Engine",
    summary:
      "An earlier information retrieval build that combined semantic search ideas with enterprise documentation use cases and set up later work in retrieval-heavy AI systems.",
  },
  {
    period: "2022",
    title: "Super Resolution",
    summary:
      "An image enhancement project built to understand GAN-based vision pipelines and experiment rigor in visual ML work.",
  },
  {
    period: "2022",
    title: "Photo to Monet-style art",
    summary:
      "A CycleGAN style-transfer exploration that taught me a lot about training instability, qualitative evaluation, and visual debugging.",
  },
  {
    period: "2022",
    title: "Library Management",
    summary:
      "A MERN-stack build that sharpened my full-stack fundamentals around CRUD, search, and practical product structure.",
  },
];

export const roadmapProjects = [
  {
    status: "In progress",
    title: "PaperGraph",
    wide: true,
    summary:
      "GraphRAG question-answering over a curated corpus of research papers, fronted by a four-layer LLM firewall, with offline RAGAS evaluation and self-hosted Langfuse tracing, packaged for GCP Cloud Run.",
    details:
      "PaperGraph answers questions over research papers by fusing a Neo4j knowledge graph with vector retrieval, then guards the entire path with an LLM firewall built to survive untrusted input. It is the flagship artifact for production RAG, AI safety, and LLM observability.",
    highlights: [
      "GraphRAG retrieval: Neo4j knowledge-graph traversal plus vector search (pgvector and Chroma), fused with reciprocal-rank fusion.",
      "Four-layer LLM firewall: input intent-gate, retrieved-chunk sanitizer (an indirect prompt-injection defense), output guard, and per-IP rate plus token and cost caps.",
      "Measured 100 percent injection-block rate on a 20-prompt adversarial set, with zero false positives on benign questions.",
      "Offline RAGAS evaluation (faithfulness and context-precision) and self-hosted Langfuse tracing of latency, token cost, and retrieval hits.",
      "Dockerized for GCP Cloud Run at roughly zero cost at portfolio scale, with 45 passing tests.",
    ],
    stack: ["Python", "FastAPI", "Neo4j", "pgvector", "Chroma", "Langfuse", "RAGAS", "Ollama", "Llama Guard", "Docker", "GCP Cloud Run"],
    stats: [
      { value: "100%", label: "Injection-block rate" },
      { value: "4-layer", label: "LLM firewall" },
      { value: "45", label: "Tests passing" },
    ],
    href: "https://github.com/shreyash-Pandey-Katni/papergraph",
  },
  {
    status: "In progress",
    title: "KiranaIQ",
    summary:
      "A demand-forecasting and inventory copilot for Indian kirana stores, with LightGBM forecasts, SHAP explanations, A/B testing, OCR, and a Telegram bot.",
    href: "https://github.com/shreyash-Pandey-Katni/KiranaIQ",
  },
  {
    status: "In progress",
    title: "hybrid-search-bench",
    summary:
      "BM25, SPLADE, and dense retrieval combined with a LambdaMART learning-to-rank reranker, benchmarked on BEIR.",
    href: "https://github.com/shreyash-Pandey-Katni/hybrid-search-bench",
  },
  {
    status: "Planned",
    title: "KiranaIQ forecasting v2",
    summary:
      "Improve KiranaIQ forecasting accuracy with intermittent-demand handling and a single global model across stores.",
    href: "https://github.com/shreyash-Pandey-Katni/KiranaIQ",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "Go", "SQL", "JavaScript"],
  },
  {
    title: "AI and ML",
    items: [
      "PyTorch",
      "Transformers",
      "LLM pretraining",
      "Deep learning",
      "NLP",
      "Computer vision",
      "LangChain",
      "Hugging Face",
      "FAISS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Microservices",
      "REST APIs",
      "Spring Boot",
      "Kafka",
      "gRPC",
      "Flask",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "DevOps and data",
    items: [
      "Docker",
      "Jenkins",
      "NGINX",
      "Git",
      "Linux",
      "MySQL",
      "MongoDB",
      "Cassandra",
      "Redis",
    ],
  },
];

export const certifications = [
  "Neural Networks and Deep Learning - deeplearning.ai",
  "Improving Deep Neural Networks - deeplearning.ai",
  "Introduction to subagents by Anthropic",
  "Apache Kafka - IBM",
  "Enterprise Design Thinking - IBM",
];

export const homeContent = {
  eyebrow: "Shreyash Pandey // Software Development Engineer 2 at IBM",
  title:
    "I build AI systems, automation workflows, and backend products that survive production",
  lede:
    "My recent work sits where applied AI meets engineering discipline: locator auto-healing, semantic retrieval, internal copilots, multilingual model training, and automation pipelines with real operational guardrails.",
  highlights: [
    "5K+ test locators auto-healed",
    "3-tier ML plus VLM recovery design",
    "Hackathon-winning semantic search",
    "Open-source model training from scratch",
  ],
  metrics: [
    { value: "5K+", label: "test locators auto-healed" },
    { value: "4", label: "microservices in the SAT runtime" },
    { value: "83%", label: "Chrome accuracy in fallback mode" },
    { value: "70%", label: "fewer internal support tickets" },
    { value: "99.99%", label: "availability supported by prediction" },
    { value: "1st", label: "place in India at TechInterrupt" },
  ],
  heroPanel: {
    eyebrow: "Current proof surface",
    title: "Production systems, model work, and reliable automation in one stack",
    summary:
      "The strongest signal in the portfolio is not a single project. It is the combination of AI recovery design, service reliability, and hands-on model building shipped across work and independent systems.",
    proofs: [
      {
        label: "Recovery ladder",
        value: "3 tiers",
        detail: "CSS selectors first, then embeddings, then IBM Granite 3.3 VLM when ambiguity stays high.",
      },
      {
        label: "Runtime scale",
        value: "4K-5K rpm",
        detail: "SAT runtime decomposed into four services with sub-second latency and release-grade operational constraints.",
      },
      {
        label: "Model track",
        value: "125M",
        detail: "Phoenix 125M plus multilingual pretraining work built with custom tokenizers and training pipelines.",
      },
    ],
    featuredProjects: ["Phoenix 125M", "LinkedIn Post Swarm", "Rudra"],
  },
  focusIntro:
    "The common thread across my work is reliability under ambiguity. I like systems that need to reason, recover, and still stay operationally legible.",
};

export const aboutContent = {
  eyebrow: "Background and operating style",
  title: "About",
  intro:
    "I started in enterprise backend engineering and gradually moved toward AI systems because the hardest product problems kept living at that boundary: search, automation, observability, recovery, and trustworthy autonomy.",
  secondary:
    "Today I care most about building systems that are ambitious without being reckless. That usually means rigorous fallbacks, measurable quality, explicit state, and tooling that helps teams move faster without creating hidden fragility.",
  values: [
    {
      title: "Reliability over theater",
      description:
        "I prefer proof, observability, and recovery plans over flashy claims. The interesting part of AI work starts after the demo succeeds once.",
    },
    {
      title: "Context before code",
      description:
        "I like understanding the product, deployment environment, and failure surface before I decide what architecture is justified.",
    },
    {
      title: "Depth that compounds",
      description:
        "I intentionally go deep on a few areas that reinforce each other: backend systems, AI reliability, search, and automation workflows.",
    },
  ],
  outsideWork: [
    "I mentor and advise through Topmate when I can be concrete and useful.",
    "I write occasionally on Medium, usually when I have something implementation-heavy worth documenting.",
    "A lot of my personal time currently goes into multilingual NLP, agent systems, and AI security-oriented builds.",
  ],
  education: {
    school: "Bangalore Institute of Technology",
    degree: "Bachelor of Engineering, Computer Science",
    years: "2018 - 2022",
    detail: "CGPA: 7.2",
  },
};

export const projectsContent = {
  eyebrow: "2026 flagship builds",
  title: "Projects",
  intro:
    "The portfolio is now anchored around AI-heavy, backend-heavy projects that better reflect the direction I am taking professionally: model building, agent orchestration, secure autonomy, and workflow engineering.",
  archiveIntro:
    "Before the current generation of work, I used smaller ML and web projects to build the habits that still matter now: experimentation, debugging, and shipping complete systems.",
  roadmapIntro:
    "What I am building next. These are active repositories, shared early while the systems take shape.",
};

export const workContent = {
  eyebrow: "Case studies across product engineering and applied AI",
  title: "Selected Work",
  intro:
    "I work best on products that need both strong engineering fundamentals and pragmatic AI. That usually means shipping under production constraints, not just building prototypes.",
};

export const pageMeta = {
  "/": {
    title: "Shreyash Pandey, AI Systems Engineer",
    description:
      "Shreyash Pandey builds AI systems, agentic workflows, and backend platforms. Explore product work from IBM, flagship 2026 projects, and a portfolio focused on reliable applied AI engineering.",
  },
  "/work": {
    title: "Work · Shreyash Pandey",
    description:
      "SDE2 at IBM building AI-powered auto-healing for 5K+ test locators, microservice runtimes at 4–5K rpm, and a hackathon-winning semantic search engine. Three years of applied AI and backend engineering.",
  },
  "/about": {
    title: "About · Shreyash Pandey",
    description:
      "Background, skills, and operating style of Shreyash Pandey, AI systems engineer in Bengaluru with expertise in Python, Java, PyTorch, LangChain, and production reliability.",
  },
  "/projects": {
    title: "Projects · Shreyash Pandey",
    description:
      "Flagship 2026 builds: Phoenix 125M LLM trained from scratch, multilingual Hindi/Kannada models, an agentic LinkedIn publishing pipeline, an AI security orchestrator, and more.",
  },
};
