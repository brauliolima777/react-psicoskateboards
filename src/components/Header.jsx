import react from "react";
const Header = () => {
    return(
      <div>
        <nav classNameName="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
        <div classNameName="container">
          <a classNameName="navbar-brand" href="#">PSICO  skatebords</a>
          <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i id="bar" classNameName="fas fa-bars"></i></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav ml-auto"/>
              
              <li classNameName="nav-item">
                <a classNameName="nav-link active" href="#">Home</a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="Shop.html">Shop</a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">Vlog</a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">Contact Us</a>
              </li>
              <li classNameName="nav-item">
                <i classNameName="far fa-search"></i>
                <i classNameName="far fa-shopping-cart">
                  <span>0</span>
                </i>
                <div id="cartCantProducts"></div>
                <div id="cartTotal"></div>
                
              </li>
              
          </div>
        </div>
        </nav>
      </div>
    );
}

export default Header;