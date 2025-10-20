import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        brand: {
          navy: '#0B1F3B', // deep, accessible navy
          navyDark: '#08152A',
          slate: '#334155', // slate-700
          slateLight: '#64748B', // slate-500
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 1px 3px rgba(2, 6, 23, 0.06), 0 1px 2px rgba(2, 6, 23, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(2, 6, 23, 0.1), 0 4px 6px -4px rgba(2, 6, 23, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
    },
  },
  plugins: [typography],
};

export default config;