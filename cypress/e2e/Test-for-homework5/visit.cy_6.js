it(`Test button version`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`.navbar-version`).click( )
})

it(`Test button version`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`.navbar-version`).click( )
})