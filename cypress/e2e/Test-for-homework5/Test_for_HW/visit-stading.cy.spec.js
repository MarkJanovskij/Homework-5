describe('test', () => {
  beforeEach(() => {
      cy.visit(Cypress.config('env').environment2.baseUrl);
  });

  it('test login with hardcoded credentials', () => {
      const username = 'student82'; // Replace 'your_username' with your actual username
      const password = '963852'; // Replace 'your_password' with your actual password
      cy.validLogin(username, password);
  });

  // it('test login with command', () => {
  //     cy.validLogin(); // 
  // });

  it('Testing Account button', () => {
      cy.get('[data-cy="accountMenu"]').should('be.visible');
      cy.get('[data-cy="accountMenu"]').click();
  });
});
