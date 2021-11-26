import React from "react";
import{BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
                <Link to="/" classNameName="nav-link active"/>Home
              </li>
              <li classNameName="nav-item">
                <Link to="/Shop" classNameName="nav-link" />Shop
              </li>
              <li classNameName="nav-item">
                <Link to="/Vlog" classNameName="nav-link" />Vlog
              </li>
              <li classNameName="nav-item">
              <Link to="/ContactUs" classNameName="nav-link" />Contact Us
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