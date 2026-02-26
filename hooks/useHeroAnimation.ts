'use client';

import { RefObject, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

export const useHeroAnimation = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('.hero-word');
      const actions = gsap.utils.toArray<HTMLElement>('.hero-action');
      const bg = ref.current?.querySelector('.hero-bg');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(words, { yPercent: 120, autoAlpha: 0, stagger: 0.06, duration: 0.7 })
        .from(actions, { y: 20, autoAlpha: 0, stagger: 0.15, duration: 0.6 }, '-=0.25')
        .from(bg, { autoAlpha: 0, scale: 1.08, duration: 1.1 }, '<');

      gsap.to(bg, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};
