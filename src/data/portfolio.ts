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

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    tag?: string;
  }[];
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
    category: "Programming Languages",
    description: "Core algorithmic foundations and type-safe systems",
    skills: [
      { name: "Java", description: "OOP, Concurrency, Spring Framework & Enterprise Systems" },
      { name: "Python", description: "AI/ML, OpenCV, Data Processing & Microservices" },
      { name: "C++", description: "Algorithms, Memory Mechanics & High-Performance Computing" },
      { name: "JavaScript", description: "Modern ES6+, Asynchronous Patterns & Web APIs" },
      { name: "TypeScript", description: "Strict Typing, Interfaces & Production Architecture" },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "High-performance, cinematic, interactive user interfaces",
    skills: [
      { name: "React.js", description: "Hooks, State Architecture, Performance Optimization" },
      { name: "Next.js", description: "SSR, SSG, Routing & Edge Computing" },
      { name: "Tailwind CSS", description: "Design Systems, Utility Architecture & Responsive UI" },
    ],
  },
  {
    category: "Backend Architecture",
    description: "Robust, scalable, and secure distributed services",
    skills: [
      { name: "Node.js", description: "Event-driven runtime & asynchronous execution" },
      { name: "Express.js", description: "RESTful API services & middleware pipelines" },
      { name: "Spring Boot", description: "Enterprise services, dependency injection & REST APIs" },
      { name: "Flask", description: "Lightweight Python microservices & AI inference endpoints" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Reliable relational models and flexible document schemas",
    skills: [
      { name: "MySQL", description: "Relational queries, indexing & ACID compliance" },
      { name: "PostgreSQL", description: "Advanced joins, JSONB storage & query tuning" },
      { name: "MongoDB", description: "Document-oriented storage & flexible schemas" },
    ],
  },
  {
    category: "AI & Computer Vision",
    description: "Intelligent perception, model inference, and edge automation",
    skills: [
      { name: "Gemini API", description: "Multimodal vision & language reasoning integration" },
      { name: "YOLOv8", description: "Real-time object detection & bounding-box inference" },
      { name: "OpenCV", description: "Image processing, contour analysis & video pipeline filtering" },
    ],
  },
  {
    category: "Developer Tools & Systems",
    description: "Version control, containerized workflows, and environments",
    skills: [
      { name: "Git", description: "Branching strategies, history rewriting & code versioning" },
      { name: "GitHub", description: "Collaborative workflows, CI/CD actions & open source" },
      { name: "VS Code", description: "Primary IDE with advanced debugging & profiling" },
      { name: "Linux", description: "Shell scripting, process management & server deployment" },
      { name: "Selenium", description: "Browser automation, E2E functional testing & scraping" },
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
