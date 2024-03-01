it(`Test button Home`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`.d-flex > :nth-child(2) > span`).click( )
})

it(`Test button Home`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`.d-flex > :nth-child(2) > span`).click( )
})