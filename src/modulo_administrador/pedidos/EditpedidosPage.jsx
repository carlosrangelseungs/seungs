import { useEffect, useState }    from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {db} from '../../firebaseConfig/conexion_firebase'
import {Link}      from 'react-router-dom'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Editpedidos = () => {
  const [ dni_repartidor,setcodigoempresa ] = useState('')
  const [ nombre_pedido,setNombreempresa ] = useState('')
  const [ descripcion_pedido,setDescripcionpedido ] = useState('')
  const [ direccion_entrega,setDireccionpedido ] = useState('')
  const [ fecha_pedido,setFechapedido ] = useState('')
  const [ hora_entrega_pedido,setHoraentregapedido ] = useState('')
  const [ pago_entrega,setDni ] = useState('')
  const [ tipo_pago,setTelefonoempresa ] = useState('')
  const navigate = useNavigate()    
  const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const empresa = doc(db, "pedidos", id)
        const data = { 
		                dni_repartidor:dni_repartidor, 
	                    nombre_pedido:nombre_pedido,
					    descripcion_pedido:descripcion_pedido,
						direccion_entrega:direccion_entrega, 
						fecha_pedido:fecha_pedido,
						hora_entrega_pedido:hora_entrega_pedido,
					    pago_entrega:pago_entrega,
					    tipo_pago:tipo_pago
					}
        await updateDoc(empresa, data)
        //navigate('ListadoCategoria')
    }

    const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "pedidos", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setcodigoempresa(empresa.data().dni_repartidor)    
            setNombreempresa(empresa.data().nombre_pedido)
			setDescripcionpedido(empresa.data().descripcion_pedido) 
            setDireccionpedido(empresa.data().direccion_entrega)    			
            setFechapedido(empresa.data().fecha_pedido)
			setHoraentregapedido(empresa.data().hora_entrega_pedido)    
            setDni(empresa.data().pago_entrega)
			setTelefonoempresa(empresa.data().tipo_pago)    
        }else{
            console.log('El pedido no existe')
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
			   <h4 className="card-title">Editar Categoria {nombre_pedido}</h4>
                 <form className="forms-sample"onSubmit={update}>
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
                        <label className="nombrer">Editar Pedido</label>
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
                            onChange={ (e) => setDescripcionpedido(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Descripción Pedido ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Dirección Entrega</label>
                        <input
                            value={direccion_entrega}
                            onChange={ (e) => setDireccionpedido(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dirección Entrega ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="fechar">Fecha Entrega</label>
                        <input
                            value={fecha_pedido}
                            onChange={ (e) => setFechapedido(e.target.value)} 
                            type="text"
                            className='form-control'
						    disabled
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="horar">Hora Entrega</label>
                        <input
                            value={hora_entrega_pedido}
                            onChange={ (e) => setHoraentregapedido(e.target.value)} 
                            type="text"
                            className='form-control'
						    disabled
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
                    <button type='submit' className='btn btn-primary mr-2'>Editar {nombre_pedido}</button>
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

export default  Editpedidos





