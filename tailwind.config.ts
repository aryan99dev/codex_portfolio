import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        secondary: '#a78bfa'
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
