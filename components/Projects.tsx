import React from "react";
import { IconBrandGithub, IconPlayerPlay, IconChevronCompactRight } from "@tabler/icons-react";
import Link from "next/link";
import { projects } from "@/data/project";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";



const Projects: React.FC = () => {
  return (
    <section className="w-full p-2 md:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-primary-light text-3xl md:text-4xl font-bold">
          Some Of My Work
        </h2>
        <p className="text-gray-300 mt-2">
          A few projects showcasing my skills across web, mobile, and ML.
        </p>

        {/* Desktop grid */}
        <div className="mt-6 hidden md:grid grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="bg-surface shadow-md shadow-primary hover:bg-surface-hover rounded-2xl h-full flex flex-col"
            >
              <CardHeader className="p-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
              </CardHeader>

              <CardBody className="p-4 flex-1">
                <h3 className="font-bold text-xl text-text-heading">{p.title}</h3>
                <p className="text-base text-text-secondary mt-1">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((s) => (
                    <span
                      key={s}
                      className="text-sm bg-primary rounded-full px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="flex gap-2 items-center p-4 border-t border-gray-200 mt-auto">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:text-blue-500 font-bold"
                  >
                    <IconBrandGithub size={18} /> Code
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:text-green-400 font-bold"
                  >
                    <IconPlayerPlay size={18} /> Demo
                  </a>
                )}
                {p.slug && (
                  <Link
                    href={`/projectdetails/${p.slug}`}
                    className="text-sm hover:text-primary-focus font-bold flex items-center "
                  >
                    <IconChevronCompactRight size={18} /> Details
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}

          {/* "View all projects" link */}
          <Card className="rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-950 to-primary text-white h-full">
            <CardBody className="flex items-center justify-center">
              <a
                href="/projects"
                className="text-2xl font-semibold  hover:text-primary-focus hover:underline hover:underline-offset-4"
              >
                View all projects →
              </a>
            </CardBody>
          </Card>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mt-6 md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory px-1 pb-2">
          {projects.map((p) => (
            <Card
              key={p.title}
              isHoverable
              shadow="lg"
              className="snap-start shrink-0 w-72 min-h-[420px] flex flex-col bg-surface border border-primary rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
              </CardHeader>

              <CardBody className="p-4 flex-1">
                <h3 className="font-bold text-lg  text-text-heading">{p.title}</h3>
                <p className="text-sm text-secondary mt-1">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((s) => (
                    <span
                      key={s}
                      className="text-sm bg-primary rounded-full px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="flex gap-3 items-center p-4 border-t border-gray-200 mt-auto">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-500 font-bold"
                  >
                    <IconBrandGithub size={18} /> Code
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-green-400 font-bold"
                  >
                    <IconPlayerPlay size={18} /> Demo
                  </a>
                )}
                {p.slug && (
                  <Link
                    href={`/projectdetails/${p.slug}`}
                    className="text-sm text-primary-focus font-bold flex items-center "
                  >
                    <IconChevronCompactRight size={18} /> Details
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}





        </div>

        <div className=" md:hidden justify-end flex pt-4 p-2"> <Link
          href="/projects"
          className="text-xl text-text-heading font-bold flex items-center"
        >
          All Projects <IconChevronCompactRight size={18} />
        </Link></div>


      </div>
    </section>
  );
};

export default Projects;
