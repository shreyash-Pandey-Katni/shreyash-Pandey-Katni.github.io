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
    tagline: "A 125M parameter LLM trained end-to-end on a single RTX 3080 Ti — corpus to checkpoint.",
    summary:
      "A LLaMA-style 125M parameter model trained from scratch on a single RTX 3080 Ti with a custom tokenizer, data pipeline, and training loop.",
    details:
      "The project is an end-to-end exercise in model building: corpus curation, tokenization, training stability, benchmarking, and open-source packaging.",
    proof: "~2B tokens processed, Apache 2.0 release, WinoGrande 0.507.",
    why: "I wanted to learn how LLMs actually work — not from an API, but by building one end-to-end. With a single 3080 Ti, training a 125M model from scratch was the right scope: ambitious enough to be real, small enough to be feasible on consumer hardware. Every decision — architecture, data pipeline, training stability — was a lesson I could not have learned any other way.",
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
        name: "Data Pipeline — 7 stages",
        description: "Download from HuggingFace and AIKosh → PDF/HTML text extraction via PyMuPDF and BeautifulSoup → XLM-RoBERTa language detection and PII redaction → MinHash LSH deduplication → corpus mixing by source ratio → BPE tokenizer training (32K vocab) → uint16 binary shard output for memory-mapped loading.",
      },
      {
        name: "Model",
        description: "Decoder-only transformer: RoPE positional encoding, SwiGLU activations, RMSNorm (pre-norm), PyTorch 2.x FlashAttention, and weight-tied input/output embeddings. 125M parameters across 12 layers, 12 heads, d_model=768, bf16 precision.",
      },
      {
        name: "Training Loop",
        description: "bf16 mixed precision, gradient checkpointing to fit 12 GB VRAM, cosine LR schedule with warmup, gradient clipping at 1.0, AdamW optimizer. Checkpoints every 1K steps to NAS via SMB.",
      },
      {
        name: "Evaluation Harness",
        description: "Perplexity on WikiText-103. Zero-shot benchmarks implemented from scratch: HellaSwag (normalized), WinoGrande, ARC-Easy, LAMBADA accuracy, PIQA substitute — matching lm-evaluation-harness conventions.",
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
      "Trained a 125M parameter LLM from scratch on a single consumer GPU — no cloud, no distributed training.",
      "Built a 7-stage data pipeline processing ~2B tokens from Wikipedia, C4-en, OpenWebText2, Project Gutenberg, StackExchange, and ArXiv.",
      "WinoGrande score of 0.507 — above random chance (0.50), showing the model captures basic commonsense structure.",
      "Released under Apache 2.0 on HuggingFace with full model card, tokenizer, and inference examples.",
      "What's next: fine-tuning Mistral-7B for SQL generation, applying the same evaluation discipline to instruction following.",
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
    tagline: "Hindi and Kannada language models trained from scratch — a technical tribute to the languages closest to my life.",
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
        description: "Sangraha: Hindi verified (34.5 GB) and Kannada verified (14 GB). Samanantar: 49.6M English↔Indic sentence pairs. IndicCorp v2 for Indian-context English. Aya dataset (8K Hindi + Kannada instruction pairs). KCC agriculture Q&A for domain coverage.",
      },
      {
        name: "Custom 64K BPE Tokenizer",
        description: "Trained jointly on English, Hindi, and Kannada corpora. 64K vocab (vs 32K for Phoenix) to cover both Indic scripts without excessive token fragmentation. Language-balanced training corpus for the tokenizer itself.",
      },
      {
        name: "Model",
        description: "Same LLaMA-style decoder architecture as Phoenix 125M: RoPE, SwiGLU, RMSNorm, FlashAttention, bf16. 134M parameters. The only architectural difference is the larger 64K embedding table.",
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
      "Custom 64K BPE tokenizer trained jointly on English, Hindi, and Kannada — covers both Indic scripts without excessive fragmentation.",
      "Hindi perplexity of 14.5 — strong signal the model has absorbed Hindi language structure at 134M parameters.",
      "Kannada perplexity of 34.0 — meaningful open-source coverage for a language with limited LLM representation.",
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
    title: "LinkedIn Post Swarm",
    slug: "linkedin-post-swarm",
    category: "Agentic content pipeline",
    status: "Live",
    tagline: "A multi-agent AI pipeline that researches, drafts, critiques, and publishes LinkedIn posts — with a human approval gate before every post.",
    summary:
      "A multi-agent publishing workflow that uses Claude, Ollama, Playwright, and Telegram for draft generation, review, approval, and scheduled publishing.",
    details:
      "The system includes critic-revision loops, source aggregation, state management, retries, and escalation paths so autonomy stays controllable.",
    proof: "Human-in-the-loop approvals, resilient retries, scheduled output.",
    why: "Maintaining a consistent LinkedIn presence was taking hours I did not have, and I kept skipping it. The system had to match my voice exactly — no hustle content, no vague motivation, only genuine technical signal. The harder engineering problem was keeping the human in the loop without making the approval flow annoying enough to skip.",
    skills: ["Agent orchestration", "Prompt engineering", "Playwright", "Telegram Bot API", "Workflow reliability"],
    stats: [
      { value: "~1/day", label: "Follower requests (was ~1/month)" },
      { value: "5×", label: "Engagement growth in 1 month" },
      { value: "6", label: "Posts published" },
    ],
    architecture: [
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
        description: "9 action buttons per draft: Approve, Regenerate (with optional direction text), Reject, Edit inline, Undo (3-step history), As Carousel (PDF), As Article, With Image, and cross-post toggles for Twitter/X and Bluesky.",
      },
      {
        name: "Playwright Publisher",
        description: "Persistent browser session posts at scheduled time (Mon/Thu 8:00 AM IST). Screenshots confirmation. Supports Text, Carousel PDF (fpdf2), LinkedIn Article, and image-attached formats.",
      },
      {
        name: "Journal System — Monday posts",
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
      "Zero autonomous posts — every draft routes through Telegram approval with full edit, undo, and regenerate controls.",
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
    why: "Tools like Metasploit work from rigid, templated modules — you pick an exploit and fire it. I wanted a system that reasons about a specific target surface, writes custom exploit code for that surface, tests it in a sandbox, and iterates on failures the way a skilled human would. The interesting engineering problem was keeping that autonomy safe: scope enforcement that cannot be overridden by an LLM, sandboxed execution with network isolation, and a full audit trail.",
    skills: ["AI security", "Sandbox design", "Distributed systems", "Event-driven architecture", "API integration"],
    stats: [
      { value: "4", label: "Agent types designed" },
      { value: "2 / 4", label: "Agents fully implemented" },
      { value: "22 GB", label: "Total cluster VRAM" },
    ],
    architecture: [
      {
        name: "Client → Orchestrator",
        description: "CLI (rakshak) or FastAPI accepts target hostname/IP and scope definition. Scope validated at input — RFC1918, loopback, and link-local addresses rejected before any agent is spawned. Pre-scan health check verifies Ray cluster, Ollama, Docker, Redis, Kafka, Cassandra, and Qdrant.",
      },
      {
        name: "Orchestrator (FastAPI + Ray actor)",
        description: "Manages agent lifecycle, concurrency budget (Redis counter), and heartbeat monitoring (120s timeout). Scope enforcement is hard-coded Python — never delegated to an LLM instruction.",
      },
      {
        name: "Shared Bus",
        description: "Kafka for event routing between agents. Redis for concurrency budget and live state. Cassandra for persistent findings and attempt history. Qdrant for semantic CVE search and partial-win similarity matching.",
      },
      {
        name: "Recon Agent ✅ Complete",
        description: "Fingerprints open ports, services, versions, frameworks, auth mechanisms, and API endpoints. Writes surface map to Redis and publishes to Kafka rudra.recon.discovered. Results flow into Cassandra target_intelligence.",
      },
      {
        name: "Analyst Agent ✅ Complete",
        description: "Consumes surface map, queries Qdrant CVE knowledge base, fetches CVSS scores from NVD API. Scores CVEs by confidence. CVSS scores are always fetched from NVD — never estimated by LLM.",
      },
      {
        name: "Exploit Agent — Parked",
        description: "5-retry LLM loop: reason → write Python exploit → execute in sandbox → interpret result → iterate with failure context. Budget extended if progress_score > 0.7 on attempt 4. AST-based code validator runs before every execution.",
      },
      {
        name: "Sandbox",
        description: "Ephemeral Docker container per run, destroyed after 300s or on completion. iptables rules on Linux (M1) whitelist only target IPs. Windows machines (M2/M3) route through a tinyproxy traffic cop. Any scope breach kills the container immediately.",
      },
    ],
    techStack: {
      core: ["Python 3.11", "FastAPI", "Ray (distributed agents)", "LiteLLM + Ollama", "LangGraph"],
      infra: ["Kafka (event bus)", "Redis (state)", "Cassandra (findings)", "Qdrant (semantic search)", "Docker (sandbox)"],
      tools: ["impacket", "scapy", "pwntools", "paramiko", "NVD API (CVSS)", "ruff", "mypy", "pytest"],
    },
    highlights: [
      "Recon Agent fully implemented: fingerprints ports, services, versions, auth mechanisms, and API endpoints.",
      "Analyst Agent fully implemented: maps findings to CVEs via Qdrant semantic search with CVSS scores from NVD — never LLM-estimated.",
      "Scope enforcement is hard-coded Python — RFC1918 and loopback always blocked regardless of target configuration.",
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
    why: "Local businesses in India have low digital presence. The idea was to eliminate the manual work of finding them, building a site, deploying it, and pitching it — replacing a multi-hour agency process with an automated pipeline that runs in minutes. The hard part was keeping the cost low enough for the economics to work.",
    skills: ["Backend development", "Playwright", "SQLite", "Workflow engineering", "Operational automation"],
    stats: [
      { value: "~25", label: "Businesses contacted" },
      { value: "< 2 min", label: "Site generation time" },
      { value: "₹500", label: "Cost per generated site" },
    ],
    architecture: [
      {
        name: "Scraper (Playwright → Google Maps)",
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
      "Scrapes Google Maps to find businesses without websites and with a valid phone — no API key, no spend.",
      "Generates a complete static website per business using local Ollama SLMs in under 2 minutes, with real images sourced online.",
      "Deploys to Netlify automatically before human review — live URL included in every pitch.",
      "Claude writes 2–3 scored, language-appropriate message variants per business with one-click Telegram approval.",
      "~25 businesses discovered and contacted; pivoted to cold email + IT advisory after cost analysis showed ₹500/site spend.",
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
};

export const workContent = {
  eyebrow: "Case studies across product engineering and applied AI",
  title: "Selected Work",
  intro:
    "I work best on products that need both strong engineering fundamentals and pragmatic AI. That usually means shipping under production constraints, not just building prototypes.",
};

export const pageMeta = {
  "/": {
    title: "Shreyash Pandey — AI Systems Engineer",
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
      "Background, skills, and operating style of Shreyash Pandey — AI systems engineer in Bengaluru with expertise in Python, Java, PyTorch, LangChain, and production reliability.",
  },
  "/projects": {
    title: "Projects · Shreyash Pandey",
    description:
      "Flagship 2026 builds: Phoenix 125M LLM trained from scratch, multilingual Hindi/Kannada models, an agentic LinkedIn publishing pipeline, an AI security orchestrator, and more.",
  },
};
