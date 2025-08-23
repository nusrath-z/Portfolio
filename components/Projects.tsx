import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { projects } from "@/data/project";

const Projects: React.FC = () => {
  return (
    <section className="w-full p-2 md:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Here’s Some Of My Work</h2>
        <p className="text-gray-300 mt-2">
          A few projects showcasing my skills across web, mobile, and ML.
        </p>

        {/* Desktop grid */}
        <div className="mt-6 hidden md:grid grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((s) => (
                    <span key={s} className="text-xs bg-gray-200 rounded-full px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 items-center">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    <IconBrandGithub size={18} /> Code
                  </a>
                  {p.slug && (
                  <Link href={`/projectdetails/${p.slug}`} className="text-sm hover:text-purple-400 flex items-center gap-1">
  See Details →
</Link>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* "View all projects" link in last column */}
          <div className="flex items-center justify-center bg-gray-100 text-black rounded-2xl shadow-lg hover:bg-gray-200 transition-transform">
            <a
              href="/projects"
              className="text-lg font-semibold underline underline-offset-4 hover:no-underline"
            >
              View all projects →
            </a>
          </div>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mt-6 md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory px-1 pb-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="snap-start shrink-0 w-72 bg-white text-black rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((s) => (
                    <span key={s} className="text-xs bg-gray-200 rounded-full px-2 py-1">
                      {s}
                    </span>
                  ))}

             

                  
                </div>
                
                <div className="mt-4 flex gap-4 items-center">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    <IconBrandGithub size={18} /> Code
                  </a>
                  {p.slug && (
                  <Link href={`/projectdetails/${p.slug}`} className="text-sm hover:text-purple-400 flex items-center gap-1">
  See Details →
</Link>
                  )}

                  
                </div>

                
              </div>
              
            </article>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default Projects;
