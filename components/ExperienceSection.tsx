'use client';

import { timeline } from '@/data/siteData';
import { useSectionReveal } from '@/hooks/useSectionReveal';
import { useRef } from 'react';

export const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { y: 60 });

  return (
    <section id="experience" ref={ref} className="section-shell">
      <h2 data-reveal className="section-title">
        Experience & Education
      </h2>
      <div className="relative mt-12 space-y-10 border-l border-slate-300 pl-7 dark:border-slate-700">
        {timeline.map((item) => (
          <article key={item.title} data-reveal className="relative">
            <span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-primary">{item.organization}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
