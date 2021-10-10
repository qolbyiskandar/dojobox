// halaman untuk mendaftarkan akun

describe('register', function(){

        //register melalui halaman login
        it('registrasi dari halaman login', function(){
            cy.visit('https://beta.hacklab.rocks/login')
            cy.get('.text-center > .hl-font-link').click()
            cy.get('.ast-custom-button').should('have.text','Daftar Sekarang!').click()
        })
    
    // untuk setiap test case register akan menjalankan line berikut
    beforeEach(() =>{
        cy.visit('https://beta.hacklab.rocks/register')
    })
    
        // register dengan data valid
        it('registrasi dgn data valid', function(){
            cy.get('#name').type('dimbie').should('have.value','dimbie')
            cy.get('#phone_number').type('0896001999').should('have.value','0896001999')
            cy.get('#email').type('mrdimbiezale@gmail.com').should('have.value','mrdimbiezale@gmail.com')
            cy.get('#password').type('mrdimbie').should('have.value','mrdimbie')
            cy.get('.btn').click()
            cy.get('.Toastify__toast-body > div').should('contain','Congratulations!')
            // proses manual untuk melihat email (sudah diverifikasi)
        })

        // register dengan data yang sudah ada
        it('registrasi dgn data yang sudah ada', function(){
            cy.get('#name').type('dimbie').should('have.value','dimbie')
            cy.get('#phone_number').type('0896001999').should('have.value','0896001999')
            cy.get('#email').type('mrdimbiezale@gmail.com').should('have.value','mrdimbiezale@gmail.com')
            cy.get('#password').type('mrdimbie').should('have.value','mrdimbie')
            cy.get('.btn').click()
            cy.get(':nth-child(2) > .w-100 > .text-danger').should('contain','has already been taken.')
            cy.get(':nth-child(3) > .w-100 > .text-danger').should('contain','has already been taken.')
        })

        // register dengan data sembarang
        it('registrasi dgn data sembarang', function(){
            cy.get('#name').type('nananananana049o[-=;.')
            cy.get('#phone_number').type('ady6[[[0896001000')
            cy.get('#email').type('ninoy94[]/;32ewdhg')
            cy.get('#password').type('abc')
            cy.get('.btn').click()
            cy.get(':nth-child(2) > .w-100 > .text-danger').should('have.text','The phone number must be a number.')
            cy.get(':nth-child(3) > .w-100 > .text-danger').should('have.text','The email format is invalid.')
            cy.get(':nth-child(4) > .w-100 > .text-danger').should('have.text','The password must be at least 8 characters.')
        })

        // register dengan data kosong
        it('registrasi dgn data kosong', function(){
            cy.get('.btn').click()
            cy.get(':nth-child(1) > .w-100 > .text-danger').should('contain','required')
            cy.get(':nth-child(2) > .w-100 > .text-danger').should('contain','required')
            cy.get(':nth-child(3) > .w-100 > .text-danger').should('contain','required')
            cy.get(':nth-child(4) > .w-100 > .text-danger').should('contain','required')
        })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})