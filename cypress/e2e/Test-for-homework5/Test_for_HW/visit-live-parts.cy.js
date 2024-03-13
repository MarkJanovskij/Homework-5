describe('common tests live staging', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Testing Account button', () => {
    cy.get('[data-cy="accountMenu"]').should('be.visible');
    cy.get('[data-cy="accountMenu"]').click();
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


































describe('11 Test', () => {
  it('Testing Account button', () => {
    cy.visit('/');
    cy.get('[data-cy="accountMenu"]').should('be.visible');
    cy.get('[data-cy="accountMenu"]').click();
  });

  it('Test button Language English', () => {
    cy.visit('/');
    cy.get(':nth-child(2) > .d-flex > span').should('be.visible').click();
  });

  it('Test button Home', () => {
    cy.visit('/');
    cy.get('.d-flex > :nth-child(2) > span').should('be.visible').click();
  });

  it('Test button Brand', () => {
    cy.visit('/');
    cy.get('.brand-title > span').should('be.visible').click();
  });

  it('Test button Logo', () => {
    cy.visit('/');
    cy.get('img').should('be.visible').click();
  });

  it('Test button Version', () => {
    cy.visit('/');
    cy.get('.navbar-version').should('be.visible').click();
  });

  it('Test button 1 page', () => {
    cy.visit('/');
    cy.get('.active > .page-link').should('be.visible').click();
  });

  it('Test button 2 page', () => {
    cy.visit('/');
    cy.get(':nth-child(4) > .page-link').should('be.visible').click();
  });

  it('Test button 3 Page', () => {
    cy.visit('/');
    cy.get(':nth-child(5) > .page-link').should('be.visible').click();
  });

  it('Test button fast forward', () => {
    cy.visit('/');
    cy.get(':nth-child(8) > .page-link').should('be.visible').click();
  });

  it('Test button last page', () => {
    cy.visit('/');
    cy.get(':nth-child(9) > .page-link').should('be.visible').click();
  });
});
