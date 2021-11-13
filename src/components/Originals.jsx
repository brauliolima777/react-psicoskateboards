import react from "react";
const Originals = () => {
    return(
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
      )
}

export default Originals;