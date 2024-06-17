/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '110': '110%', // Custom width class
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


