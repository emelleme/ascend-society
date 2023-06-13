module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.addPassthroughCopy({ './src/assets': 'assets' })
   config.addCollection('aboutUs', function(collection) {
    return collection.getFilteredByGlob('./src/about-us-index.njk');
  });
  // config.addPassthroughCopy({ 'src/admin/config.yml': './admin/config.yml' }) // netlify admin
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', 'html', 'liquid'],
    htmlTemplateEngine: 'njk',
  }
}
