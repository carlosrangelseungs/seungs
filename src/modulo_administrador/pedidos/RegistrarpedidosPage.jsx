import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import {Link}      from 'react-router-dom'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Registrarempresa = () => {
  const [ dni_repartidor,setcodigoempresa ] = useState('')
  const [ nombre_pedido,setNombreempresa ] = useState('')
  const [ descripcion_pedido,setDireccionempresa ] = useState('')
  const [ direccion_entrega,setCorreoempresa ] = useState('')
  const [ pago_entrega,setDni ] = useState('')
  const [ tipo_pago,setTelefonoempresa ] = useState('')
   //fecha
    let fecha = new Date();
    let nuevafecha = String(fecha.getDate()).padStart(2, '0') + '/' + String(fecha.getMonth() + 1).padStart(2, '0') + '/' + fecha.getFullYear()
  //Hora
  let hora = new Date();
  // obtener la hora en la configuración regional de EE. UU.
  let nuevahora = hora.toLocaleTimeString('en-US');

  const navigate = useNavigate()

  const empresaCollection = collection(db, "pedidos")

  const store = async (e) => {
    e.preventDefault()
	
    await addDoc( empresaCollection, { dni_repartidor:dni_repartidor, 
	                                   nombre_pedido:nombre_pedido,
									   descripcion_pedido:descripcion_pedido,
									   direccion_entrega:direccion_entrega, 
									   fecha_pedido:nuevafecha,
									   hora_entrega_pedido:nuevahora,
									   pago_entrega:pago_entrega,
									   tipo_pago:tipo_pago
									  
									   } )
    //navigate('/')
    //console.log(nuevahora)
	//console.log(nuevafecha)
   }

  return (
  <div className="container-scroller">
       <Mheader/>
      <div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
        <div className="main-panel">
    <div className='content-wrapper'>
        <div className='row'>
            <div className='col-md-6 grid-margin stretch-card'>
             <div className="card">
			  <div className="card-body">
			   <h4 className="card-title">Registro Pedidos</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Codigor"> Dni Repartidor</label>
                        <input
                            value={dni_repartidor}
                            onChange={ (e) => setcodigoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dni Repartidor ..."
                        />
                    </div>  
                    <div className="form-group">
                        <label className="nombrer">Nombre Pedido</label>
                        <input
                            value={nombre_pedido}
                            onChange={ (e) => setNombreempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Pedido ..."
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="direccionr">Descripción Pedido</label>
                        <input
                            value={descripcion_pedido}
                            onChange={ (e) => setDireccionempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Descripción Pedido ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Dirección Entrega</label>
                        <input
                            value={direccion_entrega}
                            onChange={ (e) => setCorreoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dirección Entrega ..."
                        />              
                    </div>
					
				<div className="form-group">
                        <label className="dnir">Precio Pedido</label>
                        <input
                            value={pago_entrega}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Precio Pedido ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Forma Pago</label>
                        <input
                            value={tipo_pago}
                            onChange={ (e) => setTelefonoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Forma Pago ..."
                        />              
                    </div>
					<button type='submit' className='btn btn-primary mr-2'>Guardar</button>
                    <Link class="nav-link" to="/ListadoPedidos" className='btn btn-primary mr-2'>Atras</Link>

				 </form>   
				</div>
			  </div>
            </div>
        </div>
	    </div>
     </div>
 </div>
    </div> 
  )
}

export default Registrarempresa