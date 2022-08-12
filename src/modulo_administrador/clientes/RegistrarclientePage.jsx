import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Registrarcliente = () => {
  const [ nombre_cliente,setNombrecliente ] = useState('')
  const [ apellidos_cliente,setApellidoscliente ] = useState('')
  const [ dni_cliente,setDni ] = useState('')
  const [ direccion_cliente,setDireccioncliente ] = useState('')
  const [ telefono_cliente,setTelefonocliente ] = useState('')
  const [ correo_cliente,setCorreocliente ] = useState('')
  const navigate = useNavigate()

  const clienteCollection = collection(db, "clientes")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( clienteCollection, { nombre_cliente:nombre_cliente, 
	                                   apellidos_cliente:apellidos_cliente,
									   dni_cliente:dni_cliente,
									   direccion_cliente:direccion_cliente,
									   telefono_cliente:telefono_cliente,
									   correo_cliente:correo_cliente
									  } )
    //navigate('/')
    //console.log(e.target[0].value)
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
			   <h4 className="card-title">Registro Clientes</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Nombrer">Nombre Cliente</label>
                        <input
                            value={nombre_cliente}
                            onChange={ (e) => setNombrecliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Cliente ..."
                        />
                    </div>  
                    <div className="form-group">
                        <label className="aper">Apellido Cliente</label>
                        <input
                            value={apellidos_cliente}
                            onChange={ (e) => setApellidoscliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Apellido Cliente ..."
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="Dnic">Dni Cliente</label>
                        <input
                            value={dni_cliente}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dni Cliente ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="dirr">Dirección Cliente</label>
                        <input
                            value={direccion_cliente}
                            onChange={ (e) => setDireccioncliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dirección Cliente ..."
                        />              
                    </div>
					
			
					
					<div className="form-group">
                        <label className="telefonor">Telefono Cliente</label>
                        <input
                            value={telefono_cliente}
                            onChange={ (e) => setTelefonocliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Telefono Clientes ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="correor">Correo Cliente</label>
                        <input
                            value={correo_cliente}
                            onChange={ (e) => setCorreocliente(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder="Correo Cliente ..."
                        />              
                    </div>
					
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
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

export default Registrarcliente