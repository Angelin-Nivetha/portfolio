/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor:{
        'primary':'#5653e6'
      }
    },
    fontFamily:{
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}

