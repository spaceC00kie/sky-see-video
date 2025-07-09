/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      corePlugins: {
        contentVisibility: true,
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
