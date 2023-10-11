// 1)importamos express en la constante express

const express = require("express")

const {productos,findProductById} = require("./productos")

const {productsList} = require("./productManager")



//2)declaramos el puerto al cual vamos a acceder al server
const PORT = 9000

// 3) creamos el servidor en "app" ejecutando express ahi
const app = express ()


// 5)el get nos toma la ruta del servidor y el "res " la respuesta que nos va a dar cuando accedamos a esa ruta 
app.get("/" , (req,res) => (
    res.json({mensaje:"hola"})
))



// aca vemos como podemos acceder a una url dinamica atravez del ":" y gracias a eso poder pasar como argumento ese id a la funcion.
app.get("/productos/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    res.json(findProductById(id))
})

app.get("/api/products",(req,res) =>{
    const {limit} = req.query
    const products = productsList.getProducts(limit)
    
    if (limit){
        res.json([...products].splice(0,limit))
    } else{
        res.json(products)
    }
    
})

app.get("/api/products/:id",(req,res) =>{
    const {id} = req.params

    const productFound = productsList.getProductById(id)

    if (productFound.ok){
        res.status(201).json(productFound.respuesta)
    } else{
        res.status(404).json({mensaje: "producto no encontrado"})
    }
})

app.get("/api/user/:nombre",(req,res) =>{

    const {nombre} = req.params

    if (nombre === "pepe" || nombre === "juan"){
        return {mensaje: "Esta registrado"}
    } else{
        return {mensaje: "no esta registrado"}.status(404)
    }
    

})


// 4) la funcion listen verifica si esta funcionando
app.listen(PORT, () => (
    console.log("la aplicacion esta funcionando en http://localhost:" + PORT)
))


/* 
Crear un archivo llamado productManager 

En el crear una clase con los atributos products y idCounter

crear el metodo createProduct que reciba un objeto para añadirlo al array products (crear el id autoincrementable)


crear el metodo getProductById(id) que devuelva un producto por su id


crear el metodo getProducts que devuelva todos los productos

Instanciar la clase en una variable llamada productsList y activaran el metodo createProduct almenos 3 veces para agregar 3 objetos

Crear las rutas

Get: /api/products => devuelve todos los productos

Get: /api/products/:id => devuelve el producto buscado o un mensaje de que no se encontro el producto

*/



/* crea la ruta /api/user/:nombre


Si el nombre es 'pepe' o 'juan' deberas devolver un objeto con el sig formato {mensaje: 'Esta registrado'}

sino deberas devolver un objeto {mensaje: 'no esta registrado} y el status en 404


 */
