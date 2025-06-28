/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b51',
        background: '#181c23',
        surface: '#232733',
        text: '#fff',
        'text-muted': '#b0b4be',
      },
    },
  },
  plugins: [],
} 