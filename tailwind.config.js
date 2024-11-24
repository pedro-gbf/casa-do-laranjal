/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'laranjal': '#F99724',
      'folha': '#262809',
      'casca': '#f9dd96',
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}