const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gf7az6",
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/",
    specPattern: "cypress/e2e/Test-for-homework5/Test_for_HW/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    environment1: {
      baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/login",
      user: {
        username: "kot",
        password: "654321",
      },
    },
    environment2: {
      baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com/login",
      user: {
        username: "student82",
        password: "963852",
      },
    },
  },
  //defaultCommandTimeout: 10000 // Adjust the timeout as needed
});
