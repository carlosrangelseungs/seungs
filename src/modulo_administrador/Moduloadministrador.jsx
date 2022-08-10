import Mheader    from './Mheader'
import Mnav   from './Mnav'
import Mprincipal from './Mprincipal'
import Mfooter    from './Mfooter'
import '../administrador/vendors/mdi/css/materialdesignicons.min.css'
import '../administrador/vendors/feather/feather.css'
import '../administrador/vendors/base/vendor.bundle.base.css'
import '../administrador/vendors/flag-icon-css/css/flag-icon.min.css'
import '../administrador/vendors/font-awesome/css/font-awesome.min.css'
import '../administrador/vendors/jquery-bar-rating/fontawesome-stars-o.css'
import '../administrador/vendors/jquery-bar-rating/fontawesome-stars.css'
import '../administrador/css/style.css'


const Moduloadministrador = () => {
  return (
    
    
    <div className="container-scroller">
       <Mheader/>
      <div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
        <div className="main-panel">
          <Mprincipal/>
          <Mfooter/>  
          </div>     
      </div>
    </div>
  )
}

export default Moduloadministrador