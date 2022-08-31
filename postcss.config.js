module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      keyframes: true,
      variables: true,
      safelist: ['html', 'body'],
    },
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}
