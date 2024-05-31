import {SelecionarCertificado} from "../comprar_cettificado/seleccionar-y-comprar";
import FormularioUno from "../validar_formulario/validar-formulario";
import formularioDos from "../formularioDos/formulario-Dos";
import mercadoPago from "../mercado_pago/mercado-pago";
import Home from "../home/home"
require('cypress-xpath');
require('cypress-plugin-tab');
import 'cypress-iframe';
const master = new SelecionarCertificado()
const formUno = new FormularioUno()
const formDos = new formularioDos()
const merPago = new mercadoPago()
      

describe('template spec', () => {
  
   // beforeEach(() => {
  
    //  cy.viewport(1280, 720)
     // cy.clearAllCookies()
     // cy.clearLocalStorage()
    //  cy.visit('https://uat-autoriza-web-latam.smb.sovos.com/marketplace')
   // })
  
    it('comprar un certificado y valida formulario',() => {
      //const master = new SelecionarCertificado()
      //const formUno = new FormularioUno()
      //const formDos = new formularioDos()
      //const merPago = new mercadoPago()
      
      master.selectCertDosPrametros("(//input[@placeholder='Tipo de producto'])[1]","//div[contains(text(),'Certificado SUNAT para persona natural con negocio')]")
      master.selectDosClick()
      master.clickButtonComprar()
      formUno.validarTitle()
      
      //formUno.validarFormularioUserName01()
      
      //formUno.validarFormularioUserName()

      //cy.reload()    
      formUno.ingresarDatos(56565656,"nombres","apEjemplo","amEjemplo","test@gmail.com","test@gmail.com")
      formUno.selectCheck()
      formDos.ingresarBoleta("nombre","apEjemplo","amEjemplo",45456735,"tes@gmail.com","calle test")
      formDos.selectCombobox('Amazonas','Chachapoyas{downArrow}{enter}','Chachapoyas{downArrow}{enter}')
      formUno.clickBoton()
      formDos.buttonPay()
      merPago.ingresarTarjeta()
      //cy.ingresar_campos(22,"aaaa","e","eeee","iiiii@gmail.com","iiiii@gmail.com")
      //formUno.validarForm("//div[contains(text(),'El campo DNI debe ser de 8 dígitos')]","El campo DNI debe ser de 8 dígitos")
      //cy.xpath("//div[contains(text(),'El campo DNI debe ser de 8 dígitos')]").should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
      //formUno.validarForm("//div[contains(text(),'El campo debe contener al menos 2 letras')]","El campo debe contener al menos 2 letras")
    })

     it('compra certificado con 2 parametros',()=>{
      const master = new SelecionarCertificado()
      const formUno = new FormularioUno()
      master.selectCertDosPrametros("(//input[@placeholder='Tipo de producto'])[1]","//div[contains(text(),'Certificado SUNAT para persona natural con negocio')]")
      master.selectDosClick()
      master.clickButtonComprar()
      formUno.ingresarDatos(56565656,"nombres","hernandez","hernandez","andres@gmail.com","andres@gmail.com")
      //cy.ingresar_campos(22,"aaaa","eeee","eeee","iiiii@gmail.com","iiiii@gmail.com")
      //formUno.validarForm("//div[contains(text(),'El campo DNI debe ser de 8 dígitos')]","El campo DNI debe ser de 8 dígitos")

     })

     it('compra certificado con 3 parametros',()=>{
      const master = new SelecionarCertificado()
      master.selectCertTresParametros("(//input[@placeholder='Tipo de producto'])[1]","//div[contains(text(),'Certificado SUNAT para persona jurídica o representante legal')]","#marketplace-0")
     })

     it.only('click preguntas frecuentes',()=>{
      const homeV = new Home()
      homeV.otherPage()

     })
     it('click terminos y condiciones',()=>{
      const homeV = new Home()
      homeV.terminosCondiciones()
      master.selectCertDosPrametros("(//input[@placeholder='Tipo de producto'])[1]","//div[contains(text(),'Certificado SUNAT para persona natural con negocio')]")
     })

   
  });