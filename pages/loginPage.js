const selectors = require('../cypress/fixtures/pages/loginPageSelectors.json');

class LoginPage {
    constructor() {
        this.elements = {
            loginField: () => cy.get(selectors.loginField),
            passwordField: () => cy.get(selectors.passwordField),
            loginButton: () => cy.get(selectors.loginButton)
        };
    }

    inputLogin(login) {
        this.elements.loginField().clear().type(login); // Clear existing content before typing
    }

    inputPassword(password) {
        this.elements.passwordField().clear().type(password); // Clear existing content before typing
    }

    clickLogin() {
        this.elements.loginButton().click();
    }
}

module.exports = LoginPage;
