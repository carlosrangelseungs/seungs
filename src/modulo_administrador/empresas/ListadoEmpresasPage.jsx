import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {collection,getDocs,getDoc,deleteDoc,doc}from 'firebase/firestore'
import {db} from '../../firebaseConfig/conexion_firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../Mheader'
import Mnav             from '../Mnav'
import Mfooter          from '../Mfooter'

const MySwal = withReactContent(Swal)

const ListadoEmpresas  = () => {

///1.configuramos los hooks
  const [empre,setEmpresas ]=useState([])
//2. referencia a la bd
  const  empresaCollection=collection(db,"empresas")
//3. mostrar todos los documentos
  const getEmpresas=async ()   => {
  const data=await getDocs(empresaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deleteempresa = async (id) => {
   const empresaDoc = doc(db, "empresas", id)
   await deleteDoc(empresaDoc)
    getEmpresas()
  }	 
    //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar esta Empresa?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteempresa(id)               
        Swal.fire(
          'Eliminado!',
          'Registro Eliminado.',
          'Con Exito'
        )
      }
    })    
  }
  //6 - usamos useEffect
  useEffect( () => {
    getEmpresas()
    // eslint-disable-next-line
  }, [] )
  return (
     <>
  <div className="container-scroller">
    <Mheader/>
	<div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
        <div className="main-panel">
	<div className="main-panel">
      <div className="content-wrapper">
         <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Listado de Categorias</h4>
                     <div className="table-responsive pt-3">
                        <div className="d-grid gap-2">
                          <Link to="/Registrarempresa" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    
                        </div>
					 <table className="table table-bordered">
                         <thead>
                                <tr>
                                <th>
                                    Nr
                                </th>
                                <th>
                                   Codigo 
                                </th>
								 <th>
                                   Empresas
                                </th>
								 <th>
                                  Correo 
                                </th>
								 <th>
                                  Dirección 
                                </th>
								<th>
                                  Telefono
                                </th>
								<th>
                                  Dni
                                </th>
								<th>
                                  Profesión Empresa
                                </th>
                                <th colSpan={2}>
                                   Elija una Opción
                                </th>
                                </tr>
                         </thead>
                       
					    <tbody>
                         
						 { empre.map( (empresa) => (
                            <tr key={empresa.id}>
							   <td>{}</td>
							   <td>{empresa.codigo_empresa}</td>
                               <td>{empresa.nombre_empresa}</td>
							   <td>{empresa.correo_empresa}</td>
							   <td>{empresa.direccion_empresa}</td>
							   <td>{empresa.telefono_empresa}</td>
							   <td>{empresa.dni}</td>
							   <td>{empresa.profecion_empresa}</td>
							   <td><Link to={`/Editempresa/${empresa.id}`} className="btn btn-light">Editar</Link></td>
							   <td><button onClick={ () => { confirmDelete(empresa.id) } } className="btn btn-danger">Eliminar</button></td>
                            </tr>                
                          ) ) }
						    
						  
						  
                         </tbody>
						
                        </table>   
                     </div>
                   </div>
                </div>
             </div>
          </div>
          </div>
    </div>
	 <Mfooter/>  
          </div>     
      </div>
    </div>
	 </>
  )
}

export default ListadoEmpresas