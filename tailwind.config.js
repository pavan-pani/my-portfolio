/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kalam:"'Kalam'",
        navhead:"'Style Script', cursive",
        navitems:"'Courgette', cursive",
        backgroudfont:"'Open Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
