export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "agroplay",
    number: "01",
    title: "AgroPlay",
    category: "AI-Powered Smart Agriculture Platform",
    description:
      "AgroPlay is an intelligent agricultural platform designed to support farmers with personalized, context-aware agricultural assistance. It combines AI-powered plant disease diagnosis, crop planning, agricultural insights, market intelligence, and farming guidance into a unified digital platform.",
    highlights: [
      "AI-powered plant disease diagnosis",
      "Personalized agricultural guidance",
      "Crop planning and recommendations",
      "Agricultural market insights",
      "Farmer-focused learning and assistance",
      "AI-driven agricultural decision support",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini API",
    ],
    image: "/assets/Agroplay-project.png",
    githubUrl: "https://github.com/Srihari-Asus/Agroplay",
    liveUrl: "https://agroplay.vercel.app/",
  },
  {
    id: "avianguard",
    number: "02",
    title: "Avianguard",
    category: "AI-Powered Smart Hardware / Computer Vision",
    description:
      "Avianguard is an intelligent bird-repellent system designed to identify bird activity and respond using adaptive deterrence mechanisms. It combines computer vision, hardware components, and automated response systems to create a smarter bird management solution.",
    highlights: [
      "Bird activity detection",
      "Computer vision-based monitoring",
      "Smart hardware integration",
      "Adaptive deterrence mechanisms",
      "Automated response system",
      "Embedded system integration",
    ],
    technologies: ["Python", "OpenCV", "ESP32", "Raspberry Pi"],
    image: "/assets/Avianguard-project.png",
    githubUrl: "https://github.com/Srihari-Asus/Avianguard",
  },
  {
    id: "nutridairy",
    number: "03",
    title: "NutriDairy",
    category: "AI-Powered Dairy & Feed Quality Analysis",
    description:
      "NutriDairy is an intelligent dairy-focused platform designed to assist in evaluating cattle feed quality and supporting better feeding decisions. The system combines application development and AI-assisted analysis to provide useful insights into feed quality and nutritional suitability.",
    highlights: [
      "AI-assisted cattle feed quality assessment",
      "Feed and silage analysis",
      "Quality screening and insights",
      "Digital monitoring architecture",
      "Dairy-focused intelligent decision support",
    ],
    technologies: ["React", "Spring Boot", "Spring Security", "Flask"],
    image: "/assets/Nutridairy-project.png",
    githubUrl: "https://github.com/Srihari-Asus/CattleFeedAi",
    liveUrl: "https://cattlefeedai-frontend.onrender.com/",
  },
  {
    id: "quiz-management",
    number: "04",
    title: "Quiz Management System",
    category: "Full-Stack Backend Application",
    description:
      "A backend-focused quiz management application designed to manage quizzes, questions, and quiz-related data through structured REST APIs. It provides a foundation for quiz administration and data management using a Java-based backend architecture.",
    highlights: [
      "Quiz management",
      "Question management",
      "REST API architecture",
      "Database-backed application",
      "Structured backend development",
      "CRUD operations",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "REST API",
    ],
    image: "/assets/Quiz-Management-System-Project.png",
    githubUrl: "https://github.com/Srihari-Asus/Quiz-Management-Application",
  },
  {
    id: "customer-shopping-behavior",
    number: "05",
    title: "Customer Shopping Behavior Analysis",
    category: "Data Analytics & Business Intelligence",
    description:
      "A data analytics project focused on understanding customer purchasing behavior, shopping preferences, product trends, and the factors that influence purchasing decisions. The project transforms customer data into meaningful insights to support data-driven business decisions.",
    highlights: [
      "Customer purchasing pattern analysis",
      "Product category insights",
      "Customer preference analysis",
      "Shopping trend analysis",
      "Data-driven business insights",
      "Dashboard-based data visualization",
    ],
    technologies: ["Python", "SQL", "Power BI", "Data Analytics"],
    image: "/assets/Customer-Shopping-Behavior-Dashboard-project.png",
    githubUrl: "https://github.com/Srihari-Asus/Customer-trends-data-analysis",
  },
  {
    id: "vision-assistant",
    number: "06",
    title: "Vision Assistant",
    category: "AI / Computer Vision / Deep Learning",
    description:
      "Vision Assistant is a computer vision application designed to interpret visual information through intelligent image processing and object detection. It uses deep learning-based detection models to identify objects in images and visual inputs, providing real-time visual understanding capabilities.",
    highlights: [
      "Real-time object detection",
      "Image analysis",
      "Object identification",
      "Computer vision processing",
      "Deep learning-based detection",
      "YOLOv8 integration",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLOv8"],
    image: "/assets/Vision-assistant-project.png",
    githubUrl: "https://github.com/Srihari-Asus/VisionAssistant",
  },
];
