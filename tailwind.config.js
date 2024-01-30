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
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        // sans: ["Roboto"],
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.29, 0, 0.01, 1)',
        'cubic-bezier-elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      colors: {
        base: {
          DEFAULT: '#F8F7F4',
          hover: '#f0efe9',
        },
        primary: {
          DEFAULT: '#6A5FE2',
          hover: '#6A5FE2',
        },
      },
    }
  },
  variants: {},
}
