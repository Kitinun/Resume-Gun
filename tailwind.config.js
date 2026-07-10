/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Prompt', 'sans-serif'],
      },
      screens: {
        'mob': '480px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptopl': '1440px',
      },
    },
  },
  plugins: [],
};
