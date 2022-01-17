'use strict'

const express = require ('express')
const cors = require ('cors')
const bodyParser = require ('body-parser')

const routes = require ('./products/routes')

const app = express()
const port = process.env.PORT || 5000


app.use (bodyParser.urlencoded({ extended: false}))
app.use (bodyParser.json())

app.use (cors())

app.use ('/api/product', routes)

app.get ('/catch', (req,res) =>{
    variable.x = 200
    res.send('Al final no falle' + req.originalUrl) 
})

app.get ('/timeout', (req,res,next) =>{
    setTimeout( ()=>{
        try {
            variable.x = 200
            res.send('Llega a ' + req.originalUrl)

        }catch (err){
            next(err)
        }
    },10)
     
})


app.get('/try', (req,res) =>{
    try{
        console.log("Inicio el try");
        variable.x = 200;
    }catch(err){
        console.log("Esto es un error");
        console.error(err);
    }finally {
        console.log("Finally");
        res.send('Final')
    }
})


app.get ('/api/product/:productId', (req, res) => {
    
})

app.post ('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200) .send({message: 'el producto llega bien'})
})

app.put ('/api/product/:productId', (req, res) => {
    
})

app.delete ('/api/product/:productId', (req, res) => {
    
})


app.listen(port, () => {
    console.log (`API-REST esta corriendo en http://localhost:${port}`);
});