class Home{
    otherPage(){
        cy.wait(2000)
        //cy.xpath("//*[@id='app']/div/div/header/div/div[3]/a[2]").invoke('removeAttr', 'target','_self').click({force:true})
        cy.xpath("//*[@id='app']/div/div/header/div/div[3]/a[2]")
        .invoke('removeAttr','target').click()
       // Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
           // return false
         // })
        cy.wait(1000)
        cy.url().should('eq','https://acepta_peru.aivohelp.com/')
        cy.xpath("(//a[contains(text(),'¿Cuál es el valor del certificado digital?')])[1]").should('be.visible')
    }
    terminosCondiciones(){
        cy.xpath("//span[contains(text(),'Términos y condiciones')]").should('be.visible').click()
        cy.xpath("//span[contains(text(),'Términos y condiciones')]").should('be.visible')
        cy.url().should('eq', 'https://uat-autoriza-web-latam.smb.sovos.com/terms')
        cy.go('back')
        cy.xpath("//span[contains(text(),'Marketplace')]").should('be.visible')

        
    }
}

export default Home;