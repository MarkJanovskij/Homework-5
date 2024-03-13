describe('tests for visit staging', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('environment2').baseUrl);
  });

  it('test login with hardcoded credentials', () => {
    const username = 'admin_automation'; 
    const password = 'admin_automation'; 
    cy.validLogin(username, password);
  });

  it('Testing Account button', () => {
    cy.get('[data-cy="accountMenu"]').should('be.visible');
    cy.get('[data-cy="accountMenu"]').click({ force: true });
  });


  it('Correct loading verifier page', () => {
    cy.visit(Cypress.env('environment2').baseUrl);
    const username = Cypress.env('environment2').user.username;
    const password = Cypress.env('environment2').user.password;
    cy.validLogin(username, password);
  });


  it('Test button Language English', () => {
    cy.get(':nth-child(2) > .d-flex > span').should('be.visible').click();
  });

  it('Test button Home', () => {
    cy.get('.d-flex > :nth-child(2) > span').should('be.visible').click();
  });

  it('Test button Brand', () => {
    cy.get('.brand-title > span').should('be.visible').click();
  });

  it('Test button Logo', () => {
    cy.get('img').should('be.visible').click();
  });

  it('Test button Version', () => {
    cy.get('.navbar-version').should('be.visible').click();
  });

  it('Test button 1 page', () => {
    cy.get('.active > .page-link').should('be.visible').click();
  });

  it('Test button 2 page', () => {
    cy.get(':nth-child(4) > .page-link').should('be.visible').click();
  });

  it('Test button 3 Page', () => {
    cy.get(':nth-child(5) > .page-link').should('be.visible').click();
  });

  it('Test button fast forward', () => {
    cy.get(':nth-child(8) > .page-link').should('be.visible').click();
  });

  it('Test button last page', () => {
    cy.get(':nth-child(9) > .page-link').should('be.visible').click();
  });
});
