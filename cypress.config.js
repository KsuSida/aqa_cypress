const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout: 5000,
    // "fixturesFolder": "cypress/fixtures",
    specPattern: '**/*.cy.js',
    chromeWebSecurity: false,
    // "screenshotsFolder": "cypress/screenshots",
  },
});
