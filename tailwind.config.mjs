/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#04020f',
        'primary-dark': '#020108',
        'primary-light': '#1a1525',
        secondary: '#4787cc',
        'secondary-dark': '#3670aa',
        'secondary-light': '#6ba0d8',
        accent: '#3bb9c2',
        'accent-dark': '#2a9da5',
        'accent-light': '#5dd0d7',
        surface: '#ffffff',
        'surface-alt': '#f5f5f5',
        'surface-muted': '#dddddd',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(71, 135, 204, 0.05)',
        'base': '0 1px 3px 0 rgba(71, 135, 204, 0.1), 0 1px 2px 0 rgba(71, 135, 204, 0.06)',
        'md': '0 4px 6px -1px rgba(71, 135, 204, 0.15), 0 2px 4px -1px rgba(71, 135, 204, 0.08)',
        'lg': '0 10px 15px -3px rgba(71, 135, 204, 0.2), 0 4px 6px -2px rgba(71, 135, 204, 0.1)',
        'xl': '0 20px 25px -5px rgba(71, 135, 204, 0.25), 0 10px 10px -5px rgba(71, 135, 204, 0.12)',
      },
    },
  },
  plugins: [],
};
