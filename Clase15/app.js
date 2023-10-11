const express = require("express")
const cors = require("cors")
const PORT = 8080
const hbs = require("hbs") // importamos el modulo de handlevar
const { getAllproducts, getProductById } = require("./manager/productManager")



const app = express()

app.set("view engine", "hbs") // configuramos el motor de plantillas
app.set("views", __dirname + "/views") // configuramos la ubicacion de las plantillas

app.use(express.static(__dirname + "/public")) // configuramos la ubicacion de los archivos estaticos

app.get("/hola",(req,res) => {
    res.send(`
    <h1> Hola, como estas?</h1>` )
})

app.get("/login",(req,res) => { // configuramos la ruta de login que nos renderiza nuestro motor de plantilla

    res.render("login")

})




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Esto es para renderizar Hbs de Product y el de Login
app.get("/products",(req,res) => {
    res.render("products", {products : getAllproducts()} )
})



app.get("/products/:id",(req,res) => {
    /* Obtener el id del req.parm y buscar el producto. Una vez encontrado, darselo al archivo hbs */
    const id = req.params.id
    res.render("detail",{product : getProductById(id)})
})

app.listen(PORT, () => {

    console.log(`El servidor se esta runeando en http://localhost:${PORT}/`);

});
