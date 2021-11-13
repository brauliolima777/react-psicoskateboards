import react from "react";
const Footer = () => {
    return(
        <footer className="mt-5 py-5 text-center">
        <div className="row container mx-auto pt-5">
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h3 className="text-uppercase">Psico Skateboards </h3>
            <p>EST 19XX.<br/> Promoviendo el crecimiento de la cultura del skate desde Tacuarembo al mundo</p>
          </div>
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h5 className="pb-2">Featured</h5>
            <ul className="text-uppercase list-unstyled mb-2">
              <li><a href="#">Tablas</a></li>
              <li><a href="#">Remeras</a></li>
              <li><a href="#">Canguros</a></li>
              <li><a href="#">Gorras</a></li>
              
            </ul>
          </div>
          
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h5 className="pb-2">Contact Us</h5>
            <div>
              <h6 className="text-uppercase">Adress</h6>
              <p>18 de Julio, 1111, Tacuarembo</p>
            </div>
            <div>
              <h6 className="text-uppercase">Phone</h6>
              <p>(+598) 333777</p>
            </div>
            <div>
              <h6 className="text-uppercase">Email</h6>
              <p>psicoskateboards@gmail.com</p>
            </div>
          </div>

          <div className="footer-one col-lg-3 col-md-6 col-12">
            <div className="row">
              <img className="img-fluid w-50 h-150 m-2" src="assets/LOGOS/dedos.png"/>
            </div>
          </div>

        </div>

        <div className="copyright mt-5">
          <div className="row container mx-auto">
            <div className="col-lg-3 col-md-6 col-12">
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
      )
}

export default Footer;