const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'mswjpr',
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
  },
})
