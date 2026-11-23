export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  category: string;
  visualDirection: string;
  accentColor: string;
  githubUrl?: string;
  demoUrl?: string;
  isFlagship?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  type: string;
  location?: string;
  responsibilities: string[];
}

export interface Achievement {
  number: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
  tag: string;
}

export interface Skill {
  name: string;
  description: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  filterLabel: string;
  description: string;
  skills: Skill[];
}

export const PERSONAL_INFO = {
  name: "SRIHARI S",
  tagline: "FULL-STACK DEVELOPER",
  roleSubhead: "Full-Stack Developer · Software Developer · AI Enthusiast",
  heroDescription:
    "Building full-stack applications and AI-powered systems that turn real-world problems into practical solutions.",
  aboutText:
    "I'm a Computer Science and Engineering student passionate about building impactful digital solutions through software development, data analysis, software testing, and AI-driven technologies. I enjoy transforming ideas into practical applications, developing full-stack systems, analyzing data to uncover insights, and testing software to improve functionality and reliability. My interests span application development, intelligent systems, computer vision, data-driven problem-solving, and software quality. I believe in building technology that is not only functional, but useful, reliable, scalable, and thoughtfully designed.",
  secondaryInfo: "JAVA · REACT · PYTHON · AI · SOFTWARE DEVELOPMENT",
  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "Sri Krishna College of Technology, Coimbatore",
    duration: "2024 — 2028",
    focus: "Exploring software engineering, full-stack development, intelligent systems, data-driven applications, and scalable computing.",
  },
  contacts: {
    email: "srihari23052007@gmail.com",
    phone: "+91 9092665483",
    phoneDisplay: "+91 90926 65483",
    github: "https://github.com/Srihari-Asus",
    linkedin: "https://www.linkedin.com/in/sriharis2305",
    instagram: "https://www.instagram.com/sri.hari_23/",
    resume: "https://drive.google.com/drive/folders/1vRS2qu01Uhd1qfa6FU7yWgZ0PGdWwETK?usp=sharing",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "agroplay",
    number: "01",
    title: "AgroPlay — AI for Context-Aware Farming",
    subtitle: "Intelligent Agricultural Ecosystem",
    description:
      "An AI-powered agricultural platform designed to support farmers through intelligent plant disease diagnosis, crop planning, market insights, and agricultural learning.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Gemini API"],
    features: [
      "Plant disease diagnosis",
      "Crop planning",
      "AI-powered agricultural recommendations",
      "Market intelligence",
      "Agricultural learning",
    ],
    highlights: [
      "Gemini Multimodal Vision API for leaf disease classification with actionable remediation guides",
      "Dynamic seasonal crop planning tailored to regional microclimate data and soil parameters",
      "Real-time market price trend monitoring and forecast engine for produce yields",
    ],
    category: "AI & Full-Stack Platform",
    visualDirection:
      "AI agriculture, crop intelligence, plant health analysis, smart farming dashboards, and agricultural technology.",
    accentColor: "#e50914",
    isFlagship: true,
    githubUrl: "https://github.com/Srihari-Asus",
  },
  {
    id: "avianguard",
    number: "02",
    title: "Avianguard — AI-Powered Adaptive Bird Repellent System",
    subtitle: "Autonomous Vision-Based Crop Guardian",
    description:
      "An intelligent crop protection system that detects bird activity through camera and motion sensor inputs and triggers adaptive acoustic deterrence.",
    technologies: ["Python", "OpenCV", "ESP32", "Raspberry Pi"],
    features: [
      "Bird activity detection",
      "Camera-based monitoring",
      "Motion sensor integration",
      "Automated deterrent activation",
      "Adaptive acoustic response",
    ],
    highlights: [
      "Computer vision contour and motion trajectory tracking on resource-constrained Raspberry Pi",
      "Dynamic frequency acoustic sound generation designed to eliminate pest auditory habituation",
      "Low-latency hardware telemetry linking PIR motion triggers with high-speed camera capture",
    ],
    category: "Computer Vision & Embedded IoT",
    visualDirection:
      "Computer vision, bird detection, intelligent camera monitoring, smart farming, crop protection, embedded systems.",
    accentColor: "#ff2a38",
    isFlagship: true,
    githubUrl: "https://github.com/Srihari-Asus",
  },
  {
    id: "nutridairy",
    number: "03",
    title: "NutriDairy (CattleFeedAI) — Feed Quality Assessment",
    subtitle: "AI-Driven Silage & Feed Screening",
    description:
      "An AI-based application designed to screen cattle feed and silage quality using computer vision, supported by backend services and monitoring capabilities.",
    technologies: ["React", "Spring Boot", "Spring Security", "Flask"],
    features: [
      "Feed and silage quality assessment",
      "Computer vision-based screening",
      "Backend service integration",
      "IoT-ready monitoring",
      "Sensor-related alert architecture",
    ],
    highlights: [
      "Image processing pipeline analyzing silage moisture, texture uniformity, and mold discoloration",
      "Robust Spring Boot enterprise backend with JWT-secured endpoints and audit trails",
      "Sensor-triggered notification system flagging feed spoilage before livestock exposure",
    ],
    category: "Agricultural AI & Enterprise Backend",
    visualDirection:
      "Smart dairy technology, cattle feed assessment, agricultural AI, quality inspection, sensor monitoring.",
    accentColor: "#e50914",
    isFlagship: true,
    githubUrl: "https://github.com/Srihari-Asus",
  },
  {
    id: "quiz-management",
    number: "04",
    title: "Quiz Management Application",
    subtitle: "Scalable Assessment & Evaluation Engine",
    description:
      "A backend application designed to manage quizzes, questions, and assessment operations using REST API architecture.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    features: [
      "Quiz management",
      "Question management",
      "API-based architecture",
      "Database integration",
      "Structured backend operations",
    ],
    highlights: [
      "Clean layered architecture (Controller, Service, Repository) with strict DTO validation",
      "Relational schema modeling complex quiz-question-category mappings with ACID compliance",
      "Comprehensive RESTful lifecycle supporting timed testing and automated score calculation",
    ],
    category: "Backend Architecture & Systems",
    visualDirection:
      "Backend architecture, assessment systems, clean admin interface, database-driven application.",
    accentColor: "#ff4444",
    isFlagship: false,
    githubUrl: "https://github.com/Srihari-Asus",
  },
  {
    id: "customer-behavior",
    number: "05",
    title: "Customer Shopping Behavior Analysis",
    subtitle: "Retail Intelligence & Predictive Analytics",
    description:
      "A data analytics project focused on understanding customer purchasing behavior, product preferences, demographics, and retail trends to generate business-oriented insights.",
    technologies: ["Python", "SQL", "Power BI", "Data Analytics"],
    features: [
      "Customer purchasing pattern analysis",
      "Product category analysis",
      "Customer preference insights",
      "Retail trend analysis",
      "Data-driven business insights",
    ],
    highlights: [
      "Exploratory data analysis identifying repeat transaction cycles and average basket size metrics",
      "Power BI executive dashboards conveying demographic segmentation and regional preferences",
      "Data-backed merchandising recommendations to improve retention and upsell conversions",
    ],
    category: "Data Analytics & Business Intelligence",
    visualDirection:
      "Retail analytics, data visualization, shopping trends, business intelligence dashboards, analytical storytelling.",
    accentColor: "#ff2a38",
    isFlagship: false,
    githubUrl: "https://github.com/Srihari-Asus",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming-languages",
    category: "PROGRAMMING LANGUAGES",
    filterLabel: "PROGRAMMING LANGUAGES",
    description: "Core programming foundations and type-safe systems",
    skills: [
      { name: "Java", description: "Object-oriented programming · Backend systems" },
      { name: "Python", description: "AI/ML · Computer vision · Automation" },
      { name: "C++", description: "Algorithms · Data structures · Performance" },
      { name: "JavaScript", description: "Core web scripting · Dynamic web apps" },
      { name: "TypeScript", description: "Static typing · Scalable architectures" },
    ],
  },
  {
    id: "frontend-engineering",
    category: "FRONTEND ENGINEERING",
    filterLabel: "FRONTEND ENGINEERING",
    description: "Responsive interfaces and modern frontend development",
    skills: [
      { name: "React.js", description: "Component-based interface development" },
      { name: "Next.js", description: "Modern full-stack React framework" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
    ],
  },
  {
    id: "backend-architecture",
    category: "BACKEND ARCHITECTURE",
    filterLabel: "BACKEND ARCHITECTURE",
    description: "Server-side systems, backend development and API integration",
    skills: [
      { name: "Node.js", description: "JavaScript runtime · Server-side development" },
      { name: "Express.js", description: "Minimalist web framework for Node.js" },
      { name: "Spring Boot", description: "Java backend development" },
      { name: "Flask", description: "Lightweight Python backend microservices" },
      { name: "REST APIs", description: "API architecture & endpoint integration" },
    ],
  },
  {
    id: "databases-storage",
    category: "DATABASES & STORAGE",
    filterLabel: "DATABASES & STORAGE",
    description: "Database design, data persistence and storage systems",
    skills: [
      { name: "MySQL", description: "Relational database management" },
      { name: "PostgreSQL", description: "Structured data · SQL" },
      { name: "MongoDB", description: "NoSQL document database" },
    ],
  },
  {
    id: "ai-computer-vision",
    category: "AI & COMPUTER VISION",
    filterLabel: "AI & COMPUTER VISION",
    description: "AI-powered applications, intelligent systems and computer vision",
    skills: [
      { name: "Gemini API", description: "LLM-powered application integration" },
      { name: "YOLOv8", description: "Real-time object detection" },
      { name: "OpenCV", description: "Image processing · Computer vision" },
    ],
  },
  {
    id: "data-analytics",
    category: "DATA ANALYTICS",
    filterLabel: "DATA ANALYTICS",
    description: "Data exploration, analytical insights and visualization",
    skills: [
      { name: "SQL", description: "Database querying & data modeling" },
      { name: "Power BI", description: "Data visualization · Business intelligence" },
      { name: "Python Data Analysis", description: "Data exploration · NumPy & Pandas" },
    ],
  },
  {
    id: "developer-tools",
    category: "DEVELOPER TOOLS",
    filterLabel: "DEVELOPER TOOLS",
    description: "Development workflow, source control and engineering tools",
    skills: [
      { name: "Git", description: "Version control" },
      { name: "GitHub", description: "Code collaboration and repositories" },
      { name: "VS Code", description: "Development environment" },
      { name: "Linux", description: "Operating systems · Development environment" },
    ],
  },
  {
    id: "testing-qa",
    category: "TESTING & QUALITY ASSURANCE",
    filterLabel: "TESTING & QA",
    description: "Application testing, software validation and quality assurance",
    skills: [
      { name: "Selenium", description: "Browser automation · Web testing" },
      { name: "Functional Testing", description: "Feature validation & regression" },
      { name: "API Testing", description: "Endpoint validation & status testing" },
      { name: "Debugging", description: "Issue diagnosis & defect remediation" },
      { name: "SDLC / STLC", description: "Software development & testing life cycles" },
    ],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Knite Infotech",
    duration: "June 2026 – July 2026",
    type: "Internship",
    location: "Coimbatore, India",
    responsibilities: [
      "Worked on frontend and backend application functionality.",
      "Tested application features and investigated issues.",
      "Verified REST API integrations.",
      "Worked with database-backed functionality.",
      "Implemented and refined software features.",
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    number: "01",
    title: "First Place — Dhruva '26 Hackathon",
    organization: "Karpagam College of Engineering",
    description: "Won 1st place among 70+ participating teams.",
    badge: "1ST PLACE WINNER",
    tag: "Competitive Hackathon",
  },
  {
    number: "02",
    title: "Smart India Hackathon",
    organization: "Ministry of Education & AICTE",
    description: "SIH Top 500 achievement.",
    badge: "TOP 500 NATIONWIDE",
    tag: "National Innovation Initiative",
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
