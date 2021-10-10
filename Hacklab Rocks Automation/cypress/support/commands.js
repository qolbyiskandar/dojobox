// untuk mengunjungi website hacklab rocks beta
Cypress.Commands.add('mainUrl',()=>{
    cy.visit('https://beta.hacklab.rocks/home')
})

Cypress.Commands.add('login',()=>{
    cy.get('#email').type('mrdimbiezale@gmail.com').should('have.value','mrdimbiezale@gmail.com')
    cy.get('#password').type('mrdimbie').should('have.value','mrdimbie')
    cy.get('.btn').click()
})

