// // cypress/support/commands.js

// Cypress.Commands.add('validLogin', (username, password) => {
// cy.get('#account-menu').click();
// cy.log('Before waiting for login button');
// cy.wait(2000);
// cy.log('After waiting for login button');
// cy.get('#login-item').click({ force: true }); // Add { force: true } here
// cy.get('input[name="username"]').type(username);
// cy.get('input[name="password"]').type(password);
// cy.get('button[type="submit"]').click();
// cy.get('#entity-menu').should('be.visible');
// });

// Cypress.Commands.add('switchLanguage', (language) => {
// cy.get('#header-tabs > li:nth-child(4) > a').click();
// cy.contains(language).click();
// });

// Cypress.Commands.add('logout', () => {
// // Log in first
// const user = Cypress.env('environment1').user;
// cy.validLogin(user.username, user.password);

// // // Perform logout with force true option
// // cy.get('#account-menu').click();
// // cy.get('[data-cy="logout"]').click({ force: true });
// // cy.url().should('include', '/logout');
// // cy.get('div.p-5').should('include.text', 'Logged out successfully!');

// // // Add hooks to run before each test
// // beforeEach(() => {
// // // Add any setup code you need to run before each test
// // // For example, you might want to log in before each test
// // const user = Cypress.env('environment1').user;
// // cy.visit(Cypress.env('environment1').baseUrl);
// // cy.validLogin(user.username, user.password);
// // });

// afterEach(() => {
// // Log out after each test
// cy.get('#account-menu').click();
// cy.get('[data-cy="logout"]').click({ force: true });
// cy.url().should('include', '/logout');
// cy.get('div.p-5').should('include.text', 'Logged out successfully!');
// });
// // cypress/integration/example.spec.js

// describe("Correct loading verifier page", () => {
// const user1 = Cypress.env('environment1').user;
// const user2 = Cypress.env('environment2').user;

// it('should login using environment1 URL', () => {
// cy.visit(Cypress.env('environment1').baseUrl);
// cy.validLogin(user1.username, user1.password);
// cy.switchLanguage('English');
// cy.switchLanguage('Français');
// cy.logout();
// });

// it('should login using environment2 URL', () => {
// cy.visit(Cypress.env('environment2').baseUrl);
// cy.validLogin(user2.username, user2.password);
// cy.switchLanguage('English');
// cy.switchLanguage('Français');
// cy.logout();
// });
// });

old config start const { defineConfig } = require("cypress");

module.exports = defineConfig({
projectId: "gf7az6",
e2e: {
baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/",
specPattern: "cypress/e2e/Test-for-homework5/Test_for_HW/\*.spec.js",
setupNodeEvents(on, config) {
// implement node event listeners here
},
},
env: {
environment1: {
baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/login",
user: {
username: "kot",
password: "654321",
},
},
environment2: {
baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com/login",
user: {
username: "student82",
password: "963852",
},
},
},
//defaultCommandTimeout: 10000 // Adjust the timeout as needed
});
ends

class LoginPage {
elements = {
loginField : () => cy.get('[data-cy="username"]'),
passwordField : () => cy.get('[data-cy="password"]'),
loginButton : () => cy.get('[data-cy="submit"] > span')
}

    inputLogin(login,password) {
        this.elements.loginField().clear().type(login); // Clear existing content before typing
        this.elements.passwordField().clear().type(password);
        this.elements.loginButton().click();

    }

    inputPassword(password) {
         // Clear existing content before typing
    }

    clickLogin() {

    }

}

module.exports = LoginPage;
