import { notFound } from "next/navigation";
import { Project, projects } from "@/data/project";



interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className=" max-w-5xl mx-auto p-6 space-y-8">


      {/* Title & Description */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg py-5">{project.about}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 justify-center">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
{/* Videos */}
{project.videos && project.videos.length > 0 && (
  <div className="flex flex-wrap justify-center gap-4">
    {project.videos.map((v, i) => (
      <div key={i} className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow">
        <video controls className="w-full h-56 object-cover">
          <source src={v.src} type="video/mp4" />
        </video>
        <div className="p-3 text-center text-gray-300 font-medium">{v.title}</div>
      </div>
    ))}
  </div>
)}

      {/* Links */}
      <div className="flex justify-center gap-4">
        {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-200 hover:text-black"
        >
          GitHub

        </a>
        )}

        {project.drive && (
        <a
          href={project.drive}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-200  hover:text-black"
        >
          Drive

        </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-200"
          >
            Live
          </a>
        )}
      </div>

      {/* Contributions */}
      <div className="bg-gray-100 text-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-3">My Contributions</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.contributions.map((c, i) => (
            <li key={i} className="text-gray-700">{c}</li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="bg-gray-100 text-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-3">Key Achievements</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.achievements.map((a, i) => (
            <li key={i} className="text-gray-700">{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
