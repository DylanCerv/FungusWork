/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#004F40',
      'secundary': '#003B32',
      white: '#FFFFFF',
      black: '#08080C',
      gray: '#D9D9D9',
      green: {
        100: '#A1B3B2',
        500: '#004F40',
        600: '#19474E'
      }
    },
  },
  plugins: [],
}

