'use client';

import { useEffect, useState } from 'react';
import { Github, ExternalLink, Gamepad2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  imageUrl: string; 
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-lg overflow-hidden border border-secondary/30 bg-card/50 hover:border-primary/50 transition-all duration-300"
            >

              <div className="relative h-48 flex items-center justify-center bg-black">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>



              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-secondary/20">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
