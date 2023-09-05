import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.jsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        grid: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }: PluginAPI) {
      addComponents({
        '.btn': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.blue.600'),
          borderRadius: theme('borderRadius.md'),
          padding: '0.75rem 1.5rem',
          fontWeight: '500',
        },
        '.btn:hover, .btn:focus': {
          backgroundColor: theme('colors.blue.700'),
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          borderRadius: theme('borderRadius.md'),
          borderWidth: '1px',
          borderColor: theme('colors.blue.600'),
          padding: '0.75rem 1.5rem',
          fontWeight: '500',
        },
        '.btn-secondary:hover, .btn-secondary:focus': {
          backgroundColor: 'rgb(37 99 235 / 0.1)',
        },
      });
    }),
  ],
};

export default config;
