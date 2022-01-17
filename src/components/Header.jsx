import React from "react";
import{BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">PSICO  skatebords</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i id="bar" className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto"/>
              
              <li className="nav-item">
                <Link to="/" className="nav-link active" />Home
              </li>
              <li className="nav-item">
                <Link to="/Shop" className="nav-link" />Shop
              </li>
              <li className="nav-item">
                <Link to="/Vlog" className="nav-link" />Vlog
              </li>
              <li className="nav-item">
                <Link to="/ContactUs" className="nav-link" />Contact Us 
              </li>
              <li className="nav-item">
                <i className="far fa-search"></i>
                <i className="far fa-shopping-cart">
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