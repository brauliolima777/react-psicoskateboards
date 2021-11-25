import React from "react";
const Principal = () => {
    return(
        <div>
            
        <div id="slider">
            <figure>
            <img src="assets/Pilchas/remeras/slide1.jpg"/>
            <img src="assets/Pilchas/canguros/DSC_05062.JPG"/>
            <img src="assets/Pilchas/canguros/slide2.JPG"/>
            <img src="assets/Pilchas/canguros/dsc-05012.jpg"/>
            <img src="assets/Pilchas/remeras/slide1.jpg"/>
            </figure>
        </div>
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
      <section id='product-holder'id="featured" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
          <h2>PSICO Originals</h2>
          <hr/>
        </div>
        <div className="row mx-auto container-fluid">
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
  )
}

export default Principal;