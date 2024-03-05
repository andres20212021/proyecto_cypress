export class SelecionarCertificado{
    selectCertTresParametros(selector1,selector2,selector3){
        cy.xpath(selector1).should('be.visible').click()
        cy.xpath(selector2).should('be.visible').click()
        cy.get(selector3).should('be.visible').click()  
        
    }

    clickButtonComprar(){
        cy.xpath('//span[contains(text(),"Comprar")]').should('exist')
        cy.xpath('//span[contains(text(),"Comprar")]').click()
    }

    selectCertDosPrametros(selector1,selector2){
        cy.contains('p','Permite firmar documentos XML según los estándares que SUNAT exige en el Perú para emitir comprobantes de pago electrónicos como facturas, boletas, notas de crédito y débito así como comprobantes de percepción y retención.').then(title=>{
            cy.log(title.attr('class'))
        })
        cy.xpath(selector1).should('be.visible').click()
        cy.xpath(selector2).should('be.visible').click()
        cy.xpath('(//button[normalize-space(.)="Seleccionar"])[1]').should('be.visible').click()
       
    }
    
    selectDosClick(){
        for(let x=1; x<=3; x++){
            cy.xpath("//i[contains(text(),'add')]").click({x})      
        }   
        
    }
   
}

//export default SelecionarCertificado;