"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">What I've built</p>
          <h2 className="font-serif text-4xl font-bold text-navy">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Type badge */}
              <span className="text-xs font-semibold text-gold-dark bg-gold-light px-3 py-1 rounded-full">
                {project.type}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-navy mt-4 mb-2">
                {project.title}
              </h3>

              {/* Problem */}
              <p className="text-gray-500 text-sm mb-3">{project.problem}</p>

              {/* Outcome */}
              <p className="text-navy font-semibold text-sm mb-6">
                ↗ {project.outcome}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-navy border border-navy-light px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href={project.github} target="_blank" className="text-sm text-gray-500 hover:text-navy transition-colors">
                  GitHub →
                </a>
                <a href={project.demo} target="_blank" className="text-sm text-gray-500 hover:text-navy transition-colors">
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}