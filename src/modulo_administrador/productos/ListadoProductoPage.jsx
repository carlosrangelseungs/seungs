import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		deleteDoc,
		doc} from 'firebase/firestore'
import {db} from '../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../Mheader'
import Mnav             from '../Mnav'
import Mfooter          from '../Mfooter'

const MySwal = withReactContent(Swal)

const ListadoProducto  = () => {

///1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [productos,setProductos ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
//2. referencia a la bd
  const  productoCollection=collection(db,"producto")
//3. mostrar todos los documentos
  const getproducto=async ()   => {
  const data=await getDocs(productoCollection)
   //console.log(data.docs)
   setProductos(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deleteproducto = async (id) => {
   const productoDoc = doc(db, "producto", id)
   await deleteDoc(productoDoc)
    getproducto()
  }	 
    //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar este Producto?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteproducto(id)               
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
	name:"Codigo Producto",
	selector:(row)=>row.codigo_producto,
	sortable:true
	
  },
  
  {
	name:"Producto",
	selector:(row)=>row.nombre_producto
  },
 
  
  {
	name:"Desprción Producto",
	selector:(row)=>row.descripcion_producto
  },
  
  {
	name:"Precio",
	selector:(row)=>row.precio_producto
  },
  
  {
	name:"Cantidad",
	selector:(row)=>row.cantidad_producto
  },
  
  {
	name:"Modificar",
	cell:(row)=><Link to={`/Moduloadministrador/EditcProducto/${row.id}`} className="btn btn-light">Editar</Link>
  },
   {
	name:"Eliminar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Eliminar</button>
  }
  
  ]
  //6 - usamos useEffect
  useEffect( () => {
    getproducto()
    // eslint-disable-next-line
  }, [] )
  
    useEffect( () => {
    const result=productos.filter((country)=>{
	  return country.nombre_prodcto.toLowerCase().match(search.toLowerCase())
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
				<h4 className="card-title">Listado de Productos</h4>
				<DataTable 
				columns={columns} 
				data={filtereCountries} 
				fixedHeader 
				pagination
				fixedHeaderScrollHeight="450px"
				selecttablesRow
				selecttablesRowHighlight
				actions={<Link to="/Moduloadministrador/RegistraProducto" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    }
				highlightOnHover
				subHeader
				subHeaderComponent={<input 
				                    type="text" 
									placeholder="Buscar Productos ..." 
									className="w25 form-control" 
									value={search}
									onChange={(e)=>setSearch(e.target.value)}/>
									}
				/>
		          
		       </div>
              </div>		 
		     </div>
		   </div>
		    <Mfooter/> 
		  </div>
	    </div>
     </div>
  </div>
  </>
  )
}

export default ListadoProducto

