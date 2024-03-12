export class LoginPage {
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

export default LoginPage;
