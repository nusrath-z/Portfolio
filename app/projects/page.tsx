"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/project";

const categories = ["All", "Web", "ML", "CS Fundamentals", "Networking", "Data Analytics"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative bg-black-100 min-h-screen w-full p-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-cyan-400 hover:text-cyan-500 font-medium flex items-center gap-1 transition"
          >
            ← Back
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

        {/* Filter Buttons */}
        <div className="mb-12 flex justify-center">
          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={index}
                className="group bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover h-40 w-full"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="font-bold text-lg">{project.title}</h2>
                  <p className="text-sm text-gray-700 mt-1">{project.summary}</p>

                  {/* Tech stack pills */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((p, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 rounded-full px-2 py-1"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-4 items-center">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                      >
                        Code →
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:underline"
                      >
                        Live Demo →
                      </Link>
                    )}
               

                     {project.slug && (
                  <Link href={`/projectdetails/${project.slug}`} className="text-sm hover:text-purple-400 flex items-center gap-1">
  See Details →
</Link>
                  )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">
            No projects found for this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;
