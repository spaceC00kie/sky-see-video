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
    },
  },
  plugins: [],
}
