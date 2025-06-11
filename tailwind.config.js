/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      ss: "480px",
      sm: "568px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    },
    
  },
  plugins: [],
}