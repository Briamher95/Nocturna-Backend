const express = require('express'); // Librería para crear el servidor
const cors  = require('cors'); // Librería para habilitar CORS
const bodyParser = require('body-parser'); // Librería para habilitar el paso de JSON
const routerProducts = require('./router/routerProducts'); //  Importar Ruta de productos
const PORT = 8080 // Puerto de escucha
const app = express(); // Crea el servidor

 //Middlewares
app.use(cors()); // Habilita CORS
app.use(express.json()); // Habilita pasar JSON



app.use("/api/products", routerProducts); // Ruta de productos")


app.get("/", (req, res) => { // Ruta de inicio
    res.send("<h1>Hola desde el servidor</h1>")

})












app.listen(PORT, () => { // Inicia el servidor

    console.log(`Servidor se esta alojando en http://localhost:${PORT}/`)

})

