import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import  Inicio               from  './Inicio/Inicio'
import  Servicios            from  './Servicios/Servicios'
import  Productos            from  './Productos/Productos' 
import  Contacto             from  './Contacto/Contacto'
import  IniciarSeccion       from  './IniciarSeccion/IniciarSeccion'
import  RegistroUsuario      from  './RegistroUsuario/RegistroUsuario'

import  Moduloadministrador  from  './modulo_administrador/Moduloadministrador'
import  ListadoCategoria     from  './modulo_administrador/categorias/ListadoCategoriaPage'
import  Registrarcategoria   from  './modulo_administrador/categorias/RegistrarcategoriaPage'
import  Editcategoria        from  './modulo_administrador/categorias/EditcategoriaPage'

import  ListadoEmpresas      from  './modulo_administrador/empresas/ListadoEmpresasPage'
import  Registrarempresa     from  './modulo_administrador/empresas/RegistrarempresaPage'
import  Editempresa          from  './modulo_administrador/empresas/EditempresaPage'

import  ListadoClientes      from  './modulo_administrador/clientes/ListadoClientesPage'
import  Registrarcliente     from  './modulo_administrador/clientes/RegistrarclientePage'
import  Editecliente         from  './modulo_administrador/clientes/EditeclientePage'


import  Listadoplanes        from  './modulo_administrador/planes_seungs/ListadoplanesPage'
import  Registrarplanes      from  './modulo_administrador/planes_seungs/RegistrarplanesPage'
import  Editplanes           from  './modulo_administrador/planes_seungs/EditplanesPage'


import  ListadoProducto      from  './modulo_administrador/productos/ListadoProductoPage'
import  RegistraProducto     from  './modulo_administrador/productos/RegistraProductoPage'
import  EditcProducto        from  './modulo_administrador/productos/EditcProductoPage'

import  ListadoRepartidores    from  './modulo_administrador/Repartidores/ListadoRepartidoresPage'
import  RegistrarRepartidores  from  './modulo_administrador/Repartidores/RegistraRepartidoresPage'
import  EditRepartidores       from  './modulo_administrador/Repartidores/EditRepartidoresPage'

import  ListadoPedidos         from  './modulo_administrador/pedidos/ListadoPedidosPage'
import  Editpedidos            from  './modulo_administrador/pedidos/EditpedidosPage'
import  Registrarpedidos       from  './modulo_administrador/pedidos/RegistrarpedidosPage'

import  Listadousuarios        from  './modulo_administrador/Usuarios/ListadosusuariosPage'
import  Editusuarios           from  './modulo_administrador/Usuarios/EditusuariosPage'
import  Registrarusuarios      from  './modulo_administrador/Usuarios/RegistrausuariosPage'



function App() {
  return (

    <Router>
    
    <Routes>
      <Route path="/"                                               element={<Inicio />} />
      <Route path="/Productos"                                      element={<Productos />} />
      <Route path="/Servicios"                                      element={<Servicios />} />
      <Route path="/Contacto"                                       element={<Contacto />} />
      <Route path="/IniciarSeccion"                                 element={<IniciarSeccion />} />
      <Route path="/RegistroUsuario"                                element={<RegistroUsuario />} />
      <Route path="/Moduloadministrador"                            element={<Moduloadministrador />} />
	  <Route path="/Moduloadministrador/ListadoCategoria"           element={<ListadoCategoria />} />
	  <Route path="/Moduloadministrador/Registrarcategoria"         element={<Registrarcategoria />} />
	  <Route path="/Moduloadministrador/Editcategoria/:id"          element={<Editcategoria />} />
	  <Route path="/Moduloadministrador/ListadoEmpresas"            element={<ListadoEmpresas />} />
	  <Route path="/Moduloadministrador/Registrarempresa"           element={<Registrarempresa />} />
	  <Route path="/Moduloadministrador/Editempresa/:id"            element={<Editempresa />} />
	  <Route path="/Moduloadministrador/ListadoClientes/"           element={<ListadoClientes />} />
	  <Route path="/Moduloadministrador/Registrarcliente"           element={<Registrarcliente />} />
	  <Route path="/Moduloadministrador/Editecliente/:id"           element={<Editecliente />} />
	  <Route path="/Moduloadministrador/Listadoplanes/"             element={<Listadoplanes  />} />
	  <Route path="/Moduloadministrador/Registrarplanes"            element={<Registrarplanes />} />
	  <Route path="/Moduloadministrador/Editplanes/:id"             element={<Editplanes />} />
	  <Route path="/Moduloadministrador/ListadoProducto"            element={<ListadoProducto  />} />
	  <Route path="/Moduloadministrador/RegistraProducto"           element={<RegistraProducto />} />
	  <Route path="/Moduloadministrador/EditcProducto/:id"          element={<EditcProducto />} />
	  <Route path="/Moduloadministrador/ListadoRepartidores/"       element={<ListadoRepartidores />} />
	  <Route path="/Moduloadministrador/RegistrarRepartidores"      element={<RegistrarRepartidores />} />
	  <Route path="/Moduloadministrador/EditRepartidores/:id"       element={<EditRepartidores />} />
	  <Route path="/Moduloadministrador/ListadoPedidos/"            element={<ListadoPedidos />} />
      <Route path="/Moduloadministrador/Registrarpedidos"           element={<Registrarpedidos />} />
	  <Route path="/Moduloadministrador/Editpedidos/:id"            element={<Editpedidos />} />
	  <Route path="/Moduloadministrador/Listadousuarios/"           element={<Listadousuarios />} />
      <Route path="/Moduloadministrador/Registrarusuarios"          element={<Registrarusuarios />} />
	  <Route path="/Moduloadministrador/Editusuarios/:id"           element={<Editusuarios />} />
	  <Route path="*"                                               element={<NotFoundPage />} />
    </Routes>
  </Router>
       

  
  )
}
const NotFoundPage = () => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      
    </div>
  );
};

export default App;
