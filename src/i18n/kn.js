// Kannada (kn) translations mirroring the named exports in src/data/siteContent.js
// Keys, array order, and array lengths mirror siteContent.js exactly.
// Only human-readable prose is translated. Proper nouns, brand/product names,
// technology terms, acronyms, numbers, units, dates, metric values, URLs, and
// emails are kept as-is per the translation rules.

export default {
  siteMeta: {
    role: "AI ಸಿಸ್ಟಮ್ಸ್ ಎಂಜಿನಿಯರ್",
    location: "ಬೆಂಗಳೂರು, ಭಾರತ",
    contactBlurb:
      "AI ಸಿಸ್ಟಮ್‌ಗಳು, ಬ್ಯಾಕೆಂಡ್ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ರಿಲಯಬಿಲಿಟಿ ಕೆಲಸ ಒಂದಾಗಿ ಸೇರುವ ಪಾತ್ರಗಳಲ್ಲಿ ನನಗೆ ಹೆಚ್ಚು ಆಸಕ್ತಿ. ಸಾಮಾನ್ಯವಾಗಿ ಇದರ ಅರ್ಥ agent infrastructure, ಮೌಲ್ಯಮಾಪನ-ಪ್ರಧಾನ ಉತ್ಪನ್ನ ಕೆಲಸ, ಆಟೊಮೇಷನ್ ವೇದಿಕೆಗಳು, ಅಥವಾ ಡೆವಲಪರ್ ಟೂಲಿಂಗ್.",
  },

  navigationLinks: [
    {
      path: "/",
      label: "ಮುಖಪುಟ",
      summary: "ಅವಲೋಕನ, ಪುರಾವೆ ಅಂಶಗಳು ಮತ್ತು ಪ್ರಸ್ತುತ ಗಮನ.",
    },
    {
      path: "/work",
      label: "ಕೆಲಸ",
      summary: "ಆಯ್ದ ಉತ್ಪನ್ನ ಮತ್ತು ಅನ್ವಯಿಕ AI ಕೆಲಸ.",
    },
    {
      path: "/about",
      label: "ಪರಿಚಯ",
      summary: "ಹಿನ್ನೆಲೆ, ಕೌಶಲ್ಯಗಳು ಮತ್ತು ನಾನು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ.",
    },
    {
      path: "/projects",
      label: "ಯೋಜನೆಗಳು",
      summary: "2026ರ ಪ್ರಮುಖ ನಿರ್ಮಾಣಗಳು ಮತ್ತು ಹಿಂದಿನ ಪ್ರಯೋಗಗಳು.",
    },
  ],

  experienceTimeline: [
    {
      role: "Software Development Engineer 2",
      location: "ಬೆಂಗಳೂರು, ಭಾರತ",
      summary:
        "ಬ್ರೌಸರ್ ಆಟೊಮೇಷನ್ ಮತ್ತು ಟೆಸ್ಟಿಂಗ್ ಉತ್ಪನ್ನಗಳ ಒಳಗೆ ರಿಲಯಬಿಲಿಟಿ-ಪ್ರಧಾನ AI ಸಾಮರ್ಥ್ಯಗಳನ್ನು ನಾನು ವಿನ್ಯಾಸಗೊಳಿಸಿ ಬಿಡುಗಡೆ ಮಾಡುತ್ತೇನೆ. ಈ ಕೆಲಸ embeddings, vision-language models, ಸೇವಾ ವಿಭಜನೆ ಮತ್ತು ಸಾಕಷ್ಟು ಕಾರ್ಯಾಚರಣಾ ಶಿಸ್ತನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ.",
      achievements: [
        "ಮೂರು-ಹಂತದ ರಿಕವರಿ ಏಣಿಯೊಂದಿಗೆ AI-ಚಾಲಿತ ಸ್ವಯಂ-ಗುಣಪಡಿಸುವಿಕೆಯನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದೆ: CSS selectors, text embeddings, ನಂತರ IBM Granite 3.3 VLM.",
        "5K+ ಟೆಸ್ಟ್ ಕೇಸ್‌ಗಳಾದ್ಯಂತ locator ವೈಫಲ್ಯಗಳನ್ನು ಸ್ವಾಯತ್ತವಾಗಿ ಸರಿಪಡಿಸುವ ತರ್ಕವನ್ನು ನಿರ್ಮಿಸಿದೆ, ಆಂತರಿಕ ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ 100% Firefox ನಿಖರತೆ ಮತ್ತು 83% Chrome ನಿಖರತೆಯೊಂದಿಗೆ.",
        "SAT runtime ಅನ್ನು monolith ನಿಂದ ಪ್ರತಿ ನಿಮಿಷಕ್ಕೆ 4K-5K ವಿನಂತಿಗಳನ್ನು ನಿಭಾಯಿಸುವ ನಾಲ್ಕು microservices ಆಗಿ ಮರು-ವಿನ್ಯಾಸಗೊಳಿಸಲು ಸಬ್-ಸೆಕೆಂಡ್ ಲೇಟೆನ್ಸಿಯೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಿದೆ.",
        "Java 8 ರಿಂದ 17 ಕ್ಕೆ ವಲಸೆ ಮತ್ತು CI/CD ಸುಧಾರಣೆಗಳನ್ನು ಮುನ್ನಡೆಸಿದೆ, ಇದು 99% ಅಪ್‌ಟೈಮ್ ಕಾಯ್ದುಕೊಳ್ಳುತ್ತಲೇ ಬಿಲ್ಡ್ ವೇಗವನ್ನು 30% ಸುಧಾರಿಸಿತು.",
      ],
    },
    {
      role: "Software Engineer 2",
      location: "ಬೆಂಗಳೂರು, ಭಾರತ",
      summary:
        "ಈ ಹಂತವು ನನ್ನನ್ನು AI ಉತ್ಪನ್ನ ಕೆಲಸದೊಳಗೆ ಆಳವಾಗಿ ಒಯ್ದಿತು: semantic retrieval, ಆಂತರಿಕ copilots ಮತ್ತು ಡೆಮೋಗಳಿಗಿಂತ ಪ್ರಾಯೋಗಿಕ ಉತ್ಪನ್ನ ಅಗತ್ಯಗಳ ಮೇಲೆ ಆಧಾರಿತ ಭವಿಷ್ಯ ಊಹೆ ವ್ಯವಸ್ಥೆಗಳು.",
      achievements: [
        "NLP, knowledge graphs ಮತ್ತು FAISS ಬಳಸಿ semantic search engine ಅನ್ನು ನಿರ್ಮಿಸಿದೆ. ಈ ಯೋಜನೆಯು TechInterrupt Hackathon ಗೆದ್ದಿತು: ಭಾರತದಲ್ಲಿ ಮೊದಲ ಮತ್ತು ಅಂತಾರಾಷ್ಟ್ರೀಯವಾಗಿ ನಾಲ್ಕನೇ ಸ್ಥಾನ.",
        "LangChain ಮತ್ತು Flask ಬಳಸಿ AI chatbot ಅನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದೆ, ಇದು ಆಂತರಿಕ ಬೆಂಬಲ ಟಿಕೆಟ್‌ಗಳನ್ನು 70% ಕಡಿಮೆ ಮಾಡಿತು.",
        "PyTorch ಮತ್ತು time-series ವಿಶ್ಲೇಷಣೆ ಬಳಸಿ ವೈಫಲ್ಯ ಊಹೆ ವ್ಯವಸ್ಥೆಯನ್ನು ರಚಿಸಿದೆ, ಇದು 99.99% ಸಿಸ್ಟಮ್ ಲಭ್ಯತೆಯನ್ನು ಬೆಂಬಲಿಸಿತು.",
      ],
    },
    {
      role: "Software Engineer",
      location: "ಬೆಂಗಳೂರು, ಭಾರತ",
      summary:
        "Java, Spring Boot ಮತ್ತು REST APIs ಗಳಾದ್ಯಂತ ಎಂಟರ್‌ಪ್ರೈಸ್ ಇಂಟಿಗ್ರೇಷನ್ ವೇದಿಕೆ ಸಾಮರ್ಥ್ಯಗಳ ಮೇಲೆ ನಾನು ಕೆಲಸ ಮಾಡಿದೆ, ಪ್ರೊಡಕ್ಷನ್ ಸಿಸ್ಟಮ್‌ಗಳ ಬಗ್ಗೆ ನಾನು ಇಂದಿಗೂ ಆಲೋಚಿಸುವ ರೀತಿಯನ್ನು ರೂಪಿಸುವ ಬುನಾದಿಯನ್ನು ನಿರ್ಮಿಸಿದೆ.",
      achievements: [
        "Java ಮತ್ತು Spring Boot ಬಳಸಿ ಎಂಟರ್‌ಪ್ರೈಸ್ ಇಂಟಿಗ್ರೇಷನ್ ಬಳಕೆ ಪ್ರಕರಣಗಳಿಗಾಗಿ webMethods ವೇದಿಕೆ ಸೌಲಭ್ಯಗಳನ್ನು ತಲುಪಿಸಿದೆ.",
        "ಹೊಂದಾಣಿಕೆ, API ಒಪ್ಪಂದಗಳು ಮತ್ತು ಬಿಡುಗಡೆ ಗುಣಮಟ್ಟದ ಮೇಲೆ ಬಲವಾದ ಒತ್ತು ನೀಡಿ ನಿರ್ಮಿಸಿದೆ, ಮತ್ತು 2023ರ Star Performer ಆಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟೆ.",
      ],
    },
  ],

  workPrinciples: [
    {
      title: "ಅಗ್ಗದ, ವಿಶ್ವಾಸಾರ್ಹ ಫಾಲ್‌ಬ್ಯಾಕ್‌ನಿಂದ ಆರಂಭಿಸಿ",
      description:
        "ಮೊದಲು ನಿರ್ಣಾಯಕ ರಿಕವರಿಯನ್ನು ಪ್ರಯತ್ನಿಸುವಂತೆ ನಾನು ಸಿಸ್ಟಮ್‌ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸುತ್ತೇನೆ, ನಂತರ ಸಮರ್ಥನೀಯವಾದಾಗ ಮಾತ್ರ ML ಮತ್ತು model-ಆಧಾರಿತ ಫಾಲ್‌ಬ್ಯಾಕ್‌ಗಳಿಗೆ ಏರುತ್ತೇನೆ.",
    },
    {
      title: "ಮೌಲ್ಯಮಾಪನವನ್ನು ಉತ್ಪನ್ನದ ಭಾಗವಾಗಿ ಪರಿಗಣಿಸಿ",
      description:
        "ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ AI ಇದ್ದಾಗ, ಅಳತೆ ಮಾಡುವ ಲೂಪ್ ಐಚ್ಛಿಕವಲ್ಲ. ಗಮನಿಸಬಹುದಾದ ನಿಖರತೆ, drift, error budgets ಮತ್ತು ವೈಫಲ್ಯ ವಿಶ್ಲೇಷಣೆಯ ಬಗ್ಗೆ ನನಗೆ ಕಾಳಜಿ.",
    },
    {
      title: "ಸರಳ ಕಾರ್ಯಾಚರಣೆಗಳತ್ತ ಒಲವು",
      description:
        "ಚಿತ್ರಗಳಲ್ಲಿ ಮಾತ್ರ ಚೆನ್ನಾಗಿ ಕಾಣುವ ಚಾಣಾಕ್ಷ ಸ್ಟ್ಯಾಕ್‌ಗಳಿಗಿಂತ, ಒತ್ತಡದಲ್ಲಿ ಡೀಬಗ್, ಡೆಪ್ಲಾಯ್ ಮತ್ತು ರಿಕವರ್ ಮಾಡಲು ಸುಲಭವಾದ ಆರ್ಕಿಟೆಕ್ಚರ್‌ಗಳನ್ನು ನಾನು ಆದ್ಯತೆ ನೀಡುತ್ತೇನೆ.",
    },
    {
      title: "ಪ್ರತ್ಯೇಕ ಡೆಮೋಗಳಲ್ಲ, ಮಾಲೀಕತ್ವವನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿ",
      description:
        "ಮುಖ್ಯವಾದ ಕೆಲಸವೆಂದರೆ ಅಳವಡಿಕೆಯನ್ನು ಬದುಕಿ ಉಳಿಯುವ ಕೆಲಸ. ನಿರ್ವಹಣಾ ಸುಲಭತೆ, ತಂಡದ ಅಳವಡಿಕೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣಾ ವಿಶ್ವಾಸಾರ್ಹತೆಗಾಗಿ ನಾನು ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತೇನೆ.",
    },
  ],

  flagshipProjects: [
    {
      title: "Phoenix 125M",
      slug: "phoenix-125m",
      category: "Decoder-only ಭಾಷಾ ಮಾದರಿ",
      status: "ಬಿಡುಗಡೆಯಾಗಿದೆ",
      summary:
        "ಕಸ್ಟಮ್ tokenizer, data pipeline ಮತ್ತು training loop ಜೊತೆಗೆ ಒಂದೇ RTX 3080 Ti ಮೇಲೆ ಮೊದಲಿನಿಂದ ತರಬೇತಿ ಪಡೆದ LLaMA-ಶೈಲಿಯ 125M parameter ಮಾದರಿ.",
      ctaLabel: "ಮಾದರಿ ಕಾರ್ಡ್ ನೋಡಿ",
    },
    {
      title: "Sweta-Hi and Sweta-Kn",
      slug: "sweta",
      category: "ಬಹುಭಾಷಾ ಭಾಷಾ ಮಾದರಿಗಳು",
      status: "ಬಿಡುಗಡೆಯಾಗಿದೆ",
      summary:
        "ಕಸ್ಟಮ್ tokenizers ಮತ್ತು ಎಂಡ್-ಟು-ಎಂಡ್ ಬಹುಭಾಷಾ data pipeline ಜೊತೆಗೆ LLaMA-ಶೈಲಿಯ ಆರ್ಕಿಟೆಕ್ಚರ್ ಮೇಲೆ ನಿರ್ಮಿಸಲಾದ ಹಿಂದಿ ಮತ್ತು ಕನ್ನಡ pretraining ಪ್ರಯತ್ನಗಳು.",
      ctaLabel: "ಮಾದರಿ ಕಾರ್ಡ್ ನೋಡಿ",
    },
    {
      title: "SQLForge: Mistral 7B QLoRA",
      slug: "mistral-7b-sql-qlora",
      category: "Fine-tuning · Text-to-SQL",
      status: "ಬಿಡುಗಡೆಯಾಗಿದೆ",
      summary:
        "Mistral 7B v0.3 ಅನ್ನು ವಿಶ್ವಾಸಾರ್ಹ text-to-SQL ಮಾದರಿಯಾಗಿ ಪರಿವರ್ತಿಸುವ 4-bit QLoRA fine-tune. Phoenix 125M ಗೆ ಬಳಸಿದ ಅದೇ 12 GB GPU, ಮುಂಚಿತವಾಗಿ ನಿಗದಿಪಡಿಸಿದ 3.75 GB VRAM ಹೆಡ್‌ರೂಮ್, ಮತ್ತು ಮೊದಲ WikiSQL ರನ್ ಮೆಟ್ರಿಕ್ ಸುಳ್ಳು ಹೇಳುತ್ತಿದೆ ಎಂದು ತೋರಿಸಿದ ನಂತರ schema-aware ಮೌಲ್ಯಮಾಪನದ ಮರುನಿರ್ಮಾಣ.",
      ctaLabel: "HuggingFace ನಲ್ಲಿ ಮಾದರಿ ನೋಡಿ",
    },
    {
      title: "LinkedIn Post Swarm",
      slug: "linkedin-post-swarm",
      category: "Agentic ವಿಷಯ pipeline",
      status: "ಲೈವ್",
      summary:
        "ಡ್ರಾಫ್ಟ್ ರಚನೆ, ವಿಮರ್ಶೆ, ಅನುಮೋದನೆ ಮತ್ತು ನಿಗದಿತ ಪ್ರಕಟಣೆಗಾಗಿ Claude, Ollama, Playwright ಮತ್ತು Telegram ಬಳಸುವ ಬಹು-agent ಪ್ರಕಟಣಾ ವರ್ಕ್‌ಫ್ಲೋ.",
      ctaLabel: "ಯೋಜನೆ ನೋಡಿ",
    },
    {
      title: "Rudra",
      slug: "rudra",
      category: "ಸ್ವಾಯತ್ತ AI ಭದ್ರತಾ ಆರ್ಕೆಸ್ಟ್ರೇಟರ್",
      status: "ಇದರ ಮೇಲೆ ಕೆಲಸ ನಡೆಯುತ್ತಿದೆ",
      summary:
        "ಕಟ್ಟುನಿಟ್ಟಾದ scope guardrails, sandboxed ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಆಡಿಟ್ ಮಾಡಬಹುದಾದ event-driven ವರ್ಕ್‌ಫ್ಲೋಗಳ ಸುತ್ತ ನಿರ್ಮಿಸಲಾದ ಬಹು-agent ಆಕ್ರಮಣಕಾರಿ ಭದ್ರತಾ ಆರ್ಕಿಟೆಕ್ಚರ್.",
      ctaLabel: "ಯೋಜನೆ ನೋಡಿ",
    },
    {
      title: "LocalLeads",
      slug: "local-leads",
      category: "AI-ಚಾಲಿತ lead generation ವರ್ಕ್‌ಫ್ಲೋ",
      status: "ಲೈವ್",
      summary:
        "ವ್ಯವಹಾರ ಶೋಧ, AI ವಿಷಯ ರಚನೆ, ಸೈಟ್ ಜೋಡಣೆ, ಡೆಪ್ಲಾಯ್‌ಮೆಂಟ್ ಮತ್ತು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಔಟ್‌ರೀಚ್‌ಗಾಗಿ ಎಂಡ್-ಟು-ಎಂಡ್ ಬ್ಯಾಕೆಂಡ್ ಸಿಸ್ಟಮ್.",
      ctaLabel: "ಯೋಜನೆ ನೋಡಿ",
    },
    {
      title: "ATIS",
      slug: "atis",
      category: "ಸ್ವಾಯತ್ತ trading intelligence ಸಿಸ್ಟಮ್",
      status: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
      summary:
        "ಭಾರತೀಯ ಷೇರುಗಳ ಮೇಲೆ swing trading ಗಾಗಿ 6-ಹಂತದ ಸ್ವಾಯತ್ತ ಸಿಸ್ಟಮ್, ಇದು ಸಂಶೋಧನಾ ಪತ್ರಗಳು ಮತ್ತು ಫೈಲಿಂಗ್‌ಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ, causal knowledge graph ಅನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ, walk-forward ಮತ್ತು Monte Carlo ಮೌಲ್ಯೀಕರಣದೊಂದಿಗೆ theses ಅನ್ನು backtest ಮಾಡುತ್ತದೆ, ಮತ್ತು 600 NSE/BSE ಷೇರುಗಳ ಮೇಲೆ ದೈನಂದಿನ ಶ್ರೇಣೀಕೃತ swing trade signals ಅನ್ನು ರೂಪಿಸುತ್ತದೆ.",
      ctaLabel: "ಯೋಜನೆ ನೋಡಿ",
    },
    {
      title: "Dhan MCP Server",
      slug: "dhan-mcp",
      category: "Model Context Protocol server",
      status: "ಬಿಡುಗಡೆಯಾಗಿದೆ",
      summary:
        "ನನ್ನ ಲೈವ್ DhanHQ broker ಖಾತೆ ಮತ್ತು ಭಾರತೀಯ ಮಾರುಕಟ್ಟೆ ಡೇಟಾವನ್ನು ಯಾವುದೇ MCP client ಗೆ ತೆರೆದಿಡುವ Model Context Protocol server, ಇದರಿಂದ Claude ಅಥವಾ Copilot ಹೋಲ್ಡಿಂಗ್‌ಗಳು, positions ಮತ್ತು option chains ಬಗ್ಗೆ ನೇರವಾಗಿ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಬಹುದು.",
      ctaLabel: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    },
    {
      title: "CodeAtlas",
      slug: "codeatlas",
      category: "ಕೋಡ್ ಗ್ರಹಿಕೆ ಸಾಧನ",
      status: "ಬಿಡುಗಡೆಯಾಗಿದೆ",
      summary:
        "C ಸೋರ್ಸ್ ಅನ್ನು ಪ್ರತಿ-ಫಂಕ್ಷನ್ Mermaid flowcharts ಆಗಿ ಪರಿವರ್ತಿಸುವ ಕೋಡ್ ಗ್ರಹಿಕೆ ಸಾಧನ, ಎರಡು ಪರಸ್ಪರ ಬದಲಾಯಿಸಬಹುದಾದ engines ಜೊತೆಗೆ: ನಿರ್ಣಾಯಕ AST ಮಾರ್ಗ ಮತ್ತು LLM ಮಾರ್ಗ, FastAPI backend ಮತ್ತು React canvas ಮೇಲೆ ಒದಗಿಸಲಾಗಿದೆ.",
      ctaLabel: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    },
    {
      title: "GraphMind",
      slug: "graphmind",
      category: "GraphRAG knowledge graph",
      status: "ಬಿಡುಗಡೆಯಾಗಿದೆ",
      summary:
        "trade ಮತ್ತು ಸಂಶೋಧನಾ ಡೇಟಾವನ್ನು Neo4j knowledge graph ಮತ್ತು ChromaDB vector store ಆಗಿ ಸ್ವೀಕರಿಸುವ GraphRAG ನಿರ್ಮಾಣ, ನಂತರ graph traversal, dense retrieval ಮತ್ತು hybrid search ನಡುವೆ ಆಯ್ಕೆ ಮಾಡುವ LangGraph ReAct agent ಮೂಲಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತದೆ.",
      ctaLabel: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    },
    {
      title: "PaperGraph",
      slug: "papergraph",
      category: "LLM firewall ಹೊಂದಿರುವ GraphRAG",
      status: "ನಿರ್ಮಿಸಲಾಗಿದೆ",
      summary:
        "ಸಂಶೋಧನಾ ಪತ್ರಗಳ ಕ್ಯುರೇಟ್ ಮಾಡಿದ corpus ಮೇಲೆ GraphRAG ಪ್ರಶ್ನೋತ್ತರ, ನಾಲ್ಕು-ಪದರದ LLM firewall ನಿಂದ ಮುನ್ನೆಲೆಯಲ್ಲಿ, offline RAGAS ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸ್ವಯಂ-ಹೋಸ್ಟ್ ಮಾಡಿದ Langfuse tracing ಜೊತೆಗೆ, GCP Cloud Run ಗಾಗಿ ಪ್ಯಾಕೇಜ್ ಮಾಡಲಾಗಿದೆ.",
      ctaLabel: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    },
    {
      title: "KiranaIQ",
      slug: "kiranaiq",
      category: "Demand-forecasting + inventory copilot",
      status: "ನಿರ್ಮಿಸಲಾಗಿದೆ",
      summary:
        "ಸಣ್ಣ ಭಾರತೀಯ ಕಿರಾಣಾ ಅಂಗಡಿಗಳಿಗಾಗಿ demand-forecasting ಮತ್ತು inventory copilot: ಬಿಲ್ ಒಂದನ್ನು ಫೋಟೋ ತೆಗೆಯಿರಿ, ಪ್ರತಿ-SKU forecasts, ಸರಳ-ಭಾಷೆಯ ವಿವರಣೆಗಳು, ಮರು-ಆರ್ಡರ್ ಪ್ರಮಾಣಗಳು ಮತ್ತು ಬೆಲೆ ಪ್ರಯೋಗಗಳನ್ನು ಪಡೆಯಿರಿ.",
      ctaLabel: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    },
    {
      title: "hybrid-search-bench",
      slug: "hybrid-search-bench",
      category: "Learning-to-rank retrieval benchmark",
      status: "ನಿರ್ಮಿಸಲಾಗಿದೆ",
      summary:
        "ಪ್ರಾಮಾಣಿಕ hybrid-retrieval benchmark: BM25, SPLADE ಮತ್ತು dense retrieval, ಒಗ್ಗೂಡಿಸಿ ನಂತರ LambdaMART learning-to-rank ಮಾದರಿಯಿಂದ rerank ಮಾಡಲಾಗಿದೆ, ಸಾರ್ವಜನಿಕ BEIR ಡೇಟಾಸೆಟ್ ಮೇಲೆ ಅಳೆಯಲಾಗಿದೆ.",
      ctaLabel: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    },
  ],

  homeContent: {
    eyebrow: "Shreyash Pandey // IBM ನಲ್ಲಿ Software Development Engineer 2",
    title:
      "ನಾನು AI ಸಿಸ್ಟಮ್‌ಗಳು, ಆಟೊಮೇಷನ್ ವರ್ಕ್‌ಫ್ಲೋಗಳು ಮತ್ತು ಪ್ರೊಡಕ್ಷನ್‌ನಲ್ಲಿ ಬದುಕಿ ಉಳಿಯುವ ಬ್ಯಾಕೆಂಡ್ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇನೆ",
    lede:
      "ನನ್ನ ಇತ್ತೀಚಿನ ಕೆಲಸ ಅನ್ವಯಿಕ AI ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ಶಿಸ್ತು ಸಂಧಿಸುವ ಕಡೆ ನಿಂತಿದೆ: locator ಸ್ವಯಂ-ಗುಣಪಡಿಸುವಿಕೆ, semantic retrieval, ಆಂತರಿಕ copilots, ಬಹುಭಾಷಾ model ತರಬೇತಿ, ಮತ್ತು ನೈಜ ಕಾರ್ಯಾಚರಣಾ guardrails ಹೊಂದಿರುವ ಆಟೊಮೇಷನ್ pipelines.",
    highlights: [
      "5K+ ಟೆಸ್ಟ್ locators ಸ್ವಯಂ-ಗುಣಪಡಿಸಲಾಗಿದೆ",
      "3-ಹಂತದ ML ಜೊತೆಗೆ VLM ರಿಕವರಿ ವಿನ್ಯಾಸ",
      "Hackathon ಗೆದ್ದ semantic search",
      "ಮೊದಲಿನಿಂದ open-source model ತರಬೇತಿ",
    ],
    metrics: [
      { value: "5K+", label: "ಟೆಸ್ಟ್ locators ಸ್ವಯಂ-ಗುಣಪಡಿಸಲಾಗಿದೆ" },
      { value: "4", label: "SAT runtime ನಲ್ಲಿ microservices" },
      { value: "83%", label: "ಫಾಲ್‌ಬ್ಯಾಕ್ ಮೋಡ್‌ನಲ್ಲಿ Chrome ನಿಖರತೆ" },
      { value: "70%", label: "ಕಡಿಮೆ ಆಂತರಿಕ ಬೆಂಬಲ ಟಿಕೆಟ್‌ಗಳು" },
      { value: "99.99%", label: "ಊಹೆಯಿಂದ ಬೆಂಬಲಿತ ಲಭ್ಯತೆ" },
      { value: "1st", label: "TechInterrupt ನಲ್ಲಿ ಭಾರತದಲ್ಲಿ ಸ್ಥಾನ" },
    ],
    heroPanel: {
      eyebrow: "ಪ್ರಸ್ತುತ ಪುರಾವೆ ಮೇಲ್ಮೈ",
      title: "ಒಂದೇ ಸ್ಟ್ಯಾಕ್‌ನಲ್ಲಿ ಪ್ರೊಡಕ್ಷನ್ ಸಿಸ್ಟಮ್‌ಗಳು, model ಕೆಲಸ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಆಟೊಮೇಷನ್",
      summary:
        "ಪೋರ್ಟ್‌ಫೋಲಿಯೋದಲ್ಲಿ ಅತ್ಯಂತ ಬಲವಾದ ಸಂಕೇತ ಒಂದೇ ಯೋಜನೆ ಅಲ್ಲ. ಇದು ಕೆಲಸ ಮತ್ತು ಸ್ವತಂತ್ರ ಸಿಸ್ಟಮ್‌ಗಳಾದ್ಯಂತ ಬಿಡುಗಡೆಯಾದ AI ರಿಕವರಿ ವಿನ್ಯಾಸ, ಸೇವಾ ರಿಲಯಬಿಲಿಟಿ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ model ನಿರ್ಮಾಣದ ಸಂಯೋಜನೆ.",
      proofs: [
        {
          label: "ರಿಕವರಿ ಏಣಿ",
          value: "3 tiers",
          detail: "ಮೊದಲು CSS selectors, ನಂತರ embeddings, ನಂತರ ಅಸ್ಪಷ್ಟತೆ ಹೆಚ್ಚಿರುವಾಗ IBM Granite 3.3 VLM.",
        },
        {
          label: "Runtime ಪ್ರಮಾಣ",
          value: "4K-5K rpm",
          detail: "SAT runtime ಅನ್ನು ಸಬ್-ಸೆಕೆಂಡ್ ಲೇಟೆನ್ಸಿ ಮತ್ತು ಬಿಡುಗಡೆ-ದರ್ಜೆಯ ಕಾರ್ಯಾಚರಣಾ ನಿರ್ಬಂಧಗಳೊಂದಿಗೆ ನಾಲ್ಕು ಸೇವೆಗಳಾಗಿ ವಿಭಜಿಸಲಾಗಿದೆ.",
        },
        {
          label: "Model ಟ್ರ್ಯಾಕ್",
          value: "125M",
          detail: "Phoenix 125M ಜೊತೆಗೆ ಕಸ್ಟಮ್ tokenizers ಮತ್ತು training pipelines ಗಳೊಂದಿಗೆ ನಿರ್ಮಿಸಿದ ಬಹುಭಾಷಾ pretraining ಕೆಲಸ.",
        },
      ],
      featuredProjects: ["Phoenix 125M", "LinkedIn Post Swarm", "Rudra"],
    },
    focusIntro:
      "ನನ್ನ ಕೆಲಸದಾದ್ಯಂತ ಸಾಮಾನ್ಯ ಸೂತ್ರವೆಂದರೆ ಅಸ್ಪಷ್ಟತೆಯಲ್ಲಿ ರಿಲಯಬಿಲಿಟಿ. ತರ್ಕಿಸಬೇಕಾದ, ರಿಕವರ್ ಮಾಡಬೇಕಾದ ಮತ್ತು ಆದರೂ ಕಾರ್ಯಾಚರಣಾವಾಗಿ ಸ್ಪಷ್ಟವಾಗಿ ಉಳಿಯುವ ಸಿಸ್ಟಮ್‌ಗಳು ನನಗೆ ಇಷ್ಟ.",
  },

  pageMeta: {
    "/": {
      title: "Shreyash Pandey, AI ಸಿಸ್ಟಮ್ಸ್ ಎಂಜಿನಿಯರ್",
      description:
        "Shreyash Pandey AI ಸಿಸ್ಟಮ್‌ಗಳು, agentic ವರ್ಕ್‌ಫ್ಲೋಗಳು ಮತ್ತು ಬ್ಯಾಕೆಂಡ್ ವೇದಿಕೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಾರೆ. IBM ನ ಉತ್ಪನ್ನ ಕೆಲಸ, 2026ರ ಪ್ರಮುಖ ಯೋಜನೆಗಳು ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಅನ್ವಯಿಕ AI ಎಂಜಿನಿಯರಿಂಗ್‌ನ ಮೇಲೆ ಕೇಂದ್ರೀಕೃತ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಅನ್ವೇಷಿಸಿ.",
    },
    "/work": {
      title: "ಕೆಲಸ · Shreyash Pandey",
      description:
        "IBM ನಲ್ಲಿ SDE2, 5K+ ಟೆಸ್ಟ್ locators ಗಾಗಿ AI-ಚಾಲಿತ ಸ್ವಯಂ-ಗುಣಪಡಿಸುವಿಕೆ, 4-5K rpm ನಲ್ಲಿ microservice runtimes, ಮತ್ತು hackathon ಗೆದ್ದ semantic search engine ಅನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದಾರೆ. ಮೂರು ವರ್ಷಗಳ ಅನ್ವಯಿಕ AI ಮತ್ತು ಬ್ಯಾಕೆಂಡ್ ಎಂಜಿನಿಯರಿಂಗ್.",
    },
    "/about": {
      title: "ಪರಿಚಯ · Shreyash Pandey",
      description:
        "ಬೆಂಗಳೂರಿನ AI ಸಿಸ್ಟಮ್ಸ್ ಎಂಜಿನಿಯರ್ Shreyash Pandey ಅವರ ಹಿನ್ನೆಲೆ, ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಕೆಲಸದ ಶೈಲಿ, Python, Java, PyTorch, LangChain ಮತ್ತು ಪ್ರೊಡಕ್ಷನ್ ರಿಲಯಬಿಲಿಟಿಯಲ್ಲಿ ಪರಿಣತಿಯೊಂದಿಗೆ.",
    },
    "/projects": {
      title: "ಯೋಜನೆಗಳು · Shreyash Pandey",
      description:
        "2026ರ ಪ್ರಮುಖ ನಿರ್ಮಾಣಗಳು: ಮೊದಲಿನಿಂದ ತರಬೇತಿ ಪಡೆದ Phoenix 125M LLM, ಬಹುಭಾಷಾ ಹಿಂದಿ/ಕನ್ನಡ ಮಾದರಿಗಳು, agentic LinkedIn ಪ್ರಕಟಣಾ pipeline, AI ಭದ್ರತಾ ಆರ್ಕೆಸ್ಟ್ರೇಟರ್, ಮತ್ತು ಇನ್ನಷ್ಟು.",
    },
  },

  ui: {
    nav_home: "ಮುಖಪುಟ",
    nav_work: "ಕೆಲಸ",
    nav_about: "ಪರಿಚಯ",
    nav_projects: "ಯೋಜನೆಗಳು",
    nav_playground: "ಪ್ಲೇಗ್ರೌಂಡ್",
    nav_cta: "ಸಂಪರ್ಕಿಸಿ",
    hero_view_work: "ನನ್ನ ಕೆಲಸ ನೋಡಿ",
    hero_get_in_touch: "ಸಂಪರ್ಕಿಸಿ",
    home_focus_eyebrow: "ನಾನು ಯಾವುದಕ್ಕಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತೇನೆ",
    home_experience_eyebrow: "ನಾನು ಬಿಡುಗಡೆ ಮಾಡಿದ ಸಿಸ್ಟಮ್‌ಗಳು",
    home_projects_eyebrow: "ಪ್ರಸ್ತುತ ಯೋಜನೆಗಳು",
    home_seeall_eyebrow: "ಎಲ್ಲಾ ನಿರ್ಮಾಣಗಳನ್ನು ನೋಡಿ",
    home_seeall_title: "ಪೂರ್ಣ ಯೋಜನಾ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಅನ್ವೇಷಿಸಿ",
    home_all_projects: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
    home_bottom_eyebrow: "ನನ್ನ ಮುಂದಿನ ಪಾತ್ರವನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇನೆ",
    home_more_about: "ನನ್ನ ಬಗ್ಗೆ ಹೆಚ್ಚು",
    proj_view_project: "ಯೋಜನೆ ನೋಡಿ",
    skills_heading: "ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳು",
    principles_heading: "ನಾನು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ",

    // Additional user-facing strings found hardcoded in the .astro files
    nav_resume: "ರೆಸ್ಯೂಮ್",
    work_capability_map: "ಸಾಮರ್ಥ್ಯ ನಕ್ಷೆ",
    work_cta_eyebrow: "ಜೊತೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡಲು ಆಸಕ್ತಿಯಿದೆಯೇ?",
    work_cta_title: "ಪಾತ್ರದ ಸೂಕ್ತತೆ ಬಗ್ಗೆ ಚರ್ಚಿಸೋಣ",
    work_cta_body: "AI ಸಿಸ್ಟಮ್‌ಗಳು, ಬ್ಯಾಕೆಂಡ್ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ರಿಲಯಬಿಲಿಟಿ ಕೆಲಸ ಒಂದಾಗಿ ಸೇರುವ ಪಾತ್ರಗಳಲ್ಲಿ ನನಗೆ ಹೆಚ್ಚು ಆಸಕ್ತಿ.",
    cta_get_in_touch: "ಸಂಪರ್ಕಿಸಿ",
    about_education: "ಶಿಕ್ಷಣ",
    about_what_i_value: "ನಾನು ಯಾವುದಕ್ಕೆ ಮೌಲ್ಯ ನೀಡುತ್ತೇನೆ",
    about_certifications: "ಪ್ರಮಾಣೀಕರಣಗಳು",
    about_lets_connect: "ಸಂಪರ್ಕದಲ್ಲಿರೋಣ",
    about_open_to_opportunities: "ಅವಕಾಶಗಳಿಗೆ ಮುಕ್ತ",
    about_open_to_opportunities_body: "AI ಸಿಸ್ಟಮ್‌ಗಳು, ಬ್ಯಾಕೆಂಡ್ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ರಿಲಯಬಿಲಿಟಿಯ ಸಂಧಿಯಲ್ಲಿರುವ ಪಾತ್ರಗಳನ್ನು ನಾನು ಹುಡುಕುತ್ತಿದ್ದೇನೆ.",
    about_outside_work: "ಕೆಲಸದ ಹೊರಗೆ",
    about_find_me_online: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನನ್ನನ್ನು ಹುಡುಕಿ",
    about_book_session: "Topmate ನಲ್ಲಿ ಸೆಷನ್ ಬುಕ್ ಮಾಡಿ",
    projects_flagship_builds: "ಪ್ರಮುಖ ನಿರ್ಮಾಣಗಳು",
    projects_earlier_work: "ಹಿಂದಿನ ಕೆಲಸ",
    projects_on_the_roadmap: "ಮಾರ್ಗಸೂಚಿಯಲ್ಲಿ",
    projects_view_details: "ವಿವರಗಳನ್ನು ನೋಡಿ",
    projects_view_github: "GitHub ನಲ್ಲಿ ನೋಡಿ",
    projects_public_work_eyebrow: "Open-source ಮತ್ತು ಸಾರ್ವಜನಿಕ ಕೆಲಸ",
    projects_public_work_title: "ಮಾದರಿಗಳು, ಕೋಡ್ ಮತ್ತು ಪ್ರಯೋಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    projects_public_work_body: "ಎಲ್ಲಾ ಪ್ರಮುಖ ಯೋಜನೆಗಳನ್ನು GitHub ನಲ್ಲಿ ದಾಖಲಿಸಲಾಗಿದೆ. Model weights ಮತ್ತು cards ಅನ್ನು Hugging Face ನಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ.",
    kbd_title: "ಕೀಬೋರ್ಡ್ ಶಾರ್ಟ್‌ಕಟ್‌ಗಳು",
    kbd_toggle_theme: "ಡಾರ್ಕ್ / ಲೈಟ್ ಬದಲಿಸಿ",
    kbd_go_home: "ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ",
    kbd_view_projects: "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    kbd_view_work: "ಕೆಲಸ ನೋಡಿ",
    kbd_open_github: "GitHub ತೆರೆಯಿರಿ",
    kbd_show_panel: "ಈ ಫಲಕವನ್ನು ತೋರಿಸಿ",
    kbd_hint_close: "ಮುಚ್ಚಲು Esc ಒತ್ತಿ ಅಥವಾ ಹೊರಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
  },
};
