class LoginPage {
    elements = {
        loginField: () => cy.get('[data-cy="username"]'),
        passwordField: () => cy.get('[data-cy="password"]'),
        loginButton: () => cy.get('[data-cy="submit"] > span')
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

