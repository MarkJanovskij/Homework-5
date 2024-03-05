// cypress/support/commands.js

Cypress.Commands.add("login", () => {
    // Implement login steps here
  });
  
  Cypress.Commands.add("selectAccount", () => {
    // Implement steps to select account here
  });
  
  Cypress.Commands.add("clickLanguageButton", () => {
    // Implement steps to click language button here
  });
  
  // Add more custom commands as needed
  // Example usage of custom commands in a test spec

describe("Example Test Suite", () => {
    it("should perform login", () => {
      cy.login();
    });
  
    it("should select account", () => {
      cy.selectAccount();
    });
  
    it("should click language button", () => {
      cy.clickLanguageButton();
    });
  });
  