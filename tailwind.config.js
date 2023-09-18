/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        heading: '#1C1B1B',
        body: '#1C1B1B99',
        theme: '#2F80ED',
      },
    },
  },
  plugins: [],
};
