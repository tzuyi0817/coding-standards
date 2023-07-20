/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    // fontFamily: {
    //   sans: ["Monda", "Noto Sans TC", "sans-serif"],
    // },
    extend: {
      colors: {
        primary: '#41b883',
        secondary: '#35495E',
      },
      backgroundImage: {},
      animation: {
        popup: 'popup-in 0.3s',
      },
      keyframes: {
        'popup-in': {
          from: {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        }
      },
    },
  },
  plugins: [],
}
