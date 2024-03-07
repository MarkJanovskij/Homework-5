 // cypress/support/commands.js

 Cypress.Commands.add('validLogin', (username, password) => {
    cy.get('#account-menu').click();
    cy.log('Before waiting for loging button');
    cy.wait(2000);
    cy.log('After waiting for loging button')
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#entity-menu').should('be.visible');
  });
  
  
  Cypress.Commands.add('switchLanguage', (language) => {
    cy.get('#header-tabs > li:nth-child(4) > a').click();
    cy.contains(language).click();
  });
  
  Cypress.Commands.add('logout', () => {
    // Log in first
    const user = Cypress.env('environment1').user;
    cy.validLogin(user.username, user.password);
  
    // Then perform logout
    cy.get('#account-menu').click();
    cy.get('[data-cy="logout"]').click();
    cy.url().should('include', '/logout');
    cy.get('div.p-5').should('include.text', 'Logged out successfully!');
  });
  // Add hooks to run before each test
beforeEach(() => {
    // Add any setup code you need to run before each test
    // For example, you might want to log in before each test
    const user = Cypress.env('environment1').user;
    cy.visit(Cypress.env('environment1').baseUrl);
    cy.validLogin(user.username, user.password);
  });
  
  // Add hooks to run after each test
  afterEach(() => {
    // Add any cleanup code you need to run after each test
    // For example, you might want to log out after each test
    cy.logout();
  });
  // cypress/integration/example.spec.js
  
  describe("Correct loading verifier page", () => {
    const user1 = Cypress.env('environment1').user;
    const user2 = Cypress.env('environment2').user;
  
    it('should login using environment1 URL', () => {
      cy.visit(Cypress.env('environment1').baseUrl);
      cy.validLogin(user1.username, user1.password);
      cy.switchLanguage('English');
      cy.switchLanguage('Français');
      cy.logout();
    });
  
    it('should login using environment2 URL', () => {
      cy.visit(Cypress.env('environment2').baseUrl);
      cy.validLogin(user2.username, user2.password);
      cy.switchLanguage('English');
      cy.switchLanguage('Français');
      cy.logout();
    });
  });