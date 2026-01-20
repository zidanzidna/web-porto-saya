/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
    "./src/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        varsity: ['Varsity Team', 'sans-serif'],
      },
    },
  },
  plugins: [],
}