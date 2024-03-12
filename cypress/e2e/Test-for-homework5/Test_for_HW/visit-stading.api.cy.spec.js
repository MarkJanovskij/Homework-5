import { LoginPage } from "C:\Users\myano\Desktop\hw5\pages\loginPage.js";

const loginPageElements = require(` ../../fixtures/pages/loginPageSelectors.json`);


describe("LoginPage", () => {
  let loginPage = new LoginPage();

  describe("API", () => {
    beforeEach(() => {
      // No need to visit the baseUrl here since it's already visited in the environment configuration
      cy.visit(Cypress.env("environment2").baseUrl);
    });

    it("user - API", () => {
      cy.request({
        method: "PUT",
        headers: {
          Cookie:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzEyNzQzNjk4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMDE1MTY5OH0.jAM5Pbh4hEtDYUQcPbSkCJe93TxuOpbqjt_V50U3puCmRzVDWrfHk_Vs4k94o8ElaVFvBAleMBig-jFqcSE0mw",
        },
        url: "https://sqlverifier-staging-08050d656f7a.herokuapp.com/login",
        body: { password: { password: "admin_automation" } },
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
      loginPage.login("admin_automation","admin_automation")
    });
  });
});
