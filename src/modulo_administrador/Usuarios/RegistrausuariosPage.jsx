import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import {Link}      from 'react-router-dom'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Registrarusuarios = () => {
  const [ nombre_usuario,setcodigoempresa ] = useState('')
  const [ clave_usuario,setNombreempresa ] = useState('')
  const [ email,setDireccionempresa ] = useState('')
  const [ pregunta_usuario,setCorreoempresa ] = useState('')
  const [ repuesta_usuario,setDni ] = useState('')
  const [ tipo_usuario,setTelefonoempresa ] = useState('')
 
  
  
  const navigate = useNavigate()

  const empresaCollection = collection(db, "Usuarios")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { 
	                                   nombre_usuario:nombre_usuario, 
	                                   clave_usuario:clave_usuario,
									   email:email,
									   pregunta_usuario:pregunta_usuario, 
									   repuesta_usuario:repuesta_usuario,
									   tipo_usuario:tipo_usuario
									   
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
			   <h4 className="card-title">Registro Usuarios</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Codigor">Nombre Usuario</label>
                        <input
                            value={nombre_usuario}
                            onChange={ (e) => setcodigoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Usuario ..."
                        />
                    </div>  
                    <div className="form-group">
                        <label className="nombrer">Clave Usuario</label>
                        <input
                            value={clave_usuario}
                            onChange={ (e) => setNombreempresa(e.target.value)} 
                            type="password"
                            className='form-control'
						    placeholder="Clave Usuario ..."
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="direccionr">Correo Electronico</label>
                        <input
                            value={email}
                            onChange={ (e) => setDireccionempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Correo Electronico ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Pregunta Usuario</label>
                        <input
                            value={pregunta_usuario}
                            onChange={ (e) => setCorreoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Pregunta Usuario ..."
                        />              
                    </div>
					
				<div className="form-group">
                        <label className="dnir">Repuesta Usuario</label>
                        <input
                            value={repuesta_usuario}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Repuesta Usuario ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Tipo Usuario</label>
                        <input
                            value={tipo_usuario}
                            onChange={ (e) => setTelefonoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Tipo Usuario  ..."
                        />              
                    </div>
					
					

                   <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
                   <Link class="nav-link" to="/Moduloadministrador/Listadousuarios" className='btn btn-primary mr-2'>Atras</Link>
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

export default Registrarusuarios



