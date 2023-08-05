const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 360,
  viewportHeight: 760,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
