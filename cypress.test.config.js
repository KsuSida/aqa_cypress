const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      // BASE_URL: 'https://www.saucedemo.com/',
      USER_NAME: 'problem_user',
      USER_PASSWORD: 'secret_sauce',
    },

    defaultCommandTimeout: 5000,
    // "fixturesFolder": "cypress/fixtures",
    specPattern: '**/*.cy.js',
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    // "screenshotsFolder": "cypress/screenshots",
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
