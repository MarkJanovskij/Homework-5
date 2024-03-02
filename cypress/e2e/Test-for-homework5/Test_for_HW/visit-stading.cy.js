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