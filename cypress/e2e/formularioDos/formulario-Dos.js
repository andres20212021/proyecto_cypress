class formularioDos{
    ingresarBoleta(nombre,ap,am,dni,mail,direc){
            
            cy.xpath("//h4[contains(text(),'Datos de Boleta')]").should('be.visible')
            cy.xpath("//input[@placeholder='Nombres']").should('be.visible').type(nombre)
            cy.xpath("//input[@placeholder='Apellido paterno']").should('be.visible').type(ap)
            cy.xpath("//input[@placeholder='Apellido materno']").should('be.visible').type(am)
            cy.xpath("//input[@placeholder='Número DNI']").should('be.visible').type(dni)
            cy.xpath("//input[@placeholder='ejemplo@gmail.com']").should('be.visible').type(mail)
            cy.xpath("(//input[@type='text'])[8]").should('be.visible').type(direc)
    }
    selectCombobox(dep,prov,dist){
            cy.xpath("//input[@placeholder='Seleccionar departamento']").should('be.visible').click().type(dep)
            cy.xpath("//input[@placeholder='Seleccionar provincia']").should('be.visible').click().type(prov)
            cy.xpath("//input[@placeholder='Seleccionar distrito']").should('be.visible').click().type(dist)
           

    }
    buttonPay(){
        cy.xpath("//button[normalize-space(.)='Pagar']").should('be.visible').click()
    }
}

export default formularioDos;