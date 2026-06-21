// Simplified Chinese (zh) translations for the portfolio.
// Mirrors the named exports of src/data/siteContent.js. Object keys, numbers,
// units, dates, metric values, URLs, emails, brand names, and technology terms
// are intentionally left untranslated.

const siteMeta = {
  role: "AI 系统工程师",
  location: "印度班加罗尔",
  contactBlurb:
    "我最感兴趣的是 AI 系统、后端工程与可靠性工作交汇的岗位。通常意味着 agent 基础设施、以评估为核心的产品工作、自动化平台或开发者工具。",
};

const navigationLinks = [
  {
    path: "/",
    label: "首页",
    summary: "概览、能力佐证与当前重心。",
  },
  {
    path: "/work",
    label: "工作经历",
    summary: "精选的产品与应用型 AI 工作。",
  },
  {
    path: "/about",
    label: "关于我",
    summary: "个人背景、技能与工作方式。",
  },
  {
    path: "/projects",
    label: "项目",
    summary: "2026 年的旗舰项目与早期实验。",
  },
];

const experienceTimeline = [
  {
    role: "高级软件开发工程师（SDE 2）",
    location: "印度班加罗尔",
    summary:
      "我在浏览器自动化与测试产品中设计并交付以可靠性为重的 AI 能力。这些工作融合了 embedding、视觉语言模型、服务拆分，以及大量的运维纪律。",
    achievements: [
      "设计了 AI 驱动的自动修复，采用三层恢复阶梯：先 CSS 选择器，再文本 embedding，最后是 IBM Granite 3.3 VLM。",
      "构建了能自主纠正定位失败的逻辑，覆盖 5K+ 测试用例，在内部评估中 Firefox 准确率达 100%、Chrome 准确率达 83%。",
      "参与将 SAT 运行时从单体重构为四个微服务，处理每分钟 4K-5K 请求并保持亚秒级延迟。",
      "主导了 Java 8 到 17 的迁移以及 CI/CD 改进，将构建速度提升 30%，同时维持 99% 的可用性。",
    ],
  },
  {
    role: "软件工程师 2（Software Engineer 2）",
    location: "印度班加罗尔",
    summary:
      "这一阶段让我更深入地投入 AI 产品工作：语义检索、内部 copilot，以及立足于实际产品需求而非演示的预测系统。",
    achievements: [
      "使用 NLP、知识图谱与 FAISS 构建了语义搜索引擎。该项目赢得 TechInterrupt 黑客松：印度第一、全球第四。",
      "用 LangChain 与 Flask 开发了 AI 聊天机器人，将内部支持工单减少了 70%。",
      "使用 PyTorch 与时间序列分析构建了故障预测系统，支撑了 99.99% 的系统可用性。",
    ],
  },
  {
    role: "软件工程师（Software Engineer）",
    location: "印度班加罗尔",
    summary:
      "我围绕 Java、Spring Boot 与 REST API 开发企业集成平台能力，打下的基础至今仍塑造着我思考生产系统的方式。",
    achievements: [
      "使用 Java 与 Spring Boot 为企业集成场景交付 webMethods 平台功能。",
      "构建过程中高度重视兼容性、API 契约与发布质量，并获评 2023 年度卓越员工（Star Performer）。",
    ],
  },
];

const workPrinciples = [
  {
    title: "从最廉价且可靠的回退方案入手",
    description:
      "我设计系统时先尝试确定性恢复，只有在确有必要时才升级到机器学习与基于模型的回退方案。",
  },
  {
    title: "把评估当作产品的一部分",
    description:
      "当系统包含 AI 时，度量闭环就不是可选项。我关注可观测的准确率、漂移、错误预算与失败分析。",
  },
  {
    title: "偏向朴素可靠的运维",
    description:
      "比起只在架构图上好看的花哨技术栈，我更偏好在压力下更易调试、部署和恢复的架构。",
  },
  {
    title: "交付的是责任，而非孤立的演示",
    description:
      "真正重要的工作是能经受住落地考验的工作。我以可维护性、团队采用度与运维可信度为优化目标。",
  },
];

const flagshipProjects = [
  {
    title: "Phoenix 125M",
    slug: "phoenix-125m",
    category: "仅解码器语言模型",
    status: "已发布",
    summary:
      "一个 LLaMA 风格的 125M 参数模型，在单块 RTX 3080 Ti 上从零训练，配有自定义分词器、数据管道与训练循环。",
    ctaLabel: "查看模型卡",
  },
  {
    title: "Sweta-Hi and Sweta-Kn",
    slug: "sweta",
    category: "多语言语言模型",
    status: "已发布",
    summary:
      "基于 LLaMA 风格架构的印地语与卡纳达语预训练工作，配有自定义分词器与端到端的多语言数据管道。",
    ctaLabel: "查看模型卡",
  },
  {
    title: "SQLForge: Mistral 7B QLoRA",
    slug: "mistral-7b-sql-qlora",
    category: "微调 · 文本转 SQL",
    status: "已发布",
    summary:
      "一次 4-bit QLoRA 微调，把 Mistral 7B v0.3 变成可靠的文本转 SQL 模型。沿用训练 Phoenix 125M 的那块 12 GB GPU，预留 3.75 GB 显存余量；在首次 WikiSQL 运行暴露出指标失真后，重建了感知 schema 的评估流程。",
    ctaLabel: "在 HuggingFace 上查看模型",
  },
  {
    title: "LinkedIn Post Swarm",
    slug: "linkedin-post-swarm",
    category: "Agent 化内容管道",
    status: "已上线",
    summary:
      "一个多 agent 发布工作流，使用 Claude、Ollama、Playwright 与 Telegram 完成草稿生成、审阅、审批与定时发布。",
  },
  {
    title: "Rudra",
    slug: "rudra",
    category: "自主 AI 安全编排器",
    status: "正在开发中",
    statusNote:
      "正在积极开发中。两个 agent 已完整实现，配有 LangGraph 编排、跨本地模型的 LiteLLM 模型路由以及 Qdrant 向量记忆；漏洞利用与报告闭环正在扩展。",
    summary:
      "一个围绕严格范围护栏、沙箱执行与可审计的事件驱动工作流构建的多 agent 攻击型安全架构。",
  },
  {
    title: "LocalLeads",
    slug: "local-leads",
    category: "AI 驱动的线索生成工作流",
    status: "已上线",
    statusNote:
      "已从自动化批量触达转型。生成一个网站约需 ₹500，因此现在改为当商家表现出兴趣时再按需建站。当前重心是发现潜在客户，并通过冷邮件展示可以为其现有 IT 基础设施补充什么。",
    summary:
      "一个端到端的后端系统，用于商家发现、AI 内容生成、网站组装、部署与个性化触达。",
  },
  {
    title: "ATIS",
    slug: "atis",
    category: "自主交易智能系统",
    status: "进行中",
    summary:
      "一个六层自主系统，摄取研究论文与申报文件，构建因果知识图谱，用 walk-forward 与蒙特卡洛验证对论点进行回测，并为 600 只 NSE/BSE 股票生成每日排序的波段交易信号。",
  },
  {
    title: "Dhan MCP Server",
    slug: "dhan-mcp",
    category: "Model Context Protocol 服务器",
    status: "已发布",
    summary:
      "一个 Model Context Protocol 服务器，把我实盘的 DhanHQ 券商账户与印度市场数据暴露给任意 MCP 客户端，让 Claude 或 Copilot 能直接回答关于持仓、仓位与期权链的问题。",
  },
  {
    title: "CodeAtlas",
    slug: "codeatlas",
    category: "代码理解工具",
    status: "已发布",
    summary:
      "一款代码理解工具，把 C 源代码转换为按函数划分的 Mermaid 流程图，配有两套可互换的引擎：确定性的 AST 路径与 LLM 路径，通过 FastAPI 后端与 React 画布提供服务。",
  },
  {
    title: "GraphMind",
    slug: "graphmind",
    category: "GraphRAG 知识图谱",
    status: "已发布",
    summary:
      "一个 GraphRAG 项目，将交易与研究数据摄取到 Neo4j 知识图谱与 ChromaDB 向量库中，再由一个 LangGraph ReAct agent 在图遍历、稠密检索与混合检索之间选择并作答。",
  },
  {
    title: "PaperGraph",
    slug: "papergraph",
    category: "带 LLM 防火墙的 GraphRAG",
    status: "已构建",
    summary:
      "针对精选研究论文语料的 GraphRAG 问答，前置一道四层 LLM 防火墙，配有离线 RAGAS 评估与自托管的 Langfuse 追踪，并封装好用于 GCP Cloud Run。",
  },
  {
    title: "KiranaIQ",
    slug: "kiranaiq",
    category: "需求预测 + 库存 copilot",
    status: "已构建",
    statusNote:
      "主界面是一个 Telegram 机器人（已构建、需令牌授权、17 个 handler 测试）。截至 2026 年 6 月，根据印度政府的一项命令，Telegram 在印度被封锁，因此不借助 VPN 无法从印度访问该实时机器人；它可部署到云端主机，并以 webhook/其他渠道作为回退方案。",
    summary:
      "一款面向印度小型 kirana 杂货店的需求预测与库存 copilot：拍下一张账单，即可得到按 SKU 的预测、白话解释、补货数量与价格实验。",
  },
  {
    title: "hybrid-search-bench",
    slug: "hybrid-search-bench",
    category: "learning-to-rank 检索基准",
    status: "已构建",
    summary:
      "一个诚实的混合检索基准：将 BM25、SPLADE 与稠密检索融合，再由一个 LambdaMART learning-to-rank 模型重排，并在公开的 BEIR 数据集上度量。",
  },
];

const homeContent = {
  eyebrow: "Shreyash Pandey // IBM 高级软件开发工程师（SDE 2）",
  title: "我构建能在生产环境中存活的 AI 系统、自动化工作流与后端产品",
  lede:
    "我近期的工作处在应用型 AI 与工程纪律的交汇点：定位器自动修复、语义检索、内部 copilot、多语言模型训练，以及带有真实运维护栏的自动化管道。",
  highlights: [
    "5K+ 测试定位器实现自动修复",
    "三层 ML 加 VLM 的恢复设计",
    "斩获黑客松冠军的语义搜索",
    "从零开始的开源模型训练",
  ],
  metrics: [
    { value: "5K+", label: "测试定位器实现自动修复" },
    { value: "4", label: "SAT 运行时中的微服务" },
    { value: "83%", label: "回退模式下的 Chrome 准确率" },
    { value: "70%", label: "内部支持工单的减少" },
    { value: "99.99%", label: "由预测支撑的可用性" },
    { value: "1st", label: "TechInterrupt 印度区第一" },
  ],
  heroPanel: {
    eyebrow: "当前能力佐证面",
    title: "生产系统、模型工作与可靠自动化集于一个技术栈",
    summary:
      "作品集中最强的信号并非某个单一项目，而是 AI 恢复设计、服务可靠性与亲手构建模型这三者的结合，贯穿于工作项目与独立系统之中。",
    proofs: [
      {
        label: "恢复阶梯",
        value: "3 tiers",
        detail: "先 CSS 选择器，再 embedding，当歧义仍然很高时上 IBM Granite 3.3 VLM。",
      },
      {
        label: "运行时规模",
        value: "4K-5K rpm",
        detail: "SAT 运行时被拆分为四个服务，具备亚秒级延迟与发布级别的运维约束。",
      },
      {
        label: "模型履历",
        value: "125M",
        detail: "Phoenix 125M 以及多语言预训练工作，均用自定义分词器与训练管道构建。",
      },
    ],
    featuredProjects: ["Phoenix 125M", "LinkedIn Post Swarm", "Rudra"],
  },
  focusIntro:
    "贯穿我全部工作的主线是在歧义中保持可靠。我喜欢那些需要推理、需要恢复、却仍能在运维上保持清晰可读的系统。",
};

const pageMeta = {
  "/": {
    title: "Shreyash Pandey，AI 系统工程师",
    description:
      "Shreyash Pandey 构建 AI 系统、agent 化工作流与后端平台。一览来自 IBM 的产品工作、2026 年旗舰项目，以及一份聚焦于可靠应用型 AI 工程的作品集。",
  },
  "/work": {
    title: "工作经历 · Shreyash Pandey",
    description:
      "IBM 高级软件开发工程师（SDE2），为 5K+ 测试定位器构建 AI 驱动的自动修复、4-5K rpm 的微服务运行时，以及斩获黑客松冠军的语义搜索引擎。三年的应用型 AI 与后端工程经验。",
  },
  "/about": {
    title: "关于我 · Shreyash Pandey",
    description:
      "AI 系统工程师 Shreyash Pandey 的背景、技能与工作方式，常驻班加罗尔，精通 Python、Java、PyTorch、LangChain 与生产可靠性。",
  },
  "/projects": {
    title: "项目 · Shreyash Pandey",
    description:
      "2026 年旗舰项目：从零训练的 Phoenix 125M LLM、多语言印地语/卡纳达语模型、一条 agent 化的 LinkedIn 发布管道、一个 AI 安全编排器等。",
  },
};

const ui = {
  nav_home: "首页",
  nav_work: "工作经历",
  nav_about: "关于我",
  nav_projects: "项目",
  nav_playground: "实验场",
  nav_cta: "联系我",
  hero_view_work: "查看我的工作",
  hero_get_in_touch: "联系我",
  home_focus_eyebrow: "我所优化的方向",
  home_experience_eyebrow: "我交付过的系统",
  home_projects_eyebrow: "当前项目",
  home_seeall_eyebrow: "查看全部成果",
  home_seeall_title: "浏览完整的项目作品集",
  home_all_projects: "全部项目",
  home_bottom_eyebrow: "正在寻找我的下一份工作",
  home_more_about: "进一步了解我",
  proj_view_project: "查看项目",
  skills_heading: "技术技能",
  principles_heading: "我的工作方式",
  // Additional user-facing strings found hardcoded in work.astro / about.astro.
  work_capability_map: "能力图谱",
  work_cta_eyebrow: "有兴趣合作吗？",
  work_cta_title: "聊聊岗位契合度",
  work_cta_blurb:
    "我最感兴趣的是 AI 系统、后端工程与可靠性工作交汇的岗位。",
  about_education: "教育背景",
  about_what_i_value: "我所看重的",
  about_certifications: "证书",
  about_lets_connect: "保持联系",
  about_open_to_opportunities: "对机会持开放态度",
  about_open_blurb:
    "我正在寻找处于 AI 系统、后端工程与可靠性交汇处的岗位。",
  about_outside_work: "工作之外",
  about_find_me_online: "在线找到我",
  about_book_topmate: "在 Topmate 上预约一次咨询",
  about_copy_email: "复制邮箱地址",
};

export default {
  siteMeta,
  navigationLinks,
  experienceTimeline,
  workPrinciples,
  flagshipProjects,
  homeContent,
  pageMeta,
  ui,
};
