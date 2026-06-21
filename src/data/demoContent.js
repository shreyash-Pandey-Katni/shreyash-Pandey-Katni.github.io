// Shared content for the /demos design explorations.
// Self-contained so the throwaway demo pages never couple to the live siteContent.js.

export const profile = {
  name: "Shreyash Pandey",
  role: "AI Systems Engineer",
  location: "Bengaluru, India",
  tagline: "I build AI systems that survive production.",
  email: "shreyash.pandey.katni@gmail.com",
  github: "https://github.com/shreyash-Pandey-Katni",
  huggingFace: "https://huggingface.co/shreyash-Pandey-Katni",
  linkedin: "https://www.linkedin.com/in/shreyash-pandey-katni/",
};

export const metrics = [
  { value: "5K+", label: "test locators auto-healed" },
  { value: "99.99%", label: "availability supported" },
  { value: "70%", label: "fewer support tickets" },
  { value: "1st", label: "TechInterrupt Hackathon, India" },
  { value: "83%", label: "Chrome fallback accuracy" },
  { value: "2B", label: "tokens trained from scratch" },
];

export const experience = [
  {
    period: "2024 - Present",
    role: "Software Development Engineer 2",
    company: "IBM Software Labs",
    summary:
      "Reliability-heavy AI capabilities inside browser automation and testing products: embeddings, vision-language models, service decomposition.",
  },
  {
    period: "2023 - 2024",
    role: "Software Engineer 2",
    company: "Software AG (now IBM)",
    summary:
      "Semantic retrieval, internal copilots, and prediction systems. Won the TechInterrupt Hackathon, first in India.",
  },
  {
    period: "2022 - 2023",
    role: "Software Engineer",
    company: "Software AG",
    summary:
      "Enterprise integration platform work across Java, Spring Boot, and REST APIs. 2023 Star Performer.",
  },
];

// id is used as the graph node key and the search corpus key.
export const projects = [
  {
    id: "phoenix",
    title: "Phoenix 125M",
    category: "LLM from scratch",
    year: "2026",
    status: "Released",
    summary:
      "A LLaMA-style 125M decoder-only model trained from scratch on a single RTX 3080 Ti with a custom tokenizer, data pipeline, and training loop.",
    stats: [
      ["Parameters", "125M"],
      ["Tokens", "~2B"],
      ["WinoGrande", "0.507"],
      ["License", "Apache 2.0"],
    ],
    tech: ["PyTorch", "RoPE", "SwiGLU", "RMSNorm", "FlashAttention", "BPE 32K"],
    href: "https://huggingface.co/shreyash-Pandey-Katni",
  },
  {
    id: "sweta",
    title: "Sweta-Hi / Sweta-Kn",
    category: "Multilingual LLM",
    year: "2026",
    status: "Released",
    summary:
      "Hindi and Kannada pretraining on a LLaMA-style architecture with a joint 64K tokenizer and an end-to-end multilingual data pipeline.",
    stats: [
      ["Parameters", "134M"],
      ["Vocab", "64K"],
      ["Hindi PPL", "14.5"],
      ["Kannada PPL", "34.0"],
    ],
    tech: ["PyTorch", "64K BPE", "Sangraha", "Samanantar", "IndicCorp v2"],
    href: "https://huggingface.co/shreyash-Pandey-Katni",
  },
  {
    id: "swarm",
    title: "LinkedIn Post Swarm",
    category: "Agentic pipeline",
    year: "2026",
    status: "Live",
    summary:
      "A multi-agent publishing workflow: a research agent, a Claude orchestrator, a critic loop, and a Playwright publisher with a Telegram human-in-the-loop.",
    stats: [
      ["Engagement", "5x in 1mo"],
      ["Follow reqs", "~1/day"],
      ["Agents", "4"],
    ],
    tech: ["Claude", "Qwen2.5 14B", "Ollama", "Playwright", "FastAPI"],
    href: "https://github.com/shreyash-Pandey-Katni",
  },
  {
    id: "rudra",
    title: "Rudra",
    category: "Security orchestrator",
    year: "2026",
    status: "Parked",
    summary:
      "A multi-agent offensive-security architecture with hard-coded scope guardrails, sandboxed execution, and auditable event-driven workflows.",
    stats: [
      ["Agent types", "4"],
      ["Implemented", "2 / 4"],
      ["Cluster VRAM", "22 GB"],
    ],
    tech: ["FastAPI", "Ray", "LangGraph", "Kafka", "Qdrant", "Docker"],
    href: "https://github.com/shreyash-Pandey-Katni",
  },
  {
    id: "localleads",
    title: "LocalLeads",
    category: "Automation pipeline",
    year: "2026",
    status: "Live",
    summary:
      "End-to-end local-business discovery, AI site generation, deployment, and personalized outreach. A multi-hour agency process compressed into minutes.",
    stats: [
      ["Site gen", "< 2 min"],
      ["Cost/site", "Rs 500"],
      ["Contacted", "~25"],
    ],
    tech: ["Claude API", "Ollama", "Playwright", "Netlify", "SQLite"],
    href: "https://github.com/shreyash-Pandey-Katni",
  },
  {
    id: "sat-heal",
    title: "Auto-Healing Locators",
    category: "IBM SAT runtime",
    year: "2025",
    status: "Shipped",
    summary:
      "A three-tier locator recovery ladder inside IBM's test automation: CSS selectors, then text embeddings, then the Granite 3.3 vision-language model.",
    stats: [
      ["Healed", "5K+ cases"],
      ["Firefox", "100%"],
      ["Chrome", "83%"],
    ],
    tech: ["Embeddings", "Granite 3.3 VLM", "Java 17", "Microservices"],
    href: "https://www.linkedin.com/in/shreyash-pandey-katni/",
  },
  {
    id: "semantic",
    title: "Semantic Search Engine",
    category: "Retrieval",
    year: "2023",
    status: "Hackathon winner",
    summary:
      "Semantic retrieval over enterprise documentation using NLP, knowledge graphs, and FAISS. First in India at the TechInterrupt Hackathon.",
    stats: [
      ["Rank", "1st IN"],
      ["Global", "4th"],
    ],
    tech: ["FAISS", "Knowledge graphs", "Embeddings", "NLP"],
    href: "https://www.linkedin.com/in/shreyash-pandey-katni/",
  },
];

// Edges for the knowledge-graph design. Connects projects to shared skills/orgs.
export const graphHubs = [
  { id: "ibm", label: "IBM", kind: "org" },
  { id: "swag", label: "Software AG", kind: "org" },
  { id: "llm", label: "LLM pretraining", kind: "skill" },
  { id: "agents", label: "Agent systems", kind: "skill" },
  { id: "retrieval", label: "Retrieval", kind: "skill" },
  { id: "reliability", label: "Reliability", kind: "skill" },
];

export const graphEdges = [
  ["phoenix", "llm"],
  ["sweta", "llm"],
  ["phoenix", "sweta"],
  ["swarm", "agents"],
  ["rudra", "agents"],
  ["localleads", "agents"],
  ["semantic", "retrieval"],
  ["sat-heal", "retrieval"],
  ["sat-heal", "reliability"],
  ["sat-heal", "ibm"],
  ["semantic", "swag"],
  ["semantic", "reliability"],
  ["swarm", "llm"],
  ["rudra", "reliability"],
];
