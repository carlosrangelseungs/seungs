import producto1 from '../images/imagesproduct/sidebar-product/producto1.jpg'
import producto2 from '../images/imagesproduct/sidebar-product/producto2.jpg'
import producto3 from '../images/imagesproduct/sidebar-product/producto3.jpg'
import producto4 from '../images/imagesproduct/sidebar-product/producto4.jpg'


import productof1  from '../images/imagesproduct/fashion-colorful/productof1.jpg'
import productof2 from '../images/imagesproduct/fashion-colorful/productof2.jpg'
import productof3 from '../images/imagesproduct/fashion-colorful/productof3.jpg'
import productof4 from '../images/imagesproduct/fashion-colorful/productof4.jpg'
import productof5 from '../images/imagesproduct/fashion-colorful/productof5.jpg'

const ListadoProducto = () => {
  return (
    <div className="shop-page-wrapper shop-page-padding ptb-100">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3">
                <div className="shop-sidebar mr-50">
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Search Products</h3>
                        <div className="sidebar-search">
                            <form action="#">
                                <input placeholder="Search Products..." type="text" />
                                <button><i className="ti-search"></i></button>
                            </form>
                        </div>
                    </div>
                  
                    <div className="sidebar-widget mb-45">
                        <h3 className="sidebar-title">Categories</h3>
                        <div className="sidebar-categories">
                            <ul>
                                <li><a href="#">Accessories <span>4</span></a></li>
                                <li><a href="#">Book <span>9</span></a></li>
                                <li><a href="#">Clothing <span>5</span> </a></li>
                                <li><a href="#">Homelife <span>3</span></a></li>
                                <li><a href="#">Kids & Baby <span>4</span></a></li>
                            </ul>
                        </div>
                    </div>
                    
                   
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Top rated products</h3>
                        <div className="sidebar-top-rated-all">
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#"><img src={producto1} alt=""/></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#"><img src={producto1} alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#"><img src={producto3} alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div className="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#"><img src={producto4} alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i clasNames="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="shop-product-wrapper res-xl">
                    <div className="shop-bar-area">
                        <div className="shop-bar pb-60">
                            <div className="shop-found-selector">
                                <div className="shop-found">
                                    <p><span>23</span> Product Found of <span>50</span></p>
                                </div>
                                
                            </div>
                            <div className="shop-filter-tab">
                                <div className="shop-tab nav" role="tablist">
                                    
                                    <a href="#grid-sidebar4" data-toggle="tab" role="tab" aria-selected="true">
                                        <i className="ti-menu"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="shop-product-content tab-content">
                            <div id="grid-sidebar3" className="tab-pane fade active show">
                                
                                <div className="row">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                            <div className="product-img list-img-width">
                                                <a href="#">
                                                    <img src={producto1} alt="" />
                                                </a>
                                                
                                                <div className="product-action-list-style">
                                                    <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                                        <i class="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-list">
                                                <div className="product-list-info">
                                                    <h4><a href="#"> Dagger Smart Trousers </a></h4>
                                                    <span>$150.00</span>
                                                    <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                </div>
                                                <div className="product-list-cart-wishlist">
                                                    <div className="product-list-cart">
                                                        <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                    </div>
                                                    <div className="product-list-wishlist">
                                                        <a className="btn-hover list-btn-wishlist" href="#">
                                                            <i className="pe-7s-like"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                            <div className="product-img list-img-width">
                                                <a href="#">
                                                    <img src={producto2} alt="" />
                                                </a>
                                                <div className="product-action-list-style">
                                                    <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                                        <i class="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-list">
                                                <div className="product-list-info">
                                                    <h4><a href="#">Homme Tapered Smart </a></h4>
                                                    <span>$180.00</span>
                                                    <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                </div>
                                                <div className="product-list-cart-wishlist">
                                                    <div className="product-list-cart">
                                                        <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                    </div>
                                                    <div className="product-list-wishlist">
                                                        <a className="btn-hover list-btn-wishlist" href="#">
                                                            <i className="pe-7s-like"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                            <div className="product-img list-img-width">
                                                <a href="#">
                                                    <img src={producto3} alt="" />
                                                </a>
                                                <div className="product-action-list-style">
                                                    <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                                        <i class="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-list">
                                                <div className="product-list-info">
                                                    <h4><a href="#">Navy Bird Print </a></h4>
                                                    <span>$130.00</span>
                                                    <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                </div>
                                                <div className="product-list-cart-wishlist">
                                                    <div className="product-list-cart">
                                                        <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                    </div>
                                                    <div className="product-list-wishlist">
                                                        <a className="btn-hover list-btn-wishlist" href="#">
                                                            <i className="pe-7s-like"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                            <div className="product-img list-img-width">
                                                <a href="#">
                                                    <img src={producto4} alt="" />
                                                </a>
                                                <span>new</span>
                                                <div className="product-action-list-style">
                                                    <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                                        <i class="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-list">
                                                <div className="product-list-info">
                                                    <h4><a href="#">Skinny Jeans Terry </a></h4>
                                                    <span>$120.00</span>
                                                    <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                </div>
                                                <div className="product-list-cart-wishlist">
                                                    <div className="product-list-cart">
                                                        <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                    </div>
                                                    <div className="product-list-wishlist">
                                                        <a className="btn-hover list-btn-wishlist" href="#">
                                                            <i className="pe-7s-like"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                            <div className="product-img list-img-width">
                                                <a href="#">
                                                    <img src={productof5} alt="" />
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action-list-style">
                                                    <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-list">
                                                <div className="product-list-info">
                                                    <h4><a href="#">Black Faux Suede </a></h4>
                                                    <span>$170.00</span>
                                                    <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                </div>
                                                <div className="product-list-cart-wishlist">
                                                    <div className="product-list-cart">
                                                        <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                    </div>
                                                    <div className="product-list-wishlist">
                                                        <a className="btn-hover list-btn-wishlist" href="#">
                                                            <i className="pe-7s-like"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                            <div className="product-img list-img-width">
                                                <a href="#">
                                                    <img src={producto1} alt="" />
                                                </a>
                                                <div className="product-action-list-style">
                                                    <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-list">
                                                <div className="product-list-info">
                                                    <h4><a href="#">Jacket Stonewash </a></h4>
                                                    <span>$190.00</span>
                                                    <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                </div>
                                                <div className="product-list-cart-wishlist">
                                                    <div className="product-list-cart">
                                                        <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                    </div>
                                                    <div className="product-list-wishlist">
                                                        <a className="btn-hover list-btn-wishlist" href="#">
                                                            <i className="pe-7s-like"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-style mt-50 text-center">
                    <ul>
                        <li><a href="#"><i className="ti-angle-left"></i></a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">19</a></li>
                        <li className="active"><a href="#"><i className="ti-angle-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ListadoProducto