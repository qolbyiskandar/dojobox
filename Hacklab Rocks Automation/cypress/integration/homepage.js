// halaman untuk login akun

describe('login', function(){

    // untuk setiap test case akan menjalankan line berikut
    beforeEach(() =>{
        cy.login()
    })

Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})
})