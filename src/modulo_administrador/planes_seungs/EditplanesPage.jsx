import { useEffect, useState }    from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {db} from '../../firebaseConfig/conexion_firebase'
import {Link}     from 'react-router-dom'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Editcategoria = () => {
  const [ nombre_plan, setNombreplan ] = useState('')
  const [ precio_plan, setPrecioplan ] = useState('')
  const [ descripcion_plan, setDescripcionplan ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const planes = doc(db, "adquision_plan", id)
        const data = {nombre_plan:nombre_plan, precio_plan:precio_plan,descripcion_plan:descripcion_plan}
        await updateDoc(planes, data)
        //navigate('ListadoCategoria')
    }

    const getPlanesById = async (id) => {
        const planes = await getDoc( doc(db, "adquision_plan", id) )
        if(planes.exists()) {
            //console.log(product.data())
            setNombreplan(planes.data().nombre_plan)    
            setPrecioplan(planes.data().precio_plan)
			setDescripcionplan(planes.data().descripcion_plan)
        }else{
            console.log('El plan no existe')
        }
    }

    useEffect( () => {
        getPlanesById(id)
        // eslint-disable-next-line
    }, [])
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
			   <h4 className="card-title">Editar Plan {nombre_plan}</h4>
                 <form className="forms-sample"onSubmit={update}>
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
                    <button type='submit' className='btn btn-primary mr-2'>Editar {nombre_plan}</button>
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

export default  Editcategoria