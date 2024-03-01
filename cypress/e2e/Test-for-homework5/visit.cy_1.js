describe(`First test suit`, ()=>{
    it(`First test`, ()=>{
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    })
})

it(`Test button account`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`[data-cy="accountMenu"]`).click( )
})