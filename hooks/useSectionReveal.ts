'use client';

import { RefObject, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

interface RevealOptions {
  y?: number;
  duration?: number;
  ease?: string;
  start?: string;
  stagger?: number;
}

export const useSectionReveal = <T extends HTMLElement>(ref: RefObject<T>, options: RevealOptions = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: options.y ?? 40, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 0.9,
          stagger: options.stagger ?? 0.12,
          ease: options.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? 'top 75%'
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [options.duration, options.ease, options.start, options.stagger, options.y, ref]);
};
