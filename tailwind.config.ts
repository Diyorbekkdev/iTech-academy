import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'muted': '#6C7178',
        'pink': '#FC16AC',
        'light-gray': '#F9FAFB',
        'dark-gray': '#8E9AAC',
        'primary': '#FE4500',
        'pink-badge': '#F64459',
        'orange': '#FF9213',
        'secondary': '#1D242F',
        'transparent': 'rgba(255, 255, 255, 0)',
        'text-color': '#0B2B5E',
        'light-green': 'rgb(244, 244, 244)',
        'green': '#52C35D',
        'border-color': 'rgb(232, 236, 239)',
        'dark-blue': 'rgb(7, 33, 52)',
        'light-blue': '#154060',
        'blue': '#5256C3',
        'light-badge-green': '#04AE5E1A',
        'secondary-gray': '#F9FAFB',
        'transparent-gray': '#E8ECEF',
        'light-pink': 'rgb(243, 248, 255)',
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
    screens: {
      xxs: '0',
      xsm: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },

  corePlugins: {
    container: false,
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
