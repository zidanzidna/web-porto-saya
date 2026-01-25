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
        varsity: ['Varsity', 'cursive'],
        heading: ['PressStart2P', 'monospace'],
        body: ['VT323', 'monospace'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        blue: {
          glow: '#00d4ff',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 212, 255, 0.5)',
        'glow-md': '0 0 20px rgba(0, 212, 255, 0.6)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.8)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow-sm': {
          textShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
        },
        '.text-glow-md': {
          textShadow: '0 0 20px rgba(0, 212, 255, 0.9)',
        },
        '.text-glow-lg': {
          textShadow: '0 0 40px rgba(0, 212, 255, 1)',
        },
      })
    },
  ],
}
