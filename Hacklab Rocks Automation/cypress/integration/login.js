// halaman untuk login akun

describe('login', function(){

        // //login melalui halaman register
        it('login dari halaman register', function(){
            cy.visit('https://beta.hacklab.rocks/register')
            cy.get('.text-center > .hl-font-link').click()
            cy.get('b').should('have.text','Login')
            cy.get('#email').type('mrdimbiezale@gmail.com').should('have.value','mrdimbiezale@gmail.com')
            cy.get('#password').type('mrdimbie').should('have.value','mrdimbie')
            cy.get('.btn').click()
        })

    // untuk setiap test case login akan menjalankan line berikut
    beforeEach(() =>{
        cy.visit('https://beta.hacklab.rocks/login')
    })

        // // login pertama kali dengan data valid
        it('login pertama kali dgn data valid', function(){
            cy.get('#email').type('mrdimbiezale@gmail.com').should('have.value','mrdimbiezale@gmail.com')
            cy.get('#password').type('mrdimbie').should('have.value','mrdimbie')
            cy.get('.btn').click()
            cy.get('b').should('contain','interest')
            // note: belum ketemu solusi untuk get isi di dalam multiple select containernya
             // setelahnya akan diarahkan ke halaman profile untuk dilengkapi
            // cy.get('[value="2D Artist"]').select()
        })

        // login dengan data valid
        it('registrasi dgn data valid', function(){
            cy.get('#email').type('mrdimbiezale@gmail.com').should('have.value','mrdimbiezale@gmail.com')
            cy.get('#password').type('mrdimbie').should('have.value','mrdimbie')
            cy.get('.btn').click()
            cy.get('.wrapper-card > .card > .card-body').should('contain','dimbie')
        })

        // login dengan data sembarang
        it('registrasi dgn data sembarang', function(){
            cy.get('#email').type('fre@gmail.com').should('have.value','fre@gmail.com')
            cy.get('#password').type('blahblahh').should('have.value','blahblahh')
            cy.get('.btn').click()
            cy.get('.Toastify__toast-body').should('have.text','Unauthorized')
        })

        // // login dengan data kosong
        it('registrasi dgn data kosong', function(){
            cy.get('.btn').click()
            cy.get(':nth-child(1) > .w-100 > .text-danger').should('contain','required')
            cy.get(':nth-child(2) > .w-100 > .text-danger').should('contain','required')
        })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})