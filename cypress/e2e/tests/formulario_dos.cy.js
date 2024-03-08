import {SelecionarCertificado} from "../comprar_cettificado/seleccionar-y-comprar";
import FormularioUno from "../validar_formulario/validar-formulario";
import {formularioDos} from "../formulario_dos/formulario.dos.methods"

const master = new SelecionarCertificado()
const formUno = new FormularioUno()


describe('ingreso formulario dos con clases', () => {
    it.only('formulario dos clases',() => {
        master.selectCertDosPrametros("(//input[@placeholder='Tipo de producto'])[1]","//div[contains(text(),'Certificado SUNAT para persona natural con negocio')]")
        master.selectDosClick()
        master.clickButtonComprar()
        formUno.validarTitle()
        formularioDos.ingresarDni(65656565)



      })

})
