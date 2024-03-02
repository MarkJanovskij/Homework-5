describe('Your Test Suite Name', () => {
    it('Should perform the desired actions', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      // Wait for the element to be visible
      cy.get('[data-cy="accountMenu"]').should('be.visible');
  
      // Click on the element
      cy.get('[data-cy="accountMenu"]').click();
    });
  });