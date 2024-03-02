describe("tests for sqlverifier-live", ()=>{
    it("First test", ()=>{
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
    })
})

it("Test button account",()=>{
    cy.get(`[data-cy="accountMenu"]`).click( )
})

it("Test button Language English",()=>{
    cy.get(`[data-cy="accountMenu"]`).click( )
})

it("Test button Home",()=>{
    cy.get(".d-flex > :nth-child(2) > span").click( )
})

it("Test button Brand",()=>{
    cy.get(".brand-title > span").click( )
})

it("Test button Logo",()=>{
    cy.get("img").click( )
})

it("Test button version",()=>{
    cy.get(".navbar-version").click( )
})

it("Test button 1 page",()=>{
    cy.get(".active > .page-link").click( )
})

it("Test button 2 page",()=>{
    cy.get(":nth-child(4) > .page-link").click( )
})

it("Test button 3 Page",()=>{
    cy.get(":nth-child(5) > .page-link").click( )
})

it("Test button fast forward",()=>{
    cy.get(":nth-child(8) > .page-link").click( )
})

it("Test button last page",()=>{
    cy.get(":nth-child(9) > .page-link").click( )
})
