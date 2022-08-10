import './RegistroUsuario.css'
import  Header  from  '../header/Header'
import  Slyder  from  '../slyder/Slyder'
import  Footer  from '../Piepagina/Footer'

const RegistroUsuario = () => {
  return (
    <div>
      <Header/>
       <Slyder/>
       <div className="container1"> 
          <div className="card"> 
            <div className="form"> 
              <div className="right-side"> 
                <div className="main active"> 
                    <div clasNames="manage"> 
                        <h3>Registro de Usuarios</h3>
                    </div> 
                 
                    <div className="input_div">
                        <div className="input_text"> 
                          <input className="written_name" type="text" require required /> <label>Primer Nombre</label> 
                        </div> 
                  
                         <div className="input_text"> 
                            <input type="text" required /> <label>Prmer Apellido</label>
                        </div> 
                    </div> 
                    
                    <div className="input_div"> 
                        <div className="input_text"> 
                            <input type="text" require required /> 
                             <label>Correo Electronico</label>
                         </div> 
                             <div clasNames="input_text"> 
                                <input type="number" require required /> 
                                <label>Telefono</label> 
                            </div> 
                    </div>
                    
                    <div className="input_div"> 
                        <div className="input_text">
                             <input class="pass_type" type="password" require required /> 
                             <label>Clave</label> <i class="fa fa-eye-slash password_eye"></i> 
                       </div>

                      <div clasNames="input_text"> 
                            <input class="confirm_pass_type" type="password" require required /> 
                            <label>Confirmar Clave</label> <i class="fa fa-eye-slash con_eye"></i> 
                        </div>
                     </div> 
                     
                     <div className="agree"> 
                        <span><i className="fa fa-check"></i></span>
                         <p>Yo acepto <a href="#"> los terminso del Servicio</a>.</p>
                    </div> 
                    
                    <div className="button step_1">
                         <button>Registrar</button> 
                    </div> 
                </div> 
            
            </div>
        </div>
     </div>
</div>


    </div>
  )
}

export default RegistroUsuario