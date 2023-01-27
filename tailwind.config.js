const files = require('./files')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...files],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
