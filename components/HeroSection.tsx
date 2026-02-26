'use client';

import { useRef } from 'react';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';

const headline = ['Designing', 'animated', 'digital', 'experiences'];

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  useHeroAnimation(heroRef);

  return (
    <section id="home" ref={heroRef} className="section-shell relative min-h-[85vh] py-24">
      <div className="hero-bg grid-bg absolute inset-0 -z-10 rounded-3xl opacity-70" />
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-primary">Senior Front-End Developer</p>
      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        {headline.map((word) => (
          <span key={word} className="mr-4 inline-block overflow-hidden align-top">
            <span className="hero-word inline-block">{word}</span>
          </span>
        ))}
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        I build performant web products that blend clean architecture with meaningful motion.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          className="hero-action rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
          href="#projects"
        >
          Explore Projects
        </a>
        <a
          className="hero-action rounded-full border border-slate-300 px-6 py-3 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700"
          href="#contact"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
};
