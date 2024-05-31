class FormularioUno{

    ingresarDatos(dni,nombre,apellido1,apellido2,email1,email2){
         
            cy.xpath("//input[@placeholder='Número DNI']").should('be.visible').type(dni)
            cy.xpath("//input[@placeholder='Número DNI']").should("contain.value",56565656)
            cy.xpath("//input[@placeholder='Nombres']").should('be.visible').type(nombre)
        // valida el texto del campo que ingresamos 
            cy.xpath("//input[@placeholder='Nombres']").should("have.value","nombres")
            cy.xpath("//input[@placeholder='Apellido Paterno']").should('be.visible').type(apellido1)
            cy.xpath("//input[@placeholder='Apellido Materno']").should('be.visible').type(apellido2)
            cy.xpath("(//input[@placeholder='ejemplo@gmail.com'])[1]").should('be.visible').type(email1)
            cy.xpath("(//input[@placeholder='ejemplo@gmail.com'])[2]").should('be.visible').type(email2)
    }

    clickBoton(){
        cy.contains("[type='button']","Continuar").should("be.visible").then(()=>{
            cy.xpath("//button[normalize-space(.)='Continuar']").click() 
        })
        //cy.xpath("//button[normalize-space(.)='Continuar']").click()
    }

    validarForm(selector,men){
        cy.xpath(selector).should('be.visible').then((val)=>{
            let dato=val.text()
            let mensaje=men
            //cy.get(mensaje).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
            expect(dato).to.equal(mensaje)
        })
    }

    validarTitle(){
        cy.xpath("//h1[contains(text(),'Te queremos conocer')]").invoke("text").as("title")
        cy.get("@title").should("contain","Te queremos conocer")
        cy.xpath("//h1[contains(text(),'Te queremos conocer')]").should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('.pt-0 > .text-center').invoke("text").as("titleDos")
        cy.get("@titleDos").should("contain","Completa con tus datos para continuar la compra.")
        cy.xpath("//h1[normalize-space(.)='Te queremos conocer']").contains("Te queremos conocer")
        cy.xpath("//h1[normalize-space(.)='Te queremos conocer']").then((e)=>{
            cy.log(e.text())
            let textos =e.text()
           // textos.eq("Te queremos conocer")

        })
    }

    selectCheck(){
        //cy.get('input[type="checkbox"]').eq(1).check()
        cy.xpath("//label[normalize-space(.)='Declaro que todos los datos ingresados son correctos']").should('be.visible').click()
        cy.xpath("//*[@id='app']/div/div/main/div/div/section/div/div[1]/div/span/div/div[6]/div[1]/span[3]/div/div/div/div").should('be.visible').click()
        cy.xpath("//button[normalize-space(.)='Continuar']").should('be.visible').click({force:true})

    }

    validarFormularioUserName(){
        cy.xpath("//input[@placeholder='Nombres']").type('test1')
        cy.xpath('//div[contains(text(),"El campo debe contener solo letras")]').should('be.visible')
        cy.xpath("//input[@placeholder='Nombres']").clear()
        cy.xpath("//input[@placeholder='Nombres']").should('be.visible').type(6666)
        cy.xpath('//div[contains(text(),"El campo debe contener solo letras")]').should('be.visible')
        cy.xpath("//input[@placeholder='Nombres']").clear()
        cy.xpath("//input[@placeholder='Nombres']").type('t')
        cy.xpath('//div[contains(text(),"El campo debe contener al menos 2 letras")]').should('be.visible')
        //solo estoy validado un solo campo que es nombre faltaria todos los otros del formulario que 
        //tiene otras validaciones 
        

    
    }
    validarFormularioUserName01(){


        cy.xpath("//input[@placeholder='Nombres']").validarCampoFormulario()

        
        cy.xpath("//input[@placeholder='Apellido Paterno']").validarCampoFormulario()
        cy.xpath("//input[@placeholder='Apellido Materno']").validarCampoFormulario()
    }

   
}

export default FormularioUno;