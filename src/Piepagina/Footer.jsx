

const Footer = () => {
  return (
    <footer className="footer-area">
        <div className="footer-top-area bg-img pt-105 pb-65"  data-overlay="9">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-3">
                        <div className="footer-widget mb-40">
                            <h3 className="footer-widget-title">Nuestro Menu</h3>
                            <div className="footer-widget-content">
                                <ul>
                                    <li><a href="cart.html">Inicio</a></li>
                                    <li><a href="register.html">Servicio</a></li>
                                    <li><a href="login.html">Contacto</a></li>
                                    <li><a href="register.html">Productos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-3">
                        <div className="footer-widget mb-40">
                            <h3 className="footer-widget-title">Categorias</h3>
                            <div className="footer-widget-content">
                                <ul>
                                    <li><a href="shop.html">Restauranes</a></li>
                                    <li><a href="shop.html">Zapaterias</a></li>
                                    <li><a href="shop.html">Licores</a></li>
                                    <li><a href="shop.html">Tecnologia</a></li>
                                    <li><a href="shop.html">Repuestos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="footer-widget mb-40">
                            <h3 className="footer-widget-title">Contacto</h3>
                            <div className="footer-newsletter">
                                <p>Subscribite a nuestro boletin informativo</p>
                                <div id="mc_embed_signup" className="subscribe-form pr-40">
                                    <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                        <div id="mc_embed_signup_scroll" className="mc-form">
                                            <input type="email" value="" name="EMAIL" class="email" placeholder="Escribe tu correo electronico" required />
                                            {/*</input> real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                            <div className="mc-news" aria-hidden="true">
                                                <input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value="" />
                                            </div>
                                            <div class="clear">
                                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="footer-contact">
                                    <p><span><i className="ti-location-pin"></i></span> Lord Cochrane7335. Santiago De Chile Region Metropolitana</p>
                                    <p><span><i className=" ti-headphone-alt "></i></span> +56933940091 o +56957465989</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom black-bg ptb-20">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="copyright">
                            <p>
                                Copyright ©
                                <a href="https://hastech.company/">Seungs</a> 2022. Todos los derecho reservado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>	
  )
}

export default Footer