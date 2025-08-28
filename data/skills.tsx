import { SkillsByCategory } from "@/types/skills";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandReact,
  IconBrandDocker,
  IconBrandGit,
  IconBrandMongodb,
  IconBrandFigma,
  IconBrandAws,
  IconBrandBootstrap,
  IconBrandTailwind,
} from "@tabler/icons-react";


export const skills: SkillsByCategory = {
  languages: [
    { name: "Java" },
    { name: "JavaScript", icon: <IconBrandJavascript size={18} /> },
    { name: "TypeScript", icon: <IconBrandTypescript size={18} /> },
    { name: "Python", icon: <IconBrandPython size={18} /> },
    { name: "SQL" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "C++" },
  ],
  frameworks: [
    { name: "React", icon: <IconBrandReact size={18} /> },
    { name: "React Native", icon: <IconBrandReact size={18} /> },
    { name: "Node.js" },
    { name: "Express" },
    { name: "Spring Boot" },
    { name: "Tailwind", icon: <IconBrandTailwind size={18} /> },
    { name: "Bootstrap", icon: <IconBrandBootstrap size={18} /> },
  ],
  databases: [
    { name: "PostgreSQL" },
    { name: "MongoDB", icon: <IconBrandMongodb size={18} /> },
    { name: "Firebase" },
  ],
  testing: [
    { name: "JUnit" },
    { name: "Jest" },
    { name: "Cypress" },
    { name: "Mockito" },
  ],
  ml: [
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "Scikit‑learn" },
    { name: "Pandas" },
  ],
  tools: [
    { name: "Docker", icon: <IconBrandDocker size={18} /> },
    { name: "AWS (S3, EC2)", icon: <IconBrandAws size={18} /> },
    { name: "GitHub Actions" },
    { name: "VS Code" },
    { name: "Git", icon: <IconBrandGit size={18} /> },
    { name: "Postman" },
    { name: "JIRA" },
    { name: "Figma", icon: <IconBrandFigma size={18} /> },
    { name: "Android Studio" },
  ],
}