const files = require('./files')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...files],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
