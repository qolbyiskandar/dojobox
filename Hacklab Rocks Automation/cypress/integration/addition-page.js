// untuk test halaman pada footer dan policy di register

describe('halaman tambahan', function(){
    // untuk test di halaman register, tiap test case akan dijalankan ini
    beforeEach(() =>{
        cy.visit('https://beta.hacklab.rocks/register')
    })
    
        // test halaman terms data policy (register)
        it('akses halaman terms data policy', function(){
            cy.get('[href="/"]').click()
        })
        
        // test halaman cookies policy (register)
        it('akses halaman cookies policy', function(){
            cy.get('[href=""]').click()
        })

        // test halaman about us (footer)
        it('akses halaman about us', function(){
            cy.get(':nth-child(2) > .hl-primary-font').click()
        })

        // test halaman privacy (footer)
        it('akses halaman privacy', function(){
            cy.get(':nth-child(3) > .hl-primary-font').click()
        })        

        // test halaman cookies (footer)
        it('akses halaman cookies', function(){
            cy.get(':nth-child(4) > .hl-primary-font').click()
        })

        // test halaman terms (footer)
        it('akses halaman terms', function(){
            cy.get(':nth-child(5) > .hl-primary-font').click()
        })

        // test halaman help (footer)
        it('akses halaman help', function(){
            cy.get(':nth-child(6) > .hl-primary-font').click()
        })

    // untuk error exception
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})