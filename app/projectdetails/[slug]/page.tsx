import { notFound } from "next/navigation";
import { projects } from "@/data/project";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}


export default async function ProjectPage({ params }: ProjectPageProps) {
   const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">

      {/* Title on Top */}
      <h1 className="text-4xl font-bold">{project.title}</h1>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left Column: Media */}
       <div className="md:w-1/2 flex flex-col gap-4">
  {/* Image */}
  {project.image && (
  <img
    src= {`/${project.image}`}  // <-- note the leading slash
    alt={project.title}
    className="w-full h-100 object-fit rounded-2xl"
  />

)}

  {/* Videos */}
  {project.videos && project.videos.length > 0 && (
    <div className="space-y-4">
      {project.videos.map((v, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow">
          <video controls className="w-full h-64 object-cover rounded-lg">
            <source src={v.src} type="video/mp4" />
          </video>
          <div className="p-2 text-center text-gray-500 font-medium">{v.title}</div>
        </div>
      ))}
    </div>
  )}
</div>

        {/* Right Column: Text */}
        <div className="md:w-1/2 flex flex-col gap-6">

          {/* Description */}
          <p className="text-lg text-text-primary">{project.about}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
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
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-200 hover:text-black"
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

      </div>
    </div>
  );
}
