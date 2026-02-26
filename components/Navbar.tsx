'use client';

import { navItems } from '@/data/siteData';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-semibold tracking-wide">
          DevPortfolio
        </a>
        <div className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-primary dark:text-slate-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};
