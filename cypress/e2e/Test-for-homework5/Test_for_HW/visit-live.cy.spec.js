const LoginPage = require(`../../../../pages/loginPage.js`)


describe('tests for visit live', () => {
  beforeEach(() => {
    cy.visit('/') + "?page=1&sort=id,asc";
  });

  it("test with loginPage class", () => {
    const loginPage = new LoginPage()
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/login");
    const loginInput = loginPage.elements.loginField() // получили логин инпут
    loginInput.type("admin_automation") // вводим логин
    const passwordInput = loginPage.elements.passwordField() // получили пассворд инпут 
    passwordInput.type("admin_automation") // вводим пароль
    const submitButton = loginPage.elements.loginButton() // получили кнопку сабмит
    submitButton.click() // нажали кнопку отправить
  })


  it('test login with hardcoded credentials', () => {
    const username = 'kot';
    const password = '654321';
    cy.validLogin(username, password);
  });

  it('Testing Account button', () => {
    cy.get('[data-cy="accountMenu"]').should('be.visible');
    cy.get('[data-cy="accountMenu"]').click();
  });

  it('test login', () => {
    const username = Cypress.env('environment1').user.username;
    const password = Cypress.env('environment1').user.password;
    cy.validLogin(username, password);
  });

  it('Correct loading verifier page', () => {
    cy.visit(Cypress.env('environment1').baseUrl);
    const username = Cypress.env('environment1').user.username;
    const password = Cypress.env('environment1').user.password;
    cy.validLogin(username, password);
  });


  it("should successfully log out the user", () => {
    cy.visit(Cypress.env("environment1").baseUrl);
    cy.logout();
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
