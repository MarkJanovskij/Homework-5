import './commands'

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
    const user = Cypress.env('environment1').user;
    cy.validLogin(user.username, user.password);
    cy.get('#account-menu').click();
    cy.get('[data-cy="logout"]').click();
    cy.url().should('include', '/logout');
    cy.get('div.p-5').should('include.text', 'Logged out successfully!');
  });