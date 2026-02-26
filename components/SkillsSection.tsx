'use client';

import { skillCategories } from '@/data/siteData';
import { useSectionReveal } from '@/hooks/useSectionReveal';
import { useRef } from 'react';

export const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { stagger: 0.15 });

  return (
    <section id="skills" ref={ref} className="section-shell">
      <h2 data-reveal className="section-title">
        Skills
      </h2>
      <p data-reveal className="section-subtitle">
        Proven experience across UI architecture, APIs, testing, and deployment workflows.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            data-reveal
            key={category.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 font-semibold">{category.title}</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {category.items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
