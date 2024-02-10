// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair'],
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.29, 0, 0.01, 1)',
        'cubic-bezier-elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      colors: {
        base: {
          DEFAULT: '#fbfcfd',
          hover: '#f7f9fb',
        },
        primary: {
          // DEFAULT: '#F2FE71',
          // hover: '#F2FE71',
          DEFAULT: '#c5a366',
          hover: '#e1b970',
        },
        gold: {
          DEFAULT: '#c5a366',
          hover: '#e1b970',
        },
        silver: {
          DEFAULT: '#FFFFEE',
          hover: '#FFFFEE',
        },
      },
    }
  },
  variants: {},
}
