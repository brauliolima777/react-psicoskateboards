function getProducts(req,res) {
    res.send(products)
}
let products = [{
    "name":"como un caballito",
    "price": "500",
    "category":"remera",
    "image":"/assets/Pilchas/remeras/como-un-caballito-remera-full-color.jpg"
}, 
{
    "name":"cara de cabra",
    "price": "500",
    "category":"remera",
    "image":"/assets/Pilchas/remeras/cara-de-cabra-full-color.jpg"
},
{
    "name":"american psico",
    "price": "500",
    "category":"remera",
    "image":"/assets/Pilchas/remeras/american-psico-full-color.jpg"
},
{
    "name":"american psico b/w",
    "price": "450",
    "category":"remera",
    "image":"/assets/Pilchas/remeras/american-psico-bw.jpg"
},
{
    "name":"eclipse",
    "price": "1200",
    "category":"tabla",
    "image":"/assets/Pilchas/productos/tabla-eclipse.jpg"
},
{
    "name":"sun",
    "price": "1200",
    "category":"tabla",
    "image":"/assets/Pilchas/productos/tabla-sun.jpg"
},
{
    "name":"moon",
    "price": "1200",
    "category":"tabla",
    "image":"/assets/Pilchas/productos/tabla-moon.jpg"
}

]

module.exports = {getProducts}