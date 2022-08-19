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
        <Link class="nav-link" to="/Moduloadministrador/ListadoCategoria">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Categorias</span>
        </Link>
      </li>
      
	   <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/ListadoEmpresas">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Empresas</span>
        </Link>
      </li>
	  
	  <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/ListadoClientes">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Clientes</span>
        </Link>
      </li>
	  
	   <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/Listadoplanes">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Planes</span>
        </Link>
      </li>
	  
	    <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/ListadoProducto">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Productos</span>
        </Link>
      </li>
	  
	  <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/ListadoRepartidores">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Repartidores</span>
        </Link>
      </li>
	  
	    <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/ListadoPedidos">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Pedidos</span>
        </Link>
      </li>
	  
	   <li class="nav-item">
        <Link class="nav-link" to="/Moduloadministrador/Listadousuarios">
          <i class="icon-box menu-icon"></i>
          <span class="menu-title">Modulo Usuarios</span>
        </Link>
      </li>
	  
	  
	  </ul>
	</div>
  </nav>
  )
}

export default Mnav