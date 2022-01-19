const {Pool} = require('../services/pool')

const config = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD
}

async function addProduct(req, res) {    
    const result = await pool.query("insert into products (name, price, category) values ($1,$2,$3) returning *", 
        [product.name, product.price, product.category]);        
    res.send({message: 'El producto se agrego con exito', product: result.rows[result.rows.length-1]});
}

function getProducts(req,res) {
    res.send(products)
}

async function getProducts(req,res) {
    console.log(config)        
        const result = await pool.query("select * from products");
        console.log(result.rows);        
        res.send(result.rows);
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