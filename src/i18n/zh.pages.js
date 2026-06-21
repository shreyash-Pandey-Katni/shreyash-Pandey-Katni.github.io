// Simplified Chinese (zh) page-level translations for the portfolio.
// Mirrors a subset of the named exports of src/data/siteContent.js. Object keys,
// numbers, units, dates, URLs, brand/product names, and technology terms are
// intentionally left untranslated. `certifications` is omitted on purpose so the
// official course names fall back to English.

const workContent = {
  eyebrow: "横跨产品工程与应用型 AI 的案例研究",
  title: "精选工作",
  intro:
    "我最擅长那些既需要扎实工程基本功、又需要务实 AI 的产品。这通常意味着要在生产约束下交付，而不只是构建原型。",
};

const aboutContent = {
  eyebrow: "背景与工作方式",
  title: "关于我",
  intro:
    "我从企业级后端工程起步，逐渐转向 AI 系统，因为最棘手的产品问题始终盘踞在那条边界上：搜索、自动化、可观测性、恢复，以及可信赖的自主性。",
  secondary:
    "如今我最在意的是构建有雄心却不鲁莽的系统。这通常意味着严谨的回退方案、可度量的质量、显式的状态，以及能帮助团队更快推进、又不埋下隐性脆弱性的工具。",
  values: [
    {
      title: "可靠胜于表演",
      description:
        "比起华丽的说辞，我更看重佐证、可观测性与恢复预案。AI 工作中真正有意思的部分，是在演示第一次成功之后才开始的。",
    },
    {
      title: "先理解上下文，再动手写代码",
      description:
        "在决定哪种架构站得住脚之前，我喜欢先弄清产品、部署环境与失败面。",
    },
    {
      title: "可复利累积的深度",
      description:
        "我刻意在几个相互强化的领域深耕：后端系统、AI 可靠性、搜索与自动化工作流。",
    },
  ],
  outsideWork: [
    "在我能给出具体而有用的建议时，我会通过 Topmate 做导师和咨询。",
    "我偶尔在 Medium 上写作，通常是在有值得记录的、偏实现细节的内容时。",
    "我目前的不少个人时间都投入到多语言 NLP、agent 系统以及面向 AI 安全的构建上。",
  ],
  education: {
    school: "Bangalore Institute of Technology",
    degree: "工程学士，计算机科学",
    years: "2018 - 2022",
    detail: "CGPA: 7.2",
  },
};

const projectsContent = {
  eyebrow: "2026 旗舰构建",
  title: "项目",
  intro:
    "如今的作品集围绕着重 AI、重后端的项目展开，更好地反映了我在职业上正在走的方向：模型构建、agent 编排、安全自主性与工作流工程。",
  archiveIntro:
    "在当前这一代工作之前，我用一些较小的 ML 与 Web 项目养成了至今仍然重要的习惯：做实验、调试，以及交付完整的系统。",
  roadmapIntro:
    "我接下来计划要做的，在公开构建之前先列在这里。",
};

const skillGroups = [
  {
    title: "编程语言",
    items: ["Python", "Java", "Go", "SQL", "JavaScript"],
  },
  {
    title: "AI 与 ML",
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
      "LightGBM",
      "SHAP",
      "Learning-to-rank",
      "RAGAS",
      "Langfuse",
      "A/B testing",
      "OCR",
      "GraphRAG",
      "Qdrant",
      "LiteLLM",
    ],
  },
  {
    title: "后端",
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
    title: "DevOps 与数据",
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
      "pgvector",
      "PostgreSQL",
      "Neo4j",
      "Kubernetes",
      "OpenTelemetry",
      "Prometheus",
    ],
  },
];

const roadmapProjects = [
  {
    status: "计划中",
    title: "KiranaIQ forecasting v2",
    summary:
      "通过处理间歇性需求并采用一个跨门店的全局单一模型，提升 KiranaIQ 的预测准确率。",
    href: "https://github.com/shreyash-Pandey-Katni/KiranaIQ",
  },
];

export default {
  workContent,
  aboutContent,
  projectsContent,
  skillGroups,
  roadmapProjects,
};
