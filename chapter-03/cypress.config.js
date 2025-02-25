const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 700,
  viewportWidth: 763,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
