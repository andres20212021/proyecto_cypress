class mercadoPago{
    ingresarTarjeta(){
        cy.wait(1000)
        cy.xpath("(//button[@type='button'])[2]",{timeout:1000}).should('be.visible').click()
        cy.xpath("//span[normalize-space(.)='Nueva Tarjeta']").should('be.visible').click()
        cy.get("#fullname").should('be.visible').type("APRO")
        cy.wait(1000)
        cy.xpath("//iframe[@name='cardNumber']").its('0.contentDocument.body').then(cy.wrap).find('#cardNumber').should('be.visible').type(4009175332806176)
        cy.xpath("//iframe[@name='expirationDate']").its('0.contentDocument.body').then(cy.wrap).find('#expirationDate').should('be.visible').type(1125)
        cy.xpath("//iframe[@name='securityCode']").its('0.contentDocument.body').then(cy.wrap).find('#securityCode').should('be.visible').type(123)
        cy.get('#submit').click()
        cy.get('#number').type(34343434)
        cy.get('#submit').click()
        cy.xpath('//p[normalize-space(.)="Sin cuotas"]').click()
        cy.xpath('//input[@type="email"]').type("andreshernandez@sovos.com")
        cy.get('#pay').click()
        //cy.wait(1000)
        cy.xpath('//a[contains(text(),"Volver al sitio")]').should('be.visible',{timeout:1000}).click()
        cy.get('.mt-4').should('be.visible','Lo siento, algo ha salido mal, por favor inténtalo nuevamente')
        cy.get('[href="/marketplace"] > span').click()
        cy.wait(4000)
        cy.go('back')
        cy.get('.mt-4').should('be.visible','Lo siento, algo ha salido mal, por favor inténtalo nuevamente')
        
        


    }

}
export default mercadoPago;