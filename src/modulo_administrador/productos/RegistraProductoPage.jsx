import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link}      from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const RegistraProducto = () => {
  const [ codigo_producto, setCodigoproducto ] = useState('')
  const [ nombre_producto, setNombreproducto ] = useState('')
  const [ descripcion_producto, setDescripcionproducto ] = useState('')
  const [ precio_producto, setPrecioproducto ] = useState('')
  const [ cantidad_producto, setCantidadproducto] = useState('')
  const navigate = useNavigate()

  const categoriaCollection = collection(db, "producto")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( categoriaCollection, { codigo_producto:codigo_producto, 
	                                     nombre_producto:nombre_producto,
										 descripcion_producto:descripcion_producto,
										 precio_producto:precio_producto,
										 cantidad_producto:cantidad_producto
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
			   <h4 className="card-title">Registro Producto</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Codigor">Codigo Producto</label>
                        <input
                            value={codigo_producto}
                            onChange={ (e) => setCodigoproducto(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Codigo Producto ..."
							
							required
                        />
                    </div>  
                    <div className="form-group">
                        <label className="nombrer">Nombre Producto</label>
                        <input
                            value={nombre_producto}
                            onChange={ (e) => setNombreproducto(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Producto ..."
							required
                        />              
                    </div>  
					
					 <div className="form-group">
                        <label className="descripcionr">Descripción Producto</label>
                        
						  <textarea
                            value={descripcion_producto}
                            onChange={ (e) => setDescripcionproducto(e.target.value)} 
                            className='form-control'
						    placeholder="Descripción Producto ..."
						    required
                        />  
						     
                    </div> 
					
					
					
				   <div className="form-group">
                        <label className="precio">Precio Producto</label>
                        <input
                            value={precio_producto}
                            onChange={ (e) => setPrecioproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Precio Producto ..."
                            required
						/>              
                    </div> 
					
					 <div className="form-group">
                        <label className="cantidadr">Cantidad Producto</label>
                        <input
                            value={cantidad_producto}
                            onChange={ (e) => setCantidadproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Cantidad Producto ..."
                            required
						/>   
						
                    </div> 
					
				<button type='submit' className='btn btn-primary mr-2'>Guardar</button>
                <Link class="nav-link" to="/Moduloadministrador/ListadoProducto" className='btn btn-primary mr-2'>Atras</Link>
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

export default RegistraProducto

