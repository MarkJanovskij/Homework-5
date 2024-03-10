describe('test', () => {
  beforeEach(() => {
      cy.visit('/');
  });

  it('test login with hardcoded credentials', () => {
    const username = 'kot'; // Replace 'your_username' with your actual username
    const password = '654321'; // Replace 'your_password' with your actual password
    cy.validLogin(username, password);
});

it('Testing Account button', () => {
  cy.get('[data-cy="accountMenu"]').should('be.visible');
  cy.get('[data-cy="accountMenu"]').click();
});
//   it('test login', () => {
//     const username = Cypress.env('environment1').user.username;
//     const password = Cypress.env('environment1').user.password;
//     cy.validLogin(username, password);
//   });

//   it('Correct loading verifier page', () => {
//     cy.visit(Cypress.env('environment1').baseUrl);
//     const username = Cypress.env('environment1').user.username;
//     const password = Cypress.env('environment1').user.password;
//     cy.validLogin(username, password);
//   });
// })

// describe("Correct loading verifier page", () => {
//   it('should login using environment1 URL', () => {
//     cy.visit(Cypress.env('environment1').baseUrl);
//     cy.validLogin(
//       Cypress.env('environment1').user.username, 
//       Cypress.env('environment1').user.password);
//     cy.switchLanguage('English', 'Home');
//     cy.switchLanguage('Français', 'Accueil');

//     cy.logout();
//   });
// })



// describe('Testing Account button', () => {
//     it('Testing Account button', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get('[data-cy="accountMenu"]').should('be.visible');
  
      
//       cy.get('[data-cy="accountMenu"]').click();

//     });
//   });


//   describe('Test button Language English', () => {
//     it('Test button Language English', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get(':nth-child(2) > .d-flex > span').should('be.visible').click();
//     });
//   });

//   describe('Test button Home', () => {
//     it('Test button Home', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
//       cy.get('.d-flex > :nth-child(2) > span').should('be.visible').click();
//     });
//   });

//   describe('Test button Brand', () => {
//     it('Test button Brand', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get('.brand-title > span').should('be.visible').click();
//     });
//   });

//   describe('Test button Logo', () => {
//     it('Test button Logo', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get('img').should('be.visible').click();
//     });
//   });

//   describe('Test button Version', () => {
//     it('Test button Version', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get('.navbar-version').should('be.visible').click();
//     });
//   });

//   describe('Test button 1 page', () => {
//     it('Test button 1 page', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get('.active > .page-link').should('be.visible').click();
//     });
//   });

//   describe('Test button 2 page', () => {
//     it('Test button 2 page', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
//       cy.get(':nth-child(4) > .page-link').should('be.visible').click();
//     });
//   });

//   describe('Test button 3 Page', () => {
//     it('Test button 3 Page', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
//       cy.get(':nth-child(5) > .page-link').should('be.visible').click();
//     });
//   });

//   describe('Test button fast forward', () => {
//     it('Test button fast forward', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
//       cy.get(':nth-child(8) > .page-link').should('be.visible').click();
//     });
//   });

//   describe('YTest button last page', () => {
//     it('Test button last page', () => {
//       cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
//       cy.get(':nth-child(9) > .page-link').should('be.visible').click();
//     });
  });