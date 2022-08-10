import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'
import './acordion.css'


const Acordion = () => {
  return (
<Accordion className="fondo">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    ¿QUE ES SEUNGS?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card-body p-5"><p className="font-weight-light m-0">
                    SEUNGS ES UNA PLATAFORMA. 
                    QUE FACILITA LA CONEXION DE UNA EMPRESA CON UN CLIENTE. 
                    PERMITIENDO DE ESTA FORMALA VENTA DIRECTA DE UN PRODUCTO,
                    SERVICIO DETERMINADO SIN INTERMEDIARIOS Y CON PRODUCTOS 
                    MAS ECONOMICOS Y MAS RENTABLES
                    </p></div>
                </AccordionItemPanel>
            </AccordionItem>
           
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    AFILIACIÓN A SEUNGS
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card-body p-5"> <p className="font-weight-light m-0">
                    PERMITE ELEVAR TUS VENTAS AL 100% CON NUESTRA PLATAFORMA. 
                    CON LA CUOTA MENOR DE 0% COMICIONES,INTERESES,ETC. 
                    SOLO CON UNA CUOTA MINIMA POR EL USO DE NUESTRA PLATAFORMA 
                    PERMITIENDO ELEVAR TUS INGRESOS DE ENTREDA. LA CUOTA DE 
                    SERVICIO VARIA DEPENDIENDO DE TU EMPRESA, PRODUCTO Y 
                    MERCADO
                    </p></div>
                </AccordionItemPanel>
            </AccordionItem>
         
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    EMPRESAS DESTINADAS
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card-body p-5">  <p className="font-weight-light m-0">
                    PEQUEÑAS,MEDIANAS, GRANDES EMPRESAS, DISTRIBUIDORES, COMPAÑIAS, FABRICAS.
                    Y MUCHO MAS GENERALIZANDO TODO EL MERCADO EN UNA SOLA PLATAFORMA Y BRINDANDO 
                    LA MEJOR SOLUCION POSIBLE PARA SUS CLIENTES Y EMPRESAS.
                    </p></div>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    PLATAFORMA DE ENTREGAS SEUNGS!!
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card-body p-5"> <p className="font-weight-light m-0">
                    TENEMOS LA OPCION DE ENTREGAS SEGURA EN NUESTRA PLATAFORMA. 
                     PARA AQUEYAS EMPRESAS QUE NO TENGAS SISTEMAS DE ENVIOS PERSONALES 
                    100% SEGURO CONFIABLE Y RESPONSABLE PUEDAN IMPLETARLA, DE IGUAL MANERA
                    ES OPCIONAL POR SI LA EMPRESA NO LO DESEA IMPLEMENTAR.
                    </p></div>
                </AccordionItemPanel>
            </AccordionItem>
                   
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    PAGOS DE PARA LAS EMPRESAS
                    </AccordionItemButton>
                </AccordionItemHeading>
                
                <AccordionItemPanel>
               
                <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                    LOS PAGOS LLEGARAN DE FORMA EXACTA DONDE NO SE DESCONTARAN COMICIONES
                    ,NI DESCUENTOS EXTRAS ESTA POLITICA. ES DE REGLA ESTRICTA DE SEUNGS 
                     DONDE SE LLEGARAN LOS PAGOS TOTALES REALIZADOS MEDIANTE LA PLATAFORMA 
                     EL UNICO DESCUENTO SERA LA CUOTA FIJA MENSUAL ACORDADA CON EL PROPIETARIO.
                    </p>
                </div>

                </AccordionItemPanel>
            </AccordionItem>

                    <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    PAGOS DE PARA LAS EMPRESAS
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                    LOS PAGOS LLEGARAN DE FORMA EXACTA DONDE NO SE DESCONTARAN COMICIONES
                    ,NI DESCUENTOS EXTRAS ESTA POLITICA. ES DE REGLA ESTRICTA DE SEUNGS 
                     DONDE SE LLEGARAN LOS PAGOS TOTALES REALIZADOS MEDIANTE LA PLATAFORMA 
                     EL UNICO DESCUENTO SERA LA CUOTA FIJA MENSUAL ACORDADA CON EL PROPIETARIO.
                    </p></div>
                </AccordionItemPanel>
            </AccordionItem>     

        </Accordion>
  
   
  )
}

export default Acordion