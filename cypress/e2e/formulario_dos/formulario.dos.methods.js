class FormularioDosClass{
    get ={
        dniInput:()=> cy.get('input[placeholder="Número DNI"]'),
        usernameInput:()=> cy.get('input[autocomplete="name"]'),
        appInput:()=> cy.get('input[placeholder="Apellido Paterno"]'),
        apmInput:()=> cy.get('input[placeholder="Apellido Materno"]'),
        mailInput:()=> cy.get('input[type="email"]').eq(0), 
        mailDosInput:()=> cy.get('input[type="email"]').eq(1)
    }
      // txtDni='input[placeholder="Número DNI"]'

    ingresarDni(dni){
        this.get.dniInput().type(dni)
    }
    ingresarUserName(name){
        this.get.usernameInput().type(name)
    }
    ingresarApp(app){
        this.get.appInput().type(app)
    }
    ingresarApm(Apm){
        this.get.ApmInput().type(Apm)
    }
    ingresarmMail(mail){
        this.get.mailInput().type(mail)
    }
    ingresarmMailDos(mailDos){
        this.get.mailDosInput().type(mailDos)
    }

    validarFormularioDos(){
       // cy.xpath("//input[@placeholder='Nombres']").validarCampoFormulario()
        this.get.usernameInput().validarCampoFormulario()
    }
}

export const formularioDos = new FormularioDosClass;
