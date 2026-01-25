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
        varsity: ['var(--font-varsity)'],
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}