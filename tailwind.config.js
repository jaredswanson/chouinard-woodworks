/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'night': '#161616',
        'eerie-black': '#1A1A1A',
        'anti-flash-white': '#EEEEEE',
        'dim-gray': '#736961',
        'lion': '#C7A57A',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
