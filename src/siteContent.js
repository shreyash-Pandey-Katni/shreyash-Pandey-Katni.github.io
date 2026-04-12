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
    category: "Decoder-only language model",
    summary:
      "A LLaMA-style 125M parameter model trained from scratch on a single RTX 3080 Ti with a custom tokenizer, data pipeline, and training loop.",
    details:
      "The project is an end-to-end exercise in model building: corpus curation, tokenization, training stability, benchmarking, and open-source packaging.",
    proof: "~2B tokens processed, Apache 2.0 release, WinoGrande 0.507.",
    skills: [
      "PyTorch",
      "Transformers",
      "Tokenization",
      "Benchmarking",
      "Distributed training",
    ],
    href: "https://huggingface.co/shreyash-Pandey-Katni/phoenix-125m",
    ctaLabel: "View model card",
  },
  {
    year: "2026",
    title: "Sweta-Hi and Sweta-Kn",
    category: "Multilingual language models",
    summary:
      "Hindi and Kannada pretraining efforts built on a LLaMA-style architecture with custom tokenizers and an end-to-end multilingual data pipeline.",
    details:
      "This work is focused on underrepresented language coverage, practical training throughput, and evaluation quality ahead of release.",
    proof: "Custom tokenizers, async data loading, distributed training, near release.",
    skills: [
      "Multilingual NLP",
      "Data engineering",
      "Custom tokenizers",
      "Model evaluation",
    ],
  },
  {
    year: "2026",
    title: "LinkedIn Post Swarm",
    category: "Agentic content pipeline",
    summary:
      "A multi-agent publishing workflow that uses Claude, Ollama, Playwright, and Telegram for draft generation, review, approval, and scheduled publishing.",
    details:
      "The system includes critic-revision loops, source aggregation, state management, retries, and escalation paths so autonomy stays controllable.",
    proof: "Human-in-the-loop approvals, resilient retries, scheduled output.",
    skills: [
      "Agent orchestration",
      "Prompt engineering",
      "Playwright",
      "Telegram Bot API",
      "Workflow reliability",
    ],
  },
  {
    year: "2026",
    title: "Rudra",
    category: "Autonomous AI security orchestrator",
    summary:
      "A multi-agent offensive security architecture built around strict scope guardrails, sandboxed execution, and auditable event-driven workflows.",
    details:
      "The emphasis is on safe autonomy: typed validation, retry budgets, isolation boundaries, and guardrails that make the system usable for serious testing.",
    proof: "Scope validation, sandbox strategy, structured audit trail design.",
    skills: [
      "AI security",
      "Sandbox design",
      "Distributed systems",
      "Event-driven architecture",
      "API integration",
    ],
  },
  {
    year: "2026",
    title: "LocalLeads",
    category: "AI-powered lead generation workflow",
    summary:
      "An end-to-end backend system for business discovery, AI content generation, site assembly, deployment, and personalized outreach.",
    details:
      "Operational controls include SQLite state tracking, Telegram approvals, deployment automation, and delivery flows aimed at production-style reliability.",
    proof: "Business discovery, approval gates, deployment automation, outreach delivery.",
    skills: [
      "Backend development",
      "Playwright",
      "SQLite",
      "Workflow engineering",
      "Operational automation",
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