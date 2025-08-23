import React from "react";
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

const skills = {
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
} as const;

const Skills: React.FC = () => {
  return (
 
      <div className=" w-full p-2">
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
        <div className="mt-6 grid gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="bg-gray-800/60 rounded-2xl p-4 md:p-6 border border-white/10">
              <h3 className="font-semibold text-lg capitalize">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((s: any) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-sm"
                  >
                    {s.icon && <span aria-hidden>{s.icon}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Skills;
