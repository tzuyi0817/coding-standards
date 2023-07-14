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
        primary: '#444856',
        secondary: '#444857',
      },
      backgroundImage: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
}
