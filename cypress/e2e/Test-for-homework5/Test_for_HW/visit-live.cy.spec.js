describe('test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('test login', () => { // пример использования команд
    cy.validLogin() // теперь тут выполняется вся та логика, которая описана внутри команды 
  })
})





describe('Testing Account button', () => {
    it('Testing Account button', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get('[data-cy="accountMenu"]').should('be.visible');
  
      
      cy.get('[data-cy="accountMenu"]').click();

    });
  });


  describe('Test button Language English', () => {
    it('Test button Language English', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get(':nth-child(2) > .d-flex > span').should('be.visible').click();
    });
  });

  describe('Test button Home', () => {
    it('Test button Home', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
      cy.get('.d-flex > :nth-child(2) > span').should('be.visible').click();
    });
  });

  describe('Test button Brand', () => {
    it('Test button Brand', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get('.brand-title > span').should('be.visible').click();
    });
  });

  describe('Test button Logo', () => {
    it('Test button Logo', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get('img').should('be.visible').click();
    });
  });

  describe('Test button Version', () => {
    it('Test button Version', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get('.navbar-version').should('be.visible').click();
    });
  });

  describe('Test button 1 page', () => {
    it('Test button 1 page', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get('.active > .page-link').should('be.visible').click();
    });
  });

  describe('Test button 2 page', () => {
    it('Test button 2 page', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
      cy.get(':nth-child(4) > .page-link').should('be.visible').click();
    });
  });

  describe('Test button 3 Page', () => {
    it('Test button 3 Page', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
      cy.get(':nth-child(5) > .page-link').should('be.visible').click();
    });
  });

  describe('Test button fast forward', () => {
    it('Test button fast forward', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
     
      cy.get(':nth-child(8) > .page-link').should('be.visible').click();
    });
  });

  describe('YTest button last page', () => {
    it('Test button last page', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  
      
      cy.get(':nth-child(9) > .page-link').should('be.visible').click();
    });
  });