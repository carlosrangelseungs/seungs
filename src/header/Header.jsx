import { NavLink } from "react-router-dom";
import './Header.css'
import  logo from '../images/imageslogo/logo.png'
const Header = () => {


  return (
    <header>
      
      <div className="header-top-furniture wrapper-padding-2 res-header-sm">
         
        <div className="container-fluid">
          <div className="header-bottom-wrapper">
            <div className="logo-2 furniture-logo ptb-30">
           
               <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                  <img src={logo} />
                </NavLink>
             </div>
            <div className="menu-style-2 furniture-menu menu-hover">
              <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                  Inico
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Productos"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                  Productos
                  </NavLink>
                </li>
              
                <li>
                  <NavLink
                    to="/Servicios"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Servicos
                  </NavLink>
                </li>
              
                <li>
                  <NavLink
                    to="/Contacto"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contacto
                  </NavLink>
                </li>

              </ul>
              </nav>
              </div>
            </div>   
        </div>
     </div>

     <div className="header-bottom-furniture wrapper-padding-2 border-top-3 color-header-buscador">
                <div className="container-fluid">
                    <div className="furniture-bottom-wrapper">
                        <div className="furniture-login">
                            <ul>
                              <li> 
                                <NavLink
                                 to="/IniciarSeccion"  className={({ isActive }) => (isActive ? "active" : "")}>
                                  Acceso:
                                </NavLink>
                              </li>  
                              
                                <li>
                                <NavLink
                                 to="/RegistroUsuario"  className={({ isActive }) => (isActive ? "active" : "")}>
                                  Registro Usuario
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="furniture-search">
                            <form action="#">
                                <input placeholder="Buscar . . ." type="text" />
                                <button>
                                    <i className="ti-search"></i>
                                </button>
                            </form>
                        </div>
                      
                    </div>
                </div>
            </div>
   
    </header>
  )
}

export default Header