/*
  ================================================================
  EASY CONTENT EDITING
  ================================================================
  Edit the text between quotation marks below, save the file, then
  refresh index.html. Keep commas and quotation marks in place.
  You do not need to edit index.html for normal content updates.
*/

window.PORTFOLIO_CONTENT = {
  personal: {
    initials: "NS",
    name: "Nourin Shahin",
    role: "AI Engineer",
    email: "Nourinshahin2001@gmail.com",
    phoneDisplay: "317-229-5432",
    phoneLink: "+13172295432",
    linkedin: "https://www.linkedin.com/in/nourin-shahin",
    scholar: "https://scholar.google.com/scholar?q=%22Nourin+Shahin%22",
    resume: "assets/Nourin-Shahin-Resume.pdf",
    location: "San Antonio, Texas",
  },

  home: {
    eyebrow: "AI ENGINEER · LLM SYSTEMS",
    name: "Nourin Shahin",
    headline: "Research rigor. Production impact.",
    summary:
      "I build trustworthy, efficient AI systems—from agentic RAG and model fine-tuning to rigorous evaluation, security testing, and GPU deployment.",
    availability: "Open to AI engineering and research opportunities",
    stats: [
      { value: "4.0", label: "Graduate GPA", note: "MS Computer Science" },
      { value: "80+", label: "HPC centers", note: "Knowledge sources crawled" },
      { value: "243", label: "Benchmark tasks", note: "Measured across seeds" },
    ],
    focus: ["Agentic AI", "RAG", "LLM Evaluation", "AI Security"],
  },

  /* The six central stages shown in the home-page diagram. */
  aiLifecycle: {
  eyebrow: "END-TO-END AI MODEL LIFECYCLE",
  title: "How I build efficient, reliable AI",
  subtitle:
    "I focus on quality, safety, efficiency, and reliability throughout the complete model lifecycle.",

  stages: [
    {
      number: "01",
      title: "Define",
      detail: "Problem and success metrics",
    },
    {
      number: "02",
      title: "Data",
      detail: "Collect and govern",
    },
    {
      number: "03",
      title: "Prepare",
      detail: "Validate and transform",
    },
    {
      number: "04",
      title: "Build",
      detail: "Design and train",
    },
    {
      number: "05",
      title: "Verify",
      detail: "Quality, safety, and robustness",
    },
    {
      number: "06",
      title: "Deploy",
      detail: "Optimize and serve",
    },
    {
      number: "07",
      title: "Monitor",
      detail: "Quality, drift, and cost",
    },
    {
      number: "08",
      title: "Improve",
      detail: "Feedback and retraining",
    },
  ],

  qualityChecks: [
    {
      label: "Define measurable success",
      position: "top-left",
    },
    {
      label: "Data quality and governance",
      position: "top-right",
    },
    {
      label: "Reproducible development",
      position: "middle-left",
    },
    {
      label: "Latency and cost efficiency",
      position: "middle-right",
    },
    {
      label: "Safety and failure analysis",
      position: "bottom-left",
    },
    {
      label: "Continuous monitoring",
      position: "bottom-right",
    },
  ],
},

  experienceIntro: {
    eyebrow: "EXPERIENCE & EXPERTISE",
    title: "From research question to running system.",
    copy:
      "I work across the full AI lifecycle: data and experiments, fine-tuning and retrieval, evaluation and security, then deployment on real compute infrastructure.",
  },

  experience: [
    {
      dates: "JUN 2026 — PRESENT",
      role: "HPC Research Intern · ML for Systems",
      organization: "Research Computing · Texas A&M University–San Antonio",
      summary:
        "Researching ML-driven optimization for heterogeneous GPU/CPU clusters, including resource allocation, scheduling, and workload prediction.",
      highlights: [
        "50+ source AI-for-HPC survey",
        "Throughput and scalability benchmarking",
        "Research-team presentations",
      ],
    },
    {
      dates: "APR 2025 — APR 2026",
      role: "Research Assistant · LLM Systems, Agentic AI & Evaluation",
      organization: "Texas A&M University–San Antonio",
      summary:
        "Designed and deployed a multi-agent HPC assistant with RAG, stateful memory, domain fine-tuning, FastAPI, and GPU infrastructure.",
      highlights: [
        "4,000+ instruction pairs",
        "80+ HPC knowledge sources",
        "243 evaluation tasks",
      ],
    },
    {
      dates: "NOV 2025 — PRESENT",
      role: "Graduate Assistant",
      organization: "College of Graduate Studies · Texas A&M University–San Antonio",
      summary:
        "Provide institutional support and clear cross-department stakeholder communication alongside full-time research and coursework.",
      highlights: [
        "Cross-functional coordination",
        "Graduate student support",
        "Concurrent research delivery",
      ],
    },
    {
      dates: "JUN 2023 — AUG 2023",
      role: "iOS Mobile Application Developer Intern",
      organization: "Pharos Solutions · Alexandria, Egypt",
      summary:
        "Built and shipped educational iOS features in Swift across development, debugging, testing, and release workflows.",
      highlights: ["Production codebase", "Full SDLC participation", "Swift / iOS"],
    },
  ],

  expertise: [
    { title: "Agentic AI", detail: "Multi-agent orchestration · tool calling · memory" },
    { title: "LLM systems", detail: "RAG · QLoRA · PEFT · Transformers" },
    { title: "Evaluation", detail: "BERTScore · ROUGE-L · reproducibility" },
    { title: "Infrastructure", detail: "Vertex AI · Azure · SLURM · CUDA" },
    { title: "AI security", detail: "OWASP LLM Top 10 · adversarial testing" },
  ],

  education: [
    {
      degree: "MS Computer Science · 4.0 GPA",
      school: "Texas A&M University–San Antonio · Expected Aug 2026",
    },
    {
      degree: "BSc Computer & Communication Engineering",
      school: "Alexandria University · 2024",
    },
  ],

  projectsIntro: {
    eyebrow: "PROJECTS & PUBLICATIONS",
    title: "Systems you can inspect—not just read about.",
    copy:
      "Every featured project pairs a research contribution with an interactive walkthrough of its system behavior, metrics, or evaluation logic.",
  },

  projects: [
    {
      id: "hpc",
      category: "AGENTIC AI · RAG · HPC",
      title: "HPC-LLM Support Assistant",
      summary:
        "A multi-agent assistant that coordinates retrieval, generation, and documentation-crawling agents, then serves grounded answers through FastAPI on A100 infrastructure.",
      impact: ["80+ centers", "4K+ training pairs", "Qwen2.5-Coder-7B"],
      stack: ["QLoRA", "ChromaDB", "BGE-large", "FastAPI"],
      demoLabel: "Test the demo",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: "security",
      category: "AI SECURITY · PUBLISHED RESEARCH",
      title: "Llama Security Benchmark",
      summary:
        "A reproducible evaluation of five base Llama and five Llama Guard variants across all OWASP Top 10 risks, including latency and VRAM trade-offs.",
      impact: ["100 attacks", "10 models", "76% best detection"],
      stack: ["OWASP", "A30 GPU", "Adversarial prompts", "Python"],
      demoLabel: "Explore results",
      liveUrl: "",
      githubUrl: "https://github.com/noureen207/LLAMA-OWASP-SEC",
    },
    {
      id: "evaluation",
      category: "MODEL EVALUATION · VERTEX AI",
      title: "LLM/SLM Evaluation Workbench",
      summary:
        "A pre-production benchmark system measuring code-generation quality, execution time, memory use, and cross-seed reproducibility before deployment.",
      impact: ["243 tasks", "Cross-seed runs", "Failure-mode analysis"],
      stack: ["Vertex AI", "Python", "ROUGE-L", "BERTScore"],
      demoLabel: "Test the demo",
      liveUrl: "",
      githubUrl: "",
    },
  ],

  publications: [
    {
      title: "Benchmarking LLAMA Model Security Against OWASP Top 10 For LLM Applications",
      authors: "N. Shahin, I. Alsmadi",
      venue: "IEEE / arXiv · 2026",
      url: "https://arxiv.org/abs/2601.19970",
    },
    {
      title: "HPC-LLM: Practical Domain Adaptation and Retrieval-Augmented Generation for HPC Support",
      authors: "N. Shahin, I. Alsmadi",
      venue: "arXiv preprint · 2026",
      url: "",
    },
    {
      title: "Llama Model Security: From OWASP Top 10 Benchmarking to Encoding-Based Attacks",
      authors: "N. Shahin, I. Alsmadi",
      venue: "arXiv preprint · 2026",
      url: "",
    },
  ],

  visualsIntro: {
    eyebrow: "POSTERS & VISUALIZATION",
    title: "Making complex systems legible.",
    copy:
      "I translate research architectures, evaluation trade-offs, and experimental findings into visual stories that technical and nontechnical audiences can act on.",
  },

  conferences: [
    { name: "NAIRR Pilot Conference", detail: "NAIRR Travel Grant · 2026" },
    { name: "KNIT 12 Conference", detail: "FABRIC Travel Grant · 2026" },
    { name: "PEARC26", detail: "BRIDGE Travel Grant · 2026" },
    { name: "GMIS Conference", detail: "CAHSI Travel Grant · 2025" },
  ],

  testimonialsIntro: {
    eyebrow: "TESTIMONIALS & COLLABORATION",
    title: "Strong systems are built by strong teams.",
    copy:
      "My work style centers on clear communication, reproducible decisions, and making technical depth useful to the people around me.",
  },

  workStyle: [
    {
      title: "Clear communicator",
      copy:
        "I turn dense technical findings into decisions that faculty, researchers, and cross-department stakeholders can use.",
    },
    {
      title: "Rigorous collaborator",
      copy:
        "I contribute to peer code reviews and experiment-design reviews with careful documentation and reproducible evidence.",
    },
    {
      title: "End-to-end owner",
      copy:
        "I stay with a system from data preparation and model work through evaluation, deployment, and user-facing delivery.",
    },
  ],

  /*
    Replace the empty array with real quotes in this format:
    { quote: "Exact quote", name: "Person Name", role: "Title · Company" }
  */
  testimonials: [],

  connectIntro: {
    eyebrow: "CV & CONTACT",
    title: "Let’s build something useful.",
    copy:
      "I’m interested in AI engineering and research roles where model quality, system reliability, and measurable real-world impact all matter.",
  },
};
