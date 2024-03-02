describe(`First test suit`, ()=>{
    it(`First test`, ()=>{
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    })
})

it(`Test button account`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`[data-cy="accountMenu"]`).click( )
})

it(`Test button account`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`[data-cy="accountMenu"]`).click( )
})


it(`Test button Language English`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(2) > .d-flex > span"]`).click( )
})

it(`Test button Language English`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`[data-cy="accountMenu"]`).click( )
})

it(`Test button Home`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`.d-flex > :nth-child(2) > span`).click( )
})

it(`Test button Home`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`.d-flex > :nth-child(2) > span`).click( )
})

it(`Test button Brand`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`.brand-title > span`).click( )
})

it(`Test button Brand`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`.brand-title > span`).click( )
})

it(`Test button Logo`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`img`).click( )
})

it(`Test button Logo`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`img`).click( )
})

it(`Test button version`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`.navbar-version`).click( )
})

it(`Test button version`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`.navbar-version`).click( )
})


it(`Test button 1 page`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`.active > .page-link`).click( )
})

it(`Test button 1 page`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`.active > .page-link`).click( )
})


it(`Test button 2 page`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(4) > .page-link`).click( )
})

it(`Test button 2 page`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`:nth-child(4) > .page-link`).click( )
})

it(`Test button 3 Page`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(5) > .page-link`).click( )
})

it(`Test button 3 Page`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`:nth-child(5) > .page-link`).click( )
})


it(`Test button fast forward`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(8) > .page-link`).click( )
})

it(`Test button fast forward`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`:nth-child(8) > .page-link`).click( )
})



it(`Test button last page`,()=>{
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    cy.get(`:nth-child(9) > .page-link`).click( )
})

it(`Test button last page`,()=>{
    cy.visit("https://sqlverifier-staging-08050d656f7a.herokuapp.com/");
    cy.get(`:nth-child(9) > .page-link`).click( )
})

