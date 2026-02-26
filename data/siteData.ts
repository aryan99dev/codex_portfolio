import { NavItem, Project, SkillCategory, TimelineItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const skillCategories: SkillCategory[] = [
  { title: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs'] },
  { title: 'Tools', items: ['GitHub Actions', 'Docker', 'Vercel', 'Figma', 'Jest'] }
];

export const projects: Project[] = [
  {
    title: 'Realtime Analytics Dashboard',
    description: 'Interactive dashboard with live event streams, custom charting, and configurable reports.',
    tech: ['Next.js', 'WebSockets', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/analytics-dashboard'
  },
  {
    title: 'AI Content Studio',
    description: 'Collaborative writing platform with prompt templates, revision history, and team workspaces.',
    tech: ['React', 'TypeScript', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ai-content-studio'
  },
  {
    title: 'Commerce Experience Kit',
    description: 'Composable storefront with personalized recommendations, lightning-fast browsing, and checkout UX.',
    tech: ['Next.js', 'Stripe', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/commerce-kit'
  }
];

export const timeline: TimelineItem[] = [
  {
    title: 'Senior Front-End Engineer',
    organization: 'PixelForge Studio',
    period: '2022 — Present',
    description: 'Led the migration to Next.js App Router and improved Core Web Vitals by 35% across product pages.'
  },
  {
    title: 'Front-End Engineer',
    organization: 'Nova Digital',
    period: '2019 — 2022',
    description: 'Built reusable component libraries and shipped animated landing pages for SaaS clients.'
  },
  {
    title: 'B.Sc. Computer Science',
    organization: 'State University',
    period: '2015 — 2019',
    description: 'Focused on HCI and software engineering, graduating with honors and capstone distinction.'
  }
];
