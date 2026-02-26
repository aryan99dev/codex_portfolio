'use client';

import { useRef } from 'react';
import { useSectionReveal } from '@/hooks/useSectionReveal';

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);

  return (
    <section id="about" ref={ref} className="section-shell">
      <h2 data-reveal className="section-title">
        About
      </h2>
      <p data-reveal className="section-subtitle">
        I&apos;m a product-minded developer with 6+ years of experience shipping high-converting interfaces for startups
        and enterprise teams. My focus is scalable front-end architecture, design systems, and delightful UX motion.
      </p>
    </section>
  );
};
