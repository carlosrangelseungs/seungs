import { useEffect, useState }    from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {db} from '../../firebaseConfig/conexion_firebase'
import {Link}      from 'react-router-dom'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const EditRepartidores = () => {
  const [ dni_repartidor,setcodigoempresa ] = useState('')
  const [ nombre_repartidor,setNombreempresa ] = useState('')
  const [ apelldio_repartidor,setDireccionempresa ] = useState('')
  const [ fecha_nacimiento,setCorreoempresa ] = useState('')
  const [ direccion_repartidor,setDni ] = useState('')
  const [ telefono_repartidor,setTelefonoempresa ] = useState('')
  const [ sexo,setProfecion_empresa ] = useState('')
  const [ correo_repartidor,setCorreorepartidor ] = useState('')
  const [ numero_licencia,setNumerolicencia ] = useState('')
  const [ tipo_carro,setTipocarro ] = useState('')
  const [ numero_placa,setNumeroplaca ] = useState('')
    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const empresa = doc(db, "repartidor", id)
        const data = { 
		                 dni_repartidor:dni_repartidor, 
	                     nombre_repartidor:nombre_repartidor,
			             apelldio_repartidor:apelldio_repartidor,
						 fecha_nacimiento:fecha_nacimiento, 
					     direccion_repartidor:direccion_repartidor,
					     telefono_repartidor:telefono_repartidor,
						 sexo:sexo,
						 correo_repartidor:correo_repartidor,
                         numero_licencia:numero_licencia,
                         tipo_carro:tipo_carro,
                         numero_placa:numero_placa
					 }
        await updateDoc(empresa, data)
        //navigate('ListadoCategoria')
    }

    const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "repartidor", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setcodigoempresa(empresa.data().dni_repartidor)    
            setNombreempresa(empresa.data().nombre_repartidor)
			setDireccionempresa(empresa.data().apelldio_repartidor)    
            setCorreoempresa(empresa.data().fecha_nacimiento)
			setDni(empresa.data().direccion_repartidor)    
            setTelefonoempresa(empresa.data().telefono_repartidor)
			setProfecion_empresa(empresa.data().sexo) 
            setCorreorepartidor(empresa.data().correo_repartidor)
			setNumerolicencia(empresa.data().numero_licencia)    
            setTipocarro(empresa.data().tipo_carro)
			setNumeroplaca(empresa.data().numero_placa) 			
        }else{
            console.log('El repartidor no existe')
        }
    }

    useEffect( () => {
        getEmpresaById(id)
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
			   <h4 className="card-title">Editar Repartidor {nombre_repartidor}</h4>
                 <form className="forms-sample"onSubmit={update}>
                    <div className="form-group">
                        <label for="Codigor">Dni Repartidor</label>
                        <input
                            value={dni_repartidor}
                            onChange={ (e) => setcodigoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dni Repartidor ..."
                        />
                    </div>  
                    <div className="form-group">
                        <label className="nombrer">Nombre Repartidor</label>
                        <input
                            value={nombre_repartidor}
                            onChange={ (e) => setNombreempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Repartidor ..."
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="direccionr">Apelldio Repartidor</label>
                        <input
                            value={apelldio_repartidor}
                            onChange={ (e) => setDireccionempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Apelldio Repartidor ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Fecha Nacimiento</label>
                        <input
                            value={fecha_nacimiento}
                            onChange={ (e) => setCorreoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Fecha Nacimiento ..."
                        />              
                    </div>
					
				<div className="form-group">
                        <label className="dnir">Direccion Repartidor</label>
                        <input
                            value={direccion_repartidor}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Direccion Repartidor ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Telefono Repartidor</label>
                        <input
                            value={telefono_repartidor}
                            onChange={ (e) => setTelefonoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Telefono Repartidor ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="pr">Sexo</label>
                        <input
                            value={sexo}
                            onChange={ (e) => setProfecion_empresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Sexo ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="cr">Correo Repartidor</label>
                        <input
                            value={correo_repartidor}
                            onChange={ (e) => setCorreorepartidor(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder="Correo Repartidor ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="numr">Numero Licencia</label>
                        <input
                            value={numero_licencia}
                            onChange={ (e) => setNumerolicencia(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Numero licencia ..."
                        />              
                    </div>
					
						<div className="form-group">
                        <label className="tpr">Tipo Carro</label>
                        <input
                            value={tipo_carro}
                            onChange={ (e) => setTipocarro (e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Tipo Carro..."
                        />              
                    </div>

                     
						<div className="form-group">
                        <label className="nupr">Numero Placa</label>
                        <input
                            value={numero_placa}
                            onChange={ (e) => setNumeroplaca (e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Numero Placa..."
                        />              
                       </div>

                    <button type='submit' className='btn btn-primary mr-2'>Editar {nombre_repartidor} </button>
					<Link class="nav-link" to="/ListadoRepartidores" className='btn btn-primary mr-2'>Atras</Link>
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

export default  EditRepartidores




