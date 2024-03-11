//   it('test login', () => {
//     cy.visit(Cypress.config().baseUrl); // Visit the base URL from Cypress configuration
//     const username = Cypress.env('environment2').user.username; // Retrieve username from environment
//     const password = Cypress.env('environment2').user.password; // Retrieve password from environment
//     cy.validLogin(username, password);
// });v

// it('Testing Account button', () => {
//   cy.get('[data-cy="accountMenu"]').should('be.visible');
//   cy.get('[data-cy="accountMenu"]').click();
// });v

//   it('should login using environment2 URL', () => {
//     cy.visit(Cypress.env('environment2').baseUrl);
//     const username = Cypress.env('environment2').user.username;
//     const password = Cypress.env('environment2').user.password;
//     cy.validLogin(username, password);
//   });v
// });

// describe("Correct loading verifier page", () => {
//   it('should login using environment2 URL', () => {
//     cy.visit(Cypress.env('environment2').baseUrl);
//     cy.validLogin(
//       Cypress.env('environment2').user.username, 
//       Cypress.env('environment2').user.password);
//     cy.switchLanguage('English', 'Home');
//     cy.switchLanguage('Français', 'Accueil');

//     cy.logout();
//   })
// });

// describe("Correct loading verifier page", () => {
//   it('should login using environment2 URL', () => {
//     cy.visit(Cypress.env('environment2').baseUrl);
//     cy.validLogin(
//       Cypress.env('environment2').user.username, 
//       Cypress.env('environment2').user.password);
//     cy.switchLanguage('English', 'Home');
//     cy.switchLanguage('Français', 'Accueil');

//     cy.logout();
//   })
// });


// describe('11 Test', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it('Test button Language English', () => {
//     cy.get(':nth-child(2) > .d-flex > span').should('be.visible').click();
//   });

//   it('Test button Home', () => {
//     cy.get('.d-flex > :nth-child(2) > span').should('be.visible').click();
//   });

//   it('Test button Brand', () => {
//     cy.get('.brand-title > span').should('be.visible').click();
//   });

//   it('Test button Logo', () => {
//     cy.get('img').should('be.visible').click();
//   });

//   it('Test button Version', () => {
//     cy.get('.navbar-version').should('be.visible').click();
//   });

//   it('Test button 1 page', () => {
//     cy.get('.active > .page-link').should('be.visible').click();
//   });

//   it('Test button 2 page', () => {
//     cy.get(':nth-child(4) > .page-link').should('be.visible').click();
//   });

//   it('Test button 3 Page', () => {
//     cy.get(':nth-child(5) > .page-link').should('be.visible').click();
//   });

//   it('Test button fast forward', () => {
//     cy.get(':nth-child(8) > .page-link').should('be.visible').click();
//   });

//   it('Test button last page', () => {
//     cy.get(':nth-child(9) > .page-link').should('be.visible').click();
//   });



// const { loginPage } = require("./pages/loginPage.js");
// const loginPageElements = require ("cypress/fixtures/pages/loginPageSelectors.json");

// file with tests















































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
