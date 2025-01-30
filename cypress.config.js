const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalStudio: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mochawesome',
        overwrite: false,
        html: true,
        json: true,
        timestamp: 'mmddyyyy_HHMMss'
      }
    }
  },
  /*env:{
    endpoint:{
      soporte: \soprte
    }
  }*/
});
