import {Link} from 'react-router-dom'

const Mnav = () => {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <div class="user-profile">
      <div class="user-image">
        
		  <div class="user-name">
			  Seungs Administrador
		  </div>
		  <div class="user-designation">
			Panel de Control
		  </div>
      </div>
	  
    <ul class="nav">
      <li class="nav-item">
        <Link class="nav-link" to="/ListadoCategoria">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Categorias</span>
        </Link>
      </li>
      
	   <li class="nav-item">
        <Link class="nav-link" to="/ListadoEmpresas">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Empresas</span>
        </Link>
      </li>
	  
	  <li class="nav-item">
        <Link class="nav-link" to="/ListadoClientes">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Clientes</span>
        </Link>
      </li>
	  
	   <li class="nav-item">
        <Link class="nav-link" to="/Listadoplanes">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Planes</span>
        </Link>
      </li>
	  
	  
	  </ul>
	</div>
  </nav>
  )
}

export default Mnav