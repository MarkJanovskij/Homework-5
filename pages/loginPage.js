class LoginPage {
    elements={
        loginWindow: () => cy.get('.modal-content'),
        loginField: () => cy.get('[data-cy="username"]'),
        passwordField: () => cy.get('[data-cy="password"]'),
        loginButton: () => cy.get('[data-cy="submit"] > span'),
    };

 inputLogin(login) {
    this.elements.loginField().type("kot")
    }

 inputPassword(passord) {
     this.elements.passwordField().type("654321")
        }

 clickLogin() {
    this.elements.loginButton().click();
 }
}