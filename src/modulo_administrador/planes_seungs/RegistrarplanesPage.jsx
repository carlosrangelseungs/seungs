import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import {Link}     from 'react-router-dom'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Registrarcategoria = () => {
  const [ nombre_plan, setNombreplan ] = useState('')
  const [ precio_plan, setPrecioplan ] = useState('')
  const [ descripcion_plan, setDescripcionplan ] = useState('')
  const navigate = useNavigate()

  const planesCollection = collection(db, "adquision_plan")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( planesCollection, {  nombre_plan:nombre_plan, precio_plan:precio_plan,descripcion_plan:descripcion_plan } )
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
			   <h4 className="card-title">Registro Planes</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Categoriar">Nombre Plan</label>
                        <input
                            value={nombre_plan}
                            onChange={ (e) => setNombreplan(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Plan ..."
                        />
                    </div>  
					<div className="form-group">
                        <label for="Categoriar">Precio Plan</label>
                        <input
                            value={precio_plan}
                            onChange={ (e) => setPrecioplan(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Plan Precio ..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="descripcionr">Descripción Plan</label>
                        <input
                            value={descripcion_plan}
                            onChange={ (e) => setDescripcionplan(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Descripción Plan ..."
                        />              
                    </div>  
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
                    <Link class="nav-link" to="/Listadoplanes" className='btn btn-primary mr-2'>Atras</Link>
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

export default Registrarcategoria