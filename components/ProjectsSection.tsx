'use client';

import Image from 'next/image';
import { projects } from '@/data/siteData';
import { useSectionReveal } from '@/hooks/useSectionReveal';
import { useRef } from 'react';

export const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { y: 50, duration: 1 });

  return (
    <section id="projects" ref={ref} className="section-shell">
      <h2 data-reveal className="section-title">
        Projects
      </h2>
      <p data-reveal className="section-subtitle">
        Featured builds with measurable impact and polished interactions.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            data-reveal
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="space-y-4 p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a className="text-primary hover:underline" href={project.liveUrl}>
                  Live Demo
                </a>
                <a className="text-primary hover:underline" href={project.githubUrl}>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
