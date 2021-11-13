import react from "react";

function Shop () {
    return
     <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">PSICO  skatebords</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
                <span><i id="bar" className="fas fa-bars"></i></span>
            

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    
                        <li className="nav-item">
                            <a className="nav-link" href="Principal.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vlog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-search"></i>
                            <i className="far fa-shopping-cart">
                            <span>0</span>
                            </i>
                            <div id="cartCantProducts"></div>
                            <div id="cartTotal"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section id="featured" className="my-5 py-5">
            <div className="container mt5 py-5">
            <h2 className="font-weight-bold">PSICO PRODUCTS</h2>
            <hr/>
            </div>
            <div className="row mx-auto container">
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/como-un-caballito-remera-full-color.jpg" alt=""/> 
                <h4 className="p-name">Como un caballito</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/cara-de-cabra-full-color.jpg" alt=""/> 
                <h4 className="p-name">Cara de Cabra</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-full-color.jpg" alt=""/> 
                <h4 className="p-name">American Psico</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-bw.jpg" alt=""/> 
                <h4 className="p-name">American Psico b/w</h4>
                <h3 className="p-price">$450</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/como-un-caballito-remera-full-color.jpg" alt=""/> 
                <h4 className="p-name">Como un caballito</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/cara-de-cabra-full-color.jpg" alt=""/> 
                <h4 className="p-name">Cara de Cabra</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-full-color.jpg" alt=""/> 
                <h4 className="p-name">American Psico</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-bw.jpg" alt=""/> 
                <h4 className="p-name">American Psico b/w</h4>
                <h3 className="p-price">$450</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/como-un-caballito-remera-full-color.jpg" alt=""/> 
                <h4 className="p-name">Como un caballito</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/cara-de-cabra-full-color.jpg" alt=""/> 
                <h4 className="p-name">Cara de Cabra</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-full-color.jpg" alt=""/> 
                <h4 className="p-name">American Psico</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-bw.jpg" alt=""/> 
                <h4 className="p-name">American Psico b/w</h4>
                <h3 className="p-price">$450</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/como-un-caballito-remera-full-color.jpg" alt=""/> 
                <h4 className="p-name">Como un caballito</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/cara-de-cabra-full-color.jpg" alt=""/> 
                <h4 className="p-name">Cara de Cabra</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-full-color.jpg" alt=""/> 
                <h4 className="p-name">American Psico</h4>
                <h3 className="p-price">$500</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="assets/Pilchas/remeras/american-psico-bw.jpg" alt=""/> 
                <h4 className="p-name">American Psico b/w</h4>
                <h3 className="p-price">$450</h3>
                <button className="buy-btn">Buy Now</button>
            </div>
            </div>
        </section>
     </div>
    ;
}