import { skills } from "@/data/skills";
import React from "react";

const Skills: React.FC = () => {
  return (
 
      <div className=" w-full p-2">
        <h2 className="text-primary-light text-3xl md:text-4xl font-bold">My Skills</h2>
        <div className="mt-6 grid gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="bg-surface rounded-2xl p-4 md:p-6 shadow shadow-primary hover:bg-surface-hover hover:shadow-md hover:shadow-primary hover:scale-[1.02]">
              <h3 className="font-semibold text-xl capitalize">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1 rounded-full bg-gray-600 px-3 py-1 text-md"
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
