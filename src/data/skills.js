import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
  FiTool,
  FiShare2,
  FiBookOpen,
} from "react-icons/fi";

export const skillGroups = [
  {
    title: "Languages",
    icon: FiCode,
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: FiLayout,
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FiServer,
    items: ["Django", "Django REST Framework", "REST API Design"],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    items: ["PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "AI Integration",
    icon: FiCpu,
    items: ["Groq API", "LLM Integration", "Prompt Engineering"],
  },
  {
    title: "Tools & Deployment",
    icon: FiTool,
    items: ["Git", "GitHub", "Vite", "Figma", "Vercel", "PythonAnywhere", "Linux"],
  },
  {
    title: "Computer Science",
    icon: FiShare2,
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "Data Modeling",
      "Competitive Programming",
    ],
  },
  {
    title: "Currently Learning",
    icon: FiBookOpen,
    learning: true,
    items: ["Docker", "Pytest", "GitHub Actions", "AI Agents"],
  },
];
