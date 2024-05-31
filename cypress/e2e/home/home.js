class Home{
    otherPage(){
        cy.wait(2000)
        //cy.xpath("//*[@id='app']/div/div/header/div/div[3]/a[2]").invoke('removeAttr', 'target','_self').click({force:true})
        //cy.get('[href="https://acepta_peru.aivohelp.com"] > span').invoke('removeAttr','target').click()
         cy.xpath("//*[@id='app']/div/div/header/div/div[3]/a[2]")
        .invoke('removeAttr','target').click()
       // Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
           // return false
         // })
         cy.wait(2000)
         //cy.window().then((loc) => {
          // console.log('dgdgdgddddd')
           // console.log(loc)
           
         // })
         cy.origin("https://acepta_peru.aivohelp.com/",()=>{
            cy.url().should('eq','https://acepta_peru.aivohelp.com/');
            
         })
        //este es un comentario para la rama 1
        
        //cy.get('a[href*="/article/cual-es-el-valor-del-certificado-digital/"]').should('be.visible')
        //cy.xpath('/html/body/app-help/main/app-tags/app-tag-cards/div/section[1]/article[1]/mat-card/mat-card-content/nav/ul/li[1]/a').should('be.visible')
        //cy.xpath("(//a[contains(text(),'¿Cuál es el valor del certificado digital?')])[1]").should('be.visible')
    }
    terminosCondiciones(){
        cy.xpath("//span[contains(text(),'Términos y condiciones')]").should('be.visible').click()
        //cy.xpath("//span[contains(text(),'Términos y condiciones')]").should('be.visible')
        cy.url().should('eq', 'https://uat-autoriza-web-latam.smb.sovos.com/terms')
        cy.wait(3000)
        cy.go('back')
        cy.xpath("//span[contains(text(),'Marketplace')]").should('be.visible')

        
    }
}

export default Home;