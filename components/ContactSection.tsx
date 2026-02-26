'use client';

import { useRef } from 'react';
import { useSectionReveal } from '@/hooks/useSectionReveal';

export const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);

  return (
    <section id="contact" ref={ref} className="section-shell pb-24">
      <div
        data-reveal
        className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-10 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Want to collaborate or chat about a role? Let&apos;s connect.</p>
        <a
          href="mailto:hello@yourdomain.dev"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
        >
          hello@yourdomain.dev
        </a>
      </div>
    </section>
  );
};
