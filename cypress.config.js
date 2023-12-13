const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");
module.exports = defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false ,
    video:true,
    defaultCommandTimeout:10000,
    pageLoadTimeout:15000,
    // baseUrl:'http://localhost:8484',
    specPattern: "cypress/e2e/cucumber/Tests/*.*feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      configureAllureAdapterPlugins(on, config); 
      return config
    },
  },
});