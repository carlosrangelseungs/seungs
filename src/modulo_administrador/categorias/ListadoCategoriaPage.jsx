import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {collection,getDocs,getDoc,deleteDoc,doc}from 'firebase/firestore'
import {db} from '../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../Mheader'
import Mnav             from '../Mnav'
import Mfooter          from '../Mfooter'

const MySwal = withReactContent(Swal)

const ListadoCategoria = () => {
let contador=1;	
//1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [categorias,setCategorias ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
//2. referencia a la bd
  const  categoriaCollection=collection(db,"categoria_empresa")
//3. mostrar todos los documentos
  const getCategorias=async ()   => {
  const data=await getDocs(categoriaCollection)
   //console.log(data.docs)
   setCategorias(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deletecategoria = async (id) => {
   const categoriaDoc = doc(db, "categoria_empresa", id)
   await deleteDoc(categoriaDoc)
    getCategorias()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar esta categoria?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deletecategoria(id)               
        Swal.fire(
          'Eliminado!',
          'Registro Eliminado.',
          'Con Exito'
        )
      }
    })    
  }
  const columns= [
  
  {
	name:"Nombre Categoria ",
	selector:(row)=>row.nombre_categoria,
	sortable:true
	
  },
  
  {
	name:"Descripción Categoria",
	selector:(row)=>row.descripcion_categoria
  },
  
 
  {
	name:"Modificar",
	cell:(row)=><Link to={`/Editcategoria/${row.id}`} className="btn btn-light">Editar</Link>
  },
   {
	name:"Eliminar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Eliminar</button>
  }
  
  ]
//6 - usamos useEffect
  useEffect( () => {
    getCategorias()
    // eslint-disable-next-line
  }, [] )

  useEffect( () => {
    const result=categorias.filter((country)=>{
	  return country.nombre_categoria.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
    // eslint-disable-next-line
  }, [search] ) 
 
  return (
     <>
  <div className="container-scroller">
    <Mheader/>
	<div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
      
        
	<div className="main-panel">
      <div className="content-wrapper">
         <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Listado de Categorias</h4>
                       <DataTable 
							columns={columns} 
							data={filtereCountries} 
							fixedHeader 
							pagination
							fixedHeaderScrollHeight="450px"
							selecttablesRow
							selecttablesRowHighlight
							actions={<Link to="/Registrarcategoria" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    }
							highlightOnHover
							subHeader
							subHeaderComponent={<input 
												type="text" 
												placeholder="Buscar Categoria ..." 
												className="w25 form-control" 
												value={search}
												onChange={(e)=>setSearch(e.target.value)}/>
												}
							/>
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

export default ListadoCategoria