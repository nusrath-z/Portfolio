"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"; // adjust import if needed
import { IconBrandGithub, IconPlayerPlay } from "@tabler/icons-react";
import { projects } from "@/data/project";

const categories = ["All", "Web", "ML and Data Analytics", "CS Fundamentals", "Networking"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-background min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-text-primary">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-1 font-medium text-primary hover:text-primary-focus">
            ← Back
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8 text-text-heading">
          My Projects
        </h1>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeCategory === cat
                    ? "bg-primary text-text-heading"
                    : "bg-surface text-text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden w-full max-w-xs">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-surface text-text-primary border border-input-border"
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
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <Card
                key={p.title}
                className="bg-surface shadow-md shadow-primary hover:bg-surface-hover rounded-2xl h-full flex flex-col"
              >
                <CardHeader className="p-0">
                  <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                </CardHeader>

                <CardBody className="p-4 flex-1">
                  <h3 className="font-bold text-xl text-text-heading">{p.title}</h3>
                  <p className="text-base text-text-secondary mt-1">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((s) => (
                      <span key={s} className="text-sm bg-primary rounded-full px-2 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </CardBody>

                <CardFooter className="flex gap-4 items-center p-4 border-t border-gray-200 mt-auto">
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
                      className="text-sm hover:text-primary-focus font-bold flex items-center gap-1"
                    >
                      See Details →
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary">
            No projects found for this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;
