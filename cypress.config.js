module.exports = defineConfig({
  projectId: "gf7az6",
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    environment1: {
      baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/",
      user: {
        username: "kot",
        password: "654321",
      },
    },
    environment2: {
      baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com/",
      user: {
        username: "admin_automation",
        password: "admin_automation",
      },
    },
  },
  defaultCommandTimeout: 10000 // Adjust the timeout as needed
});