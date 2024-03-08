// const { loginPage } = require("./pages/loginPage.js");
// const loginPageElements = require ("cypress/fixtures/pages/loginPageSelectors.json");



describe('11 Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

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


