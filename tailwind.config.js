module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['Nunito'],
      robotoMono: ['Roboto Mono'],
      arvo:['Arvo']
  
       // Ensure fonts with spaces have " " surrounding it.
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('tailwind-hamburgers') ],
}
