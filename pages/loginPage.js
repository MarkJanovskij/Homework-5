class LoginPage {
    constructor() {
        this.loginField = () => cy.get('[data-cy="username"]');
        this.passwordField = () => cy.get('[data-cy="password"]');
        this.loginButton = () => cy.get('[data-cy="submit"] > span');
    }

    inputLogin(login) {
        this.loginField().clear().type(login); // Clear existing content before typing
    }

    inputPassword(password) {
        this.passwordField().clear().type(password); // Clear existing content before typing
    }

    clickLogin() {
        this.loginButton().click();
    }
}

export default LoginPage;
