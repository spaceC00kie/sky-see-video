/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      corePlugins: {
        contentVisibility: true,
      },
    },
  },
  plugins: [],
}
