it(`Test button Language English`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(2) > .d-flex > span"]`).click( )
})

it(`Test button Language English`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`[data-cy="accountMenu"]`).click( )
})
