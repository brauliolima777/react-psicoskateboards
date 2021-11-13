import react from "react";
const Whatsnew = () => {
    return(
        <section id="new" className="w-100">
        <div className="container text-center mt-5 py-5">
          <h2>WHAT'S NEW</h2>
        </div>
        <div className="row p-0 m-4">
          <div className="one col-lg-4 col-md-12 col-12 p-2">
            <img className="img-fluid" src="assets/Pilchas/productos/tabla-eclipse.jpg" alt=""/>
            <div className="details">
              <h6>Para el dia, la noche y los eclipses</h6>
              <h4>Eclipse</h4>
              <button className="text-uppercase">Shop now</button>
              <hr/>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12 p-2">
            <img className="img-fluid" src="assets/Pilchas/productos/tabla-sun.jpg" alt=""/>
            <div className="details">
              <h6>Con el power del sol</h6>
              <h4>Sun</h4>
              <button className="text-uppercase">Shop now</button>
              <hr/>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12 p-2">
            <img className="img-fluid" src="assets/Pilchas/productos/tabla-moon.jpg" alt=""/>
            <div className="details">
              <h6>Con la mistica de la luna</h6>
              <h4>Moon</h4>
              <button className="text-uppercase">Shop now</button>
              <hr/>
            </div>
          </div>
        </div>
      </section>
      )
}

export default Whatsnew;