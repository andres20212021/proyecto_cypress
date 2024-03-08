const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    video: false,
    chromeWebSecurity: false,
    projectId: "q2x6rc",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
      
    },
  },
});


