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
  
  // cypress/support/index.js

// Run this code before any tests in the suite
before(() => {
    // Add any setup code you need to run once before all tests
    // For example, you might want to set up test data or perform global configurations
  });
  
  // Run this code before each test in the suite
  beforeEach(() => {
    // Add any setup code you need to run before each test
    // For example, you might want to log in before each test
  });
  
  // Define custom commands or other configurations as needed
  Cypress.Commands.add("login", () => {
    // Implement login steps here
  });
  
  // Add more custom commands as needed
  