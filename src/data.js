export const PROFILE = {
  name: "Dzaki Althalsyah",
  roles: [
    "Data Science Enthusiast",
    "Machine Learning Explorer",
    "Information Systems Student",
    "Business Intelligence Builder",
  ],
  tagline:
    "Turning raw data into decisions — one model, one dashboard, one insight at a time.",
  about:
    "I'm an Information Systems student at Universitas Brawijaya with a deep focus on Data Analysis, Machine Learning, and systems development. I've gained hands-on experience in information systems analysis and software development through a variety of practical projects. With strong analytical and team-collaboration skills, I'm ready to contribute actively to research, data-driven projects, and digital business solutions.",
  interests: [
    "Data Science",
    "Machine Learning",
    "Data Analytics",
    "Business Intelligence",
    "Cyber Security",
  ],
  email: "dz4ic7@gmail.com",
  phone: "+62 811-7818-801",
  location: "Malang, East Java, Indonesia",
  github: "https://github.com/dzakialthalsy/",
  linkedin: "https://www.linkedin.com/in/dzaki-althalsyah-27z/",
  cv: "https://drive.google.com/file/d/1crZOwjkvjmhcvB7J1nVuC-rXmRsEZTHH/view?usp=drive_link",
};

export const EXPERIENCE = [
  {
    org: "POROS FILKOM UB",
    role: "Vice Head of Human Resources & Security Division Staff",
    period: "2025 — 2026",
    desc: "Active member of POROS, an open-source community at FILKOM Universitas Brawijaya focused on Linux-based systems. As part of the Security Division, I contribute to activities that raise cyber-security awareness and sharpen technical skills — trainings, system testing, and security vulnerability research — while also helping lead the HR function.",
    tags: ["Cyber Security", "Linux", "Leadership", "Human Resources"],
  },
  {
    org: "BCC FILKOM UB",
    role: "Data Science Intern",
    period: "2025",
    desc: "Completed a one-month internship program in the Data Science division of Basic Computing Community. Built and submitted weekly project reports, then prepared and presented a final data-science project in front of a panel of judges in the last week.",
    tags: ["Data Science", "Machine Learning", "Presentation"],
  },
  {
    org: "COSMOS — POROS FILKOM UB",
    role: "Event Division Staff",
    period: "2025",
    desc: "Committee member of COSMOS 2025, an event introducing cyber-security fundamentals to students. Supported the execution of hands-on security workshops and a Capture The Flag (CTF) competition designed to train participants' analytical and problem-solving skills.",
    tags: ["Cyber Security", "CTF", "Event Management"],
  },
];

export const PROJECTS = [
  {
    title: "KBA — Telecom Customer Churn Analytics",
    year: "2026",
    category: "Business Intelligence",
    desc: "End-to-end business intelligence platform helping telecom companies monitor churn, segment customers, and prioritize retention. Built a Medallion (Bronze/Silver/Gold) data pipeline on DuckDB, served KPI tables to Metabase dashboards with role-based access, and integrated ML churn-risk scoring — all containerized with Docker. Covered project management, data engineering, analytics, and ML in a 4-person team.",
    tags: ["Python", "DuckDB", "PostgreSQL", "Docker", "Metabase", "FastAPI"],
    link: "https://github.com/dzakialthalsy/KBA-Telecommunication-Company-Churn-Analytics",
  },
  {
    title: "F1 Pit Next Lap Prediction",
    year: "2026",
    category: "Machine Learning",
    desc: "Classification model predicting whether a Formula 1 driver will pit on the next lap, using race strategy, tyre condition, position, lap time, and race progress. Full pipeline: cleaning, missing-value handling, outlier removal, encoding, scaling, and feature selection. Best model — LightGBM with 95.9% accuracy, 91.2% F1-score, and 98.8% AUC.",
    tags: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn"],
    link: "https://github.com/dzakialthalsy/Machine-Learning_F1-Pit-Next-Lap-Prediction",
  },
  {
    title: "Amazon Sales Predictor",
    year: "2026",
    category: "Machine Learning",
    desc: "Regression model predicting Amazon sales value from merged sales, product, stock, cost, and transaction datasets. Performed data merging, cleaning, outlier handling, feature standardization, and correlation analysis across 7 regression models. Random Forest with Bayesian Optimization achieved the best performance with R² = 0.873.",
    tags: ["Python", "Random Forest", "Bayesian Optimization", "Pandas"],
    link: "https://github.com/dzakialthalsy/amazon-sales-predictor",
  },
  {
    title: "Bank Customer Churn Prediction",
    year: "2025",
    category: "Data Science",
    desc: "Data-science project predicting which bank customers are likely to stop using the bank's services. Analyzed customer data to uncover the factors driving churn decisions, helping the bank understand customer behavior and design more effective retention strategies.",
    tags: ["Python", "Scikit-learn", "EDA", "Classification"],
    link: "https://github.com/dzakialthalsy/1-Rimba-Nevada-Dzaki-Althalsyah",
  },
  {
    title: "Heart Disease Dataset Exploration",
    year: "2026",
    category: "Data Analytics",
    desc: "Exploratory data analysis of a heart-disease dataset: demographic patterns, health-feature distributions, inter-variable correlations, and key risk factors. Built histograms, scatter plots, box plots, correlation heatmaps, pair plots, and a visual dashboard, plus a simple engineered risk score to flag at-risk patients.",
    tags: ["Python", "Matplotlib", "Seaborn", "EDA", "Visualization"],
    link: "https://github.com/dzakialthalsy/health-data-visualization-PSD",
  },
  {
    title: "Malicious URL Prediction",
    year: "2026",
    category: "ML × Security",
    desc: "Machine-learning project at the intersection of my two interests — data science and cyber security. Classifies URLs as benign or malicious based on engineered URL features, supporting safer browsing and threat detection.",
    tags: ["Python", "Classification", "Cyber Security", "Feature Engineering"],
    link: "https://github.com/dzakialthalsy/PSD_Malicious_URL_Prediction",
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "SQL", "Java", "PHP", "Dart", "JavaScript"],
  },
  {
    group: "Data Science & ML",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Random Forest",
      "Bayesian Optimization",
      "Feature Engineering",
    ],
  },
  {
    group: "Data Visualization & BI",
    items: [
      "Matplotlib",
      "Seaborn",
      "Metabase",
      "Dashboard Design",
      "Exploratory Data Analysis",
      "Microsoft Excel",
    ],
  },
  {
    group: "Data Engineering & Tools",
    items: [
      "DuckDB",
      "PostgreSQL",
      "NoSQL",
      "Docker",
      "FastAPI",
      "Git & GitHub",
      "Jupyter Notebook",
      "Linux",
    ],
  },
  {
    group: "Cyber Security",
    items: [
      "CTF (picoCTF)",
      "Vulnerability Research",
      "Cryptography Basics",
      "Buffer Overflow Basics",
    ],
  },
  {
    group: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Team Collaboration",
      "Project Management",
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
    kind: "Honor & Award",
    title: "Certificate of Appreciation — Security Vulnerability Discovery",
    issuer: "Universitas Pembangunan Nasional Veteran Jakarta",
    year: "May 2021",
    extra: "Penetration Testing",
    desc: "Awarded a Certificate of Appreciation for identifying security vulnerabilities through penetration testing on the university's main website — an early milestone in my cyber-security journey.",
  },
];

export const STATS = [
  { value: "6+", label: "Data projects shipped" },
  { value: "95.9%", label: "Best model accuracy (F1 pit prediction)" },
  { value: "0.873", label: "Best regression R² (Amazon sales)" },
  { value: "3", label: "Campus tech organizations" },
];
