// cypress/support/commands.js

Cypress.Commands.add('validLogin', (login, password) => {
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type(login);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#entity-menu').should('be.visible');
  });
    
    Cypress.Commands.add("selectAccount", () => {
      // Implement steps to select account here
    });
    
    Cypress.Commands.add('switchLanguage', (language, expectedText) => {
      cy.get('#header-tabs > li:nth-child(4) > a').click();
      cy.contains(language).click();
      cy.get('#header-tabs').contains(expectedText).should('be.visible');
    });
  
  
    Cypress.Commands.add('logout', () => {
      cy.get('#account-menu').click();
      cy.get('[data-cy="logout"]').click();
      cy.url().should('include', '/logout');
      cy.get('div.p-5').should('include.text', 'Logged out successfully!');
    });
  
    escribe("Correct loading verifier page", () => {
      it('should login using environment1 URL', () => {
        cy.visit(Cypress.env('environment1').baseUrl);
        cy.validLogin(
          Cypress.env('environment1').user.username, 
          Cypress.env('environment1').user.password);
        cy.switchLanguage('English', 'Home');
        cy.switchLanguage('Français', 'Accueil');
    
        cy.logout();
      });
    })
    describe("Correct loading verifier page", () => {
      it('should login using environment2 URL', () => {
        cy.visit(Cypress.env('environment2').baseUrl);
        cy.validLogin(
          Cypress.env('environment2').user.username, 
          Cypress.env('environment2').user.password);
        cy.switchLanguage('English', 'Home');
        cy.switchLanguage('Français', 'Accueil');
    
        cy.logout();
      })
    });