it(`Test button 3 Page`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(5) > .page-link`).click( )
})

it(`Test button 3 Page`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`:nth-child(5) > .page-link`).click( )
})