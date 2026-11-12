export const PROFILE = {
  name: "Dzaki Althalsyah",
  roles: [
    "AI Engineer Intern @ Pertamina",
    "Backend & AI Engineer",
    "Machine Learning Builder",
    "Information Systems Student",
  ],
  tagline:
    "Building software that removes manual work: AI-powered backends, ML models, and the APIs and apps that put them to use.",
  interests: [
    "AI Engineering",
    "Backend Development",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
  ],
  email: "dz4ic7@gmail.com",
  phone: "+62 811-7818-801",
  location: "Malang, East Java, Indonesia",
  github: "https://github.com/dzakialthalsy/",
  linkedin: "https://www.linkedin.com/in/dzaki-althalsyah-27z/",
  cv: "/CV_Dzaki_Althalsyah.pdf",
};

export const EXPERIENCE = [
  {
    org: "PT Pertamina Patra Niaga",
    role: "AI Engineer Intern · Pertamina Camp 2026",
    period: "Sep 2026 - Present",
    desc: "Designing the system architecture and building the backend of VASKO, an AI-powered contract validation platform. Built the Next.js / TypeScript backend on PostgreSQL (26 tables), integrated LLMs to read and check contract clauses, and added a local OCR service for scanned documents. Cut validation of a 268-page scanned package from 527 s to 292-335 s (up to 45% faster) while keeping results identical across reruns.",
    tags: ["Next.js", "TypeScript", "LLM", "OCR", "PostgreSQL"],
  },
  {
    org: "Information Systems Laboratory, FILKOM UB",
    role: "Database Administration Lab Assistant & Lab Member",
    period: "2026 - Present",
    desc: "Teaching assistant for the Database Administration practicum: guiding students through lab sessions, explaining the material, and reviewing and grading their assignments.",
    tags: ["Database", "SQL", "Teaching"],
  },
  {
    org: "POROS FILKOM UB",
    role: "Vice Chair of Human Resources & Cyber Security Staff",
    period: "2025 - Present",
    desc: "POROS is the open-source and Linux community of FILKOM Universitas Brawijaya. I help lead the HR function (member development, cadre training, and cross-division coordination) and, in the Cyber Security division, work on vulnerability research, Linux system testing, and security trainings.",
    tags: ["Leadership", "Cyber Security", "Linux", "Human Resources"],
  },
  {
    org: "COSMOS 2025 · POROS FILKOM UB",
    role: "Event Division Staff (Person in Charge)",
    period: "2025",
    desc: "Person in charge for the event division of COSMOS 2025, an event introducing cyber-security fundamentals to students. Ran hands-on security workshops and a Capture The Flag (CTF) competition designed to train participants' analytical and problem-solving skills.",
    tags: ["Cyber Security", "CTF", "Event Management"],
  },
  {
    org: "BCC FILKOM UB",
    role: "Data Science Intern",
    period: "2025",
    desc: "Completed a one-month internship in the Data Science division of Basic Computing Community. Built and submitted weekly project reports, then presented a final data-science project in front of a panel of judges.",
    tags: ["Data Science", "Machine Learning", "Presentation"],
  },
];

export const PROJECTS = [
  {
    title: "VASKO · AI Contract Validation",
    year: "2026",
    category: "AI Engineering",
    desc: "Internship project at PT Pertamina Patra Niaga. A web platform that validates procurement contract packages (hundreds of pages, many of them scans). I own the backend and AI integration: a 26-table PostgreSQL schema via Prisma, a local OCR service (PP-OCR on ONNX Runtime) that adds a hidden text layer to scans, LLM-based clause reading with source quotes and confidence levels, and answer caching so the same document always gets the same result. Parallel OCR and AI reading brought a 268-page package from 527 s down to 292-335 s, and the stack was load-tested in Docker under the same 4-core / 4 GB limits as the production VPS.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Python", "OCR", "LLM API", "Docker"],
    link: null,
    note: "Internal project · confidential",
  },
  {
    title: "SMS Guard",
    year: "2026",
    category: "Mobile × ML",
    desc: "Android app that checks every link in incoming SMS in real time and warns users before they open a scam (smishing) link. A native Java BroadcastReceiver catches messages even when the app is closed; links are scored by a LightGBM model trained on 38 lexical URL features (Shannon entropy, domain structure, path depth, TLD validity) and served through a FastAPI REST API that also supports batch and CSV/Excel checks. Only the URL is sent to the model, never the message text.",
    tags: ["React Native", "Java", "FastAPI", "LightGBM", "Feature Engineering"],
    link: "https://github.com/dzakialthalsy/SMSGuard",
  },
  {
    title: "F1 Pit Next Lap Prediction",
    year: "2026",
    category: "Machine Learning",
    desc: "Classification model predicting whether a Formula 1 driver will pit on the next lap from race strategy, tyre condition, position, lap time, and race progress. Full pipeline: cleaning, missing-value handling, outlier removal, encoding, scaling, and feature selection, comparing LightGBM, XGBoost, and CatBoost with a tuned decision threshold. Best model: LightGBM with 95.9% accuracy, 91.2% F1-score, and 98.8% AUC, deployed as a React + FastAPI web app.",
    tags: ["Python", "LightGBM", "XGBoost", "CatBoost", "React", "FastAPI"],
    link: "https://github.com/dzakialthalsy/Machine-Learning_F1-Pit-Next-Lap-Prediction",
  },
  {
    title: "AutoBuilder",
    year: "2026",
    category: "Multi-agent AI",
    desc: "Multi-agent system that turns a single theme into a working digital product (web app, CLI, browser extension, or API). Agents run a Plan, Scaffold, Build, Review, Deploy, Finalize loop on their own and pause at each milestone for human approval, with an independent critic in the review stage and a web dashboard for real-time monitoring. Supports three input modes: a specific idea, a broad theme, or trend discovery.",
    tags: ["Python", "Claude Agent SDK", "Multi-agent", "Automation"],
    link: "https://github.com/dzakialthalsy/auto-builder-agent",
  },
  {
    title: "DepShield",
    year: "2026",
    category: "Security Tooling",
    desc: "Supply-chain security CLI that inspects npm and pip dependency manifests before install, since most damage from a malicious package happens in install scripts. Detects typosquatted names (Levenshtein distance plus known patterns), known malware, and published CVEs via OSV.dev and the npm registry, and reports as a terminal table, JSON, or SARIF for CI code scanning.",
    tags: ["Node.js", "OSV.dev", "SARIF", "CLI", "Security"],
    link: "https://github.com/dzakialthalsy/DepShield",
  },
  {
    title: "KBA · Telecom Customer Churn Analytics",
    year: "2026",
    category: "Business Intelligence",
    desc: "End-to-end business intelligence platform helping telecom companies monitor churn, segment customers, and prioritize retention. Built a Medallion (Bronze/Silver/Gold) data pipeline on DuckDB, served KPI tables to Metabase dashboards with role-based access, and integrated ML churn-risk scoring, all containerized with Docker. Led the 4-person team as project manager.",
    tags: ["Python", "DuckDB", "PostgreSQL", "Docker", "Metabase", "FastAPI"],
    link: "https://github.com/dzakialthalsy/KBA-Telecommunication-Company-Churn-Analytics",
  },
  {
    title: "depgraph · Dependency Graph",
    year: "2026",
    category: "Developer Tools",
    desc: "Interactive npm dependency graph for enterprise architecture analysis. Import a real package-lock.json, pan and zoom an auto-laid-out graph, filter packages by healthy / outdated / vulnerable and prod / dev, and spot circular dependencies, which are detected with DFS and highlighted in red.",
    tags: ["React 19", "Vite", "React Flow", "Dagre", "Tailwind CSS"],
    link: "https://github.com/dzakialthalsy/EA-System-Dependency-Graph",
  },
  {
    title: "Amazon Sales Predictor",
    year: "2026",
    category: "Machine Learning",
    desc: "Regression model predicting Amazon sales value from merged sales, product, stock, cost, and transaction datasets. Performed data merging, cleaning, outlier handling, feature standardization, and correlation analysis across 7 regression models. Random Forest with Bayesian Optimization achieved the best performance with R² = 0.873.",
    tags: ["Python", "Random Forest", "Bayesian Optimization", "Pandas"],
    link: "https://github.com/dzakialthalsy/amazon-sales-predictor",
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "Kotlin", "PHP", "Dart"],
  },
  {
    group: "Backend & Web",
    items: [
      "Next.js",
      "React",
      "FastAPI",
      "Node.js",
      "Prisma",
      "Laravel",
      "REST API",
      "Tailwind CSS",
    ],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "LLM Integration",
      "OCR (PaddleOCR)",
      "Multi-agent Systems",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Pandas",
      "Feature Engineering",
    ],
  },
  {
    group: "Mobile",
    items: ["React Native", "Kotlin", "Jetpack Compose", "Flutter", "Android (Java)"],
  },
  {
    group: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "DuckDB",
      "NoSQL",
      "Docker",
      "Git & GitHub",
      "Linux",
      "Metabase",
    ],
  },
  {
    group: "Cyber Security",
    items: [
      "Penetration Testing",
      "Vulnerability Research",
      "Supply-chain Security",
      "CTF (picoCTF)",
    ],
  },
  {
    group: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Team Collaboration",
      "Project Management",
      "Teaching",
      "Public Speaking",
      "Leadership",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    kind: "License & Certification",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "Feb 2026",
    extra: "Expires Feb 2029",
    desc: "Completed Dicoding's machine-learning fundamentals certification, covering supervised & unsupervised learning, model evaluation, and building ML workflows in Python.",
  },
  {
    kind: "License & Certification",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2026",
    extra: "AI Fundamentals",
    desc: "Covered the scope of AI, how AI, machine learning, and deep learning relate, neural network basics, and the role of data in building AI systems.",
  },
  {
    kind: "License & Certification",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    year: "2025",
    extra: "Data Visualization",
    desc: "Learned the fundamentals of data visualization: choosing the right chart, designing clear visuals, and telling a story with data.",
  },
  {
    kind: "Honor & Award",
    title: "Certificate of Appreciation · Security Vulnerability Discovery",
    issuer: "Universitas Pembangunan Nasional Veteran Jakarta",
    year: "May 2021",
    extra: "Penetration Testing",
    desc: "Awarded a Certificate of Appreciation for identifying security vulnerabilities through penetration testing on the university's main website, an early milestone in my cyber-security journey.",
  },
];

export const STATS = [
  { value: "45%", label: "Faster contract validation (Pertamina internship)" },
  { value: "95.9%", label: "Best model accuracy (F1 pit prediction)" },
  { value: "10+", label: "Software, ML & security projects shipped" },
  { value: "4", label: "Campus orgs, labs & industry teams" },
];
