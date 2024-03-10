describe('test', () => {
    beforeEach(() => {
      // No need to visit the baseUrl here since it's already visited in the environment configuration
    });
    
    it('test login with hardcoded credentials', () => {
      const username = Cypress.env('environment2').user.username;
      const password = Cypress.env('environment2').user.password;
      cy.validLogin(username, password);
    });
      
    it('Testing Account button', () => {
      cy.get('[data-cy="accountMenu"]').should('be.visible');
      cy.get('[data-cy="accountMenu"]').click({force: true});
    });
  });
  