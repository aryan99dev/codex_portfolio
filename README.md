# Modern Animated Developer Portfolio

A production-ready **Next.js (App Router)** portfolio starter using **TypeScript**, **Tailwind CSS**, and **GSAP**.

## 1) Project structure

```text
codex_portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── siteData.ts
├── hooks/
│   ├── useHeroAnimation.ts
│   └── useSectionReveal.ts
├── lib/
│   └── gsap.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── types.ts
```

## 2) Install and run

### npm

```bash
npm install
npm run dev
```

### pnpm

```bash
pnpm install
pnpm dev
```

Build + start production:

```bash
npm run build
npm run start
```

## 3) Included features

- Sticky responsive navbar with anchor-based smooth scroll.
- Hero section with GSAP staggered intro and parallax background effect.
- Scroll-triggered reveal animations for all sections.
- Animated projects grid with image hover zoom/reveal.
- Timeline-style experience and education section.
- Dark mode toggle with saved preference.
- Reusable animation hooks and typed content data.

## 4) Customization guide

### Change copy/text/content

- Update nav links, projects, skills, and timeline content in:
  - `data/siteData.ts`
- Update hero copy and contact email in:
  - `components/HeroSection.tsx`
  - `components/ContactSection.tsx`

### Change color palette

- Edit brand colors in `tailwind.config.ts` under `theme.extend.colors`.
- Adjust base backgrounds/text in `app/globals.css`.

### Change animation durations/easing

- Hero timeline settings:
  - `hooks/useHeroAnimation.ts`
- Section reveal animation defaults:
  - `hooks/useSectionReveal.ts`

Common GSAP easing examples:
- `power2.out`
- `power3.out`
- `expo.out`
- `back.out(1.7)`

---

If you deploy on Vercel, this project works with zero additional server config.
