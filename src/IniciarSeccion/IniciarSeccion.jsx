import  './IniciarSeccion.css'
import  '../assets/css/cuenta_usuario.css'
import  Header  from  '../header/Header'
import  Slyder  from  '../slyder/Slyder'
import  Footer  from  '../Piepagina/Footer'

const IniciarSeccion = () => {
  return (
    <div> 
      
      <Header/>
      <Slyder/>
       <div id="logreg-forms">
          <form className="form-signin">
            <h1 clasName="h3 mb-3 font-weight-normal texto-centro"> Sign in</h1>
               <div className="social-login">
               <button className="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
               <button className="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
        </div>
         <p classsName="texto-centro"> OR  </p>
         <div className="input-group">
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
        </div>

        <div className="input-group">
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
        </div>

        <div className="input-group">
          <button className="btn btn-md btn-rounded btn-block form-control submit" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
        </div>

        <a href="#" id="forgot_pswd">Forgot password?</a>
        <hr />
        
        <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</button>
        </form>

        <form action="#" className="form-reset">
            <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
            <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
            <a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
        </form>

        <form action="#" className="form-signup">
            <div className="social-login">
                <button className="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
              </div>
              <div className="social-login">
                <button className="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
            </div>

            <p className="texto-centro">OR</p>

            <input type="text"     id="user-name"       className="form-control" placeholder="Full name"       required="" autofocus="" />
            <input type="email"    id="user-email"      className="form-control" placeholder="Email address"    required autofocus="" />
            <input type="password" id="user-pass"       className="form-control" placeholder="Password"         required autofocus="" />
            <input type="password" id="user-repeatpass" className="form-control" placeholder="Confirm Password" required autofocus="" />

            <div className="input-group">
            <button className="btn btn-md btn-block submit" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
            </div>

            <a href="#" id="cancel_signup"><i class="fa fa-angle-left"></i> Back</a>
        </form>
        <br/>
 
</div><Footer/></div>
  )
}

export default IniciarSeccion