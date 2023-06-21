/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      serif: ['Inria Serif', 'serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors:{
        academyBg:"#eaf3ff",
        academyPrimary:"#4a90e2",
        agencyAccent:"#fa7e4a",
        agencySecondary:"#ffece5",
        agencyPrimary:"#e9ebfb",
        textGrey:"#a6abb2",
      }
    },
  },
  plugins: [],
}

