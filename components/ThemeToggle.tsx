'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const shouldUseDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldUseDark);
    setDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-300/80 bg-white/80 p-2 text-slate-700 backdrop-blur transition hover:scale-105 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
      aria-label="Toggle color theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
