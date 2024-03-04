describe('Testing Account button', () => {
    it('Testing Account button', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
      
      cy.get('[data-cy="accountMenu"]').should('be.visible');
  
      
      cy.get('[data-cy="accountMenu"]').click();

    });
  });


  describe('Test button Language English', () => {
    it('Test button Language English', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
      
      cy.get(':nth-child(2) > .d-flex > span').should('be.visible').click();
    });
  });

  describe('Test button Home', () => {
    it('Test button Home', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
     
      cy.get('.d-flex > :nth-child(2) > span').should('be.visible').click();
    });
  });

  describe('Test button Brand', () => {
    it('Test button Brand', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
      
      cy.get('.brand-title > span').should('be.visible').click();
    });
  });

  describe('Test button Logo', () => {
    it('Test button Logo', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
      
      cy.get('img').should('be.visible').click();
    });
  });

  describe('Test button Version', () => {
    it('Test button Version', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
      
      cy.get('.navbar-version').should('be.visible').click();
    });
  });

  describe('Test button 1 page', () => {
    it('Test button 1 page', () => {
      cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/');
  
      
      cy.get('.active > .page-link').should('be.visible').click();
    });
  });