it(`Test button fast forward`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(8) > .page-link`).click( )
})