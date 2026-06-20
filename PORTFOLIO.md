# Shreyash Pandey — AI Systems Engineer

**Location:** Bengaluru, India  
**Email:** shreyash.pandey.katni@gmail.com  
**Website:** https://shreyash.co.in  
**GitHub:** https://github.com/shreyash-Pandey-Katni  
**LinkedIn:** https://www.linkedin.com/in/shreyash-pandey-katni/  
**HuggingFace:** https://huggingface.co/shreyash-Pandey-Katni  
**Medium:** https://shreyashpandeykatni.medium.com/  
**Stack Overflow:** https://stackoverflow.com/users/14551505/shreyash-pandey  
**Topmate:** https://topmate.io/shreyash_pandey_katni  

---

## Professional Focus

I build AI systems, automation workflows, and backend products that survive production. My recent work sits where applied AI meets engineering discipline: locator auto-healing, semantic retrieval, internal copilots, multilingual model training, and automation pipelines with real operational guardrails.

I am most interested in roles where AI systems, backend engineering, and reliability work intersect — agent infrastructure, evaluation-heavy product work, automation platforms, or developer tooling.

---

## Key Metrics

| Metric | Value |
|--------|-------|
| Test locators auto-healed | 5K+ |
| Microservices in the SAT runtime | 4 |
| Chrome accuracy in fallback mode | 83% |
| Fewer internal support tickets | 70% |
| System availability supported by prediction | 99.99% |
| TechInterrupt Hackathon rank in India | 1st place |

---

## Work Experience

### Software Development Engineer 2 — IBM Software Labs
**Bengaluru, India · 2024 – Present**

I design and ship reliability-heavy AI capabilities inside browser automation and testing products. The work combines embeddings, vision-language models, service decomposition, and a lot of operational discipline.

- Designed AI-powered auto-healing with a three-tier recovery ladder: CSS selectors, text embeddings, then IBM Granite 3.3 VLM.
- Built logic that autonomously corrects locator failures across 5K+ test cases with 100% Firefox accuracy and 83% Chrome accuracy in internal evaluation.
- Helped re-architect the SAT runtime from a monolith into four microservices handling 4K–5K requests per minute with sub-second latency.
- Led a Java 8 to 17 migration and CI/CD improvements that improved build speed by 30% while maintaining 99% uptime.

---

### Software Engineer 2 — Software AG (now IBM)
**Bengaluru, India · 2023 – 2024**

This phase pushed me deeper into AI product work: semantic retrieval, internal copilots, and prediction systems grounded in practical product needs rather than demos.

- Built a semantic search engine using NLP, knowledge graphs, and FAISS. Won the TechInterrupt Hackathon — 1st in India, 4th internationally.
- Developed an AI chatbot with LangChain and Flask that reduced internal support tickets by 70%.
- Created a failure prediction system using PyTorch and time-series analysis that supported 99.99% system availability.

---

### Software Engineer — Software AG
**Bengaluru, India · 2022 – 2023**

I worked on enterprise integration platform capabilities across Java, Spring Boot, and REST APIs, building the foundation that still shapes how I reason about production systems.

- Delivered webMethods platform features for enterprise integration use cases using Java and Spring Boot.
- Built with a strong emphasis on compatibility, API contracts, and release quality.
- Recognised as a 2023 Star Performer.

---

## Education

**Bachelor of Engineering, Computer Science**  
Bangalore Institute of Technology · 2018 – 2022 · CGPA: 7.2

---

## Flagship Projects (2026)

### Phoenix 125M — Decoder-only language model
**Status: Released · https://huggingface.co/shreyash-Pandey-Katni/phoenix-125m**

A LLaMA-style 125M parameter model trained from scratch on a single RTX 3080 Ti with a custom tokenizer, data pipeline, and training loop.

**Why:** I wanted to learn how LLMs actually work — not from an API, but by building one end-to-end. With a single 3080 Ti, training a 125M model from scratch was the right scope: ambitious enough to be real, small enough to be feasible on consumer hardware.

| Stat | Value |
|------|-------|
| Parameters | 125M |
| Tokens trained | ~2B |
| WinoGrande score | 0.507 (chance = 0.50) |
| HellaSwag | 0.279 (1K samples) |
| ARC-Easy | 0.358 (570 samples) |
| WikiText-103 PPL | 928.9 |
| License | Apache 2.0 |

**Architecture:**
- **Data Pipeline (7 stages):** HuggingFace/AIKosh download → PDF/HTML extraction (PyMuPDF, BeautifulSoup) → XLM-RoBERTa language detection + PII redaction → MinHash LSH deduplication → corpus mixing → BPE tokenizer training (32K vocab) → uint16 binary shards for memory-mapped loading.
- **Model:** Decoder-only transformer with RoPE, SwiGLU activations, RMSNorm (pre-norm), FlashAttention, weight-tied embeddings. 12 layers, 12 heads, d_model=768, bf16.
- **Training:** bf16 mixed precision, gradient checkpointing (12 GB VRAM), cosine LR with warmup, gradient clipping 1.0, AdamW. Checkpoints every 1K steps.
- **Evaluation:** Perplexity on WikiText-103. Zero-shot benchmarks: HellaSwag, WinoGrande, ARC-Easy, LAMBADA, PIQA.
- **Release:** Custom `PhoenixForCausalLM` class registered with HuggingFace Auto classes. Full tokenizer, model card, inference examples.

**Tech:** PyTorch 2.x, HuggingFace Transformers, FlashAttention, RoPE, SwiGLU, RMSNorm, MinHash LSH, XLM-RoBERTa, PyMuPDF, Ray, RTX 3080 Ti

---

### Sweta-Hi and Sweta-Kn — Multilingual language models
**Status: Released · https://huggingface.co/shreyash-pandey-katni/sweta-125m-multilingual**

Hindi and Kannada pretraining efforts built on a LLaMA-style architecture with custom tokenizers and an end-to-end multilingual data pipeline.

**Why:** Hindi is my mother tongue. I moved to Bengaluru for work and the city welcomed me warmly. Training a Kannada language model felt like a small technical contribution to the community that gave me opportunity. Both languages are underrepresented in open-source LLM research relative to their speaker populations.

| Stat | Value |
|------|-------|
| Parameters | 134M |
| Vocab size | 64K |
| Languages | EN + HI + KN |
| Hindi PPL | 14.5 (step 2250) |
| Kannada PPL | 34.0 (step 2250) |
| English PPL | 215.7 |

**Architecture:**
- **Corpus:** Sangraha Hindi (34.5 GB) + Kannada (14 GB), Samanantar (49.6M EN↔Indic pairs), IndicCorp v2, Aya dataset (8K instruction pairs), KCC agriculture Q&A.
- **Tokenizer:** 64K BPE trained jointly on EN + HI + KN (vs 32K for Phoenix) to cover both Indic scripts without fragmentation.
- **Model:** Same LLaMA-style architecture as Phoenix 125M — RoPE, SwiGLU, RMSNorm, FlashAttention, bf16. 134M parameters.
- **Evaluation:** Per-language perplexity tracked independently (EN, HI, KN) to detect language forgetting during training.

**Tech:** PyTorch 2.x, HuggingFace Transformers, 64K BPE, FlashAttention, Sangraha, Samanantar, IndicCorp v2, XLM-RoBERTa, Ray

---

### LinkedIn Post Swarm — Agentic content pipeline
**Status: Live**

A multi-agent publishing workflow that uses Claude, Ollama, Playwright, and Telegram for draft generation, review, approval, and scheduled publishing.

**Why:** Maintaining a consistent LinkedIn presence was taking hours I did not have. The system had to match my voice exactly — no hustle content, only genuine technical signal. The harder engineering problem was keeping the human in the loop without making the approval flow annoying enough to skip.

| Stat | Value |
|------|-------|
| Follower requests | ~1/day (was ~1/month) |
| Engagement growth | 5× in 1 month |
| Posts published | 6 |

**Architecture:**
- **Research Agent:** Qwen2.5 14B Q4 via Ollama. Fetches and relevance-scores stories from 7 RSS/web sources with CoT. Returns top-3 story briefs.
- **Claude Orchestrator:** claude-sonnet-4. Picks story, writes post in persona, manages revision loop, escalates to Telegram if critic loop exceeds 10 iterations. Prompt caching on all static context blocks.
- **Critic Agent:** Qwen2.5 14B Q4. Scores drafts on 4 axes — authenticity (30%), depth (25%), recruiter signal (20%), hook quality (15%). Threshold 6.5/10. Returns structured JSON feedback.
- **Telegram Approval Bot:** 9 action buttons — Approve, Regenerate, Reject, Edit inline, Undo (3-step history), As Carousel PDF, As Article, With Image, cross-post toggles (Twitter/X, Bluesky).
- **Playwright Publisher:** Persistent browser session, posts Mon/Thu 8:00 AM IST. Supports Text, Carousel PDF (fpdf2), LinkedIn Article, and image-attached formats.
- **Journal System (Monday posts):** LLMLingua-2 compresses journal.md (≥60% token reduction). Mistral 7B extracts a structured brief. Claude writes personal-update posts from the compressed log.

**Tech:** Claude claude-sonnet-4, Qwen2.5 14B Q4, Mistral 7B, Ollama, Playwright, Telegram Bot API, FastAPI + HTMX, fpdf2, tweepy, atproto, LLMLingua-2, RTX 3080 Ti

---

### Rudra — Autonomous AI security orchestrator
**Status: Parked** *(Frontier LLMs have tightened restrictions on offensive security tasks. Smaller local models lack reasoning depth for the exploit loop. Recon + Analyst agents fully complete. Parked until the model landscape shifts.)*

A multi-agent offensive security architecture with strict scope guardrails, sandboxed execution, and auditable event-driven workflows.

**Why:** Tools like Metasploit work from rigid templated modules. I wanted a system that reasons about a specific target surface, writes custom exploit code, tests it in a sandbox, and iterates on failures the way a skilled human would. The key engineering problem was keeping that autonomy safe.

| Stat | Value |
|------|-------|
| Agent types designed | 4 |
| Agents fully implemented | 2 / 4 |
| Total cluster VRAM | 22 GB |

**Architecture:**
- **Orchestrator (FastAPI + Ray actor):** Manages agent lifecycle, concurrency budget (Redis counter), and heartbeat monitoring (120s timeout). Scope enforcement is hard-coded Python — never delegated to an LLM.
- **Shared Bus:** Kafka (event routing), Redis (concurrency + live state), Cassandra (findings + history), Qdrant (semantic CVE search + partial-win similarity).
- **Recon Agent ✅:** Fingerprints ports, services, versions, frameworks, auth mechanisms, API endpoints. Writes surface map to Redis + Kafka.
- **Analyst Agent ✅:** Queries Qdrant CVE knowledge base, fetches CVSS from NVD API (never LLM-estimated). Scores CVEs by confidence.
- **Exploit Agent (parked):** 5-retry LLM loop — reason → write Python exploit → execute in sandbox → interpret → iterate. AST-based validator before every execution.
- **Sandbox:** Ephemeral Docker container per run (300s limit). iptables whitelist on Linux. tinyproxy traffic cop on Windows. Any scope breach kills the container immediately.

**Safety guarantees:** RFC1918, loopback, and link-local addresses rejected at input before any agent spawns. Scope enforcement in Python, not LLM instructions. Full audit trail in Cassandra.

**Tech:** Python 3.11, FastAPI, Ray, LiteLLM + Ollama, LangGraph, Kafka, Redis, Cassandra, Qdrant, Docker, impacket, scapy, pwntools, NVD API

---

### LocalLeads — AI-powered lead generation workflow
**Status: Live** *(Pivoted from automated batch outreach. Sites built on demand when a business shows interest. Current focus: discovery + cold email for IT advisory.)*

An end-to-end backend system for local business discovery, AI content generation, site assembly, deployment, and personalized outreach.

**Why:** Local businesses in India have low digital presence. The idea was to eliminate the manual work of finding them, building a site, deploying it, and pitching it — replacing a multi-hour agency process with an automated pipeline that runs in minutes.

| Stat | Value |
|------|-------|
| Businesses contacted | ~25 |
| Site generation time | < 2 min |
| Cost per generated site | ₹500 |

**Architecture:**
- **Scraper:** Playwright → Google Maps. Filters to businesses without a website and with a valid phone number. No API key required. Results to SQLite.
- **State Manager:** SQLite tracks processing status, deploy URLs, deploy dates, outreach history, and 14-day expiry flags. Prevents duplicate outreach.
- **Website Generator:** Ollama SLMs generate site copy in under 2 minutes. Real images sourced online. Output is self-contained static HTML/CSS.
- **Netlify Deployer:** Deploys via Netlify CLI. Business gets a live URL before owner review. 14-day expiry with Telegram approval gate.
- **Sales Copy (Claude):** 2–3 scored message variants per business with auto-detected language (Hindi/English). Each scored for clarity and conversion.
- **Telegram Approval:** Report card per business (name, location, phone, URL, message variants). One-click approval → WhatsApp or cold email delivery.

**Tech:** Python, Claude API, Ollama SLMs, Playwright, Netlify CLI, whatsapp-web.js, SQLite, Telegram Bot API

---

## Archive Projects (Pre-2026)

| Year | Project | Summary |
|------|---------|---------|
| 2023 | Semantic Search Engine | Semantic retrieval for enterprise documentation. Foundation for later AI retrieval work. |
| 2022 | Super Resolution | GAN-based image enhancement. Learned experiment rigor in visual ML. |
| 2022 | Photo to Monet-style art | CycleGAN style transfer. Taught training instability, qualitative evaluation, visual debugging. |
| 2022 | Library Management | MERN-stack CRUD, search, and practical product structure. |

---

## Technical Skills

### Languages
Python · Java · Go · SQL · JavaScript

### AI and ML
PyTorch · Transformers · LLM pretraining · Deep learning · NLP · Computer vision · LangChain · HuggingFace · FAISS · Knowledge graphs · Text embeddings

### Backend and Platform
Microservices · REST APIs · Spring Boot · Kafka · gRPC · Flask · Node.js · Express

### DevOps and Data
Docker · Jenkins · NGINX · Git · Linux · MySQL · MongoDB · Cassandra · Redis

---

## Engineering Principles

**Start with the cheapest reliable fallback**  
I design systems to attempt deterministic recovery first, then graduate into ML and model-based fallbacks only when they are justified.

**Treat evaluation as part of the product**  
When the system contains AI, the measurement loop is not optional. I care about observable accuracy, drift, error budgets, and failure analysis.

**Bias toward boring operations**  
I prefer architectures that are easier to debug, deploy, and recover under pressure over clever stacks that only look good in diagrams.

**Ship ownership, not isolated demos**  
The work that matters is the work that survives adoption. I optimise for maintainability, team adoption, and operational credibility.

---

## Certifications

- Neural Networks and Deep Learning — deeplearning.ai
- Improving Deep Neural Networks — deeplearning.ai
- Introduction to Agents — Anthropic
- Apache Kafka — IBM
- Enterprise Design Thinking — IBM

---

## About

I started in enterprise backend engineering and gradually moved toward AI systems because the hardest product problems kept living at that boundary: search, automation, observability, recovery, and trustworthy autonomy.

Today I care most about building systems that are ambitious without being reckless. That usually means rigorous fallbacks, measurable quality, explicit state, and tooling that helps teams move faster without creating hidden fragility.

I mentor and advise through Topmate when I can be concrete and useful. I write occasionally on Medium, usually when I have something implementation-heavy worth documenting. A lot of my personal time goes into multilingual NLP, agent systems, and AI security-oriented builds.
