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





function App() {
  return (

    <Router>
    
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Productos"           element={<Productos />} />
      <Route path="/Servicios"           element={<Servicios />} />
      <Route path="/Contacto"            element={<Contacto />} />
      <Route path="/IniciarSeccion"      element={<IniciarSeccion />} />
      <Route path="/RegistroUsuario"     element={<RegistroUsuario />} />
      <Route path="/Moduloadministrador" element={<Moduloadministrador />} />
	  <Route path="/ListadoCategoria"    element={<ListadoCategoria />} />
	  <Route path="/Registrarcategoria"  element={<Registrarcategoria />} />
	  <Route path="/Editcategoria/:id"   element={<Editcategoria />} />
	  <Route path="/ListadoEmpresas/"    element={<ListadoEmpresas />} />
	  <Route path="/Registrarempresa"    element={<Registrarempresa />} />
	  <Route path="/Editempresa/:id"     element={<Editempresa />} />
      <Route path="*"                    element={<NotFoundPage />} />
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
