/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
        'phone': {'max': '555px'}
    },
    extend: {
      fontFamily:{
        roboto : ['Roboto', 'sans-serif'],
        mogra : ['Mogra', 'system-ui']
      }
    },
  },
  plugins: [],
}