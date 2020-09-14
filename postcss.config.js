const plugins = {
  'postcss-import': {},
  'tailwindcss': {},
}

if (process.env.NODE_ENV === 'production') {
  plugins['@fullhuman/postcss-purgecss'] = {
    content: [
      './pages/**/*.js',
      './components/**/*.js'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  }
  plugins['cssnano'] = {}
}

module.exports = {
  plugins,
}
