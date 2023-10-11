const express = require('express');
const cors  = require('cors');
const bodyParser = require('body-parser');
const {login} = require('./loginManager');

const PORT = 8080

const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


app.get('/', (req, res) => {
    res.json({mensaje: "pepe"})

})

app.post('/', (req, res) => {

    const {username, password} = req.body; 
    
    const user = {username , password}

    console.log(user)
    const isRealUser = login(user)

    console.log( "este es el resultado " + isRealUser)

    if (isRealUser){
        res.status(200).json({ok:true, mensaje: "usuario lcogueado correctamente "})
    }else {
        res.status(400).json({ok:false, mensaje: "usuario o contraseña incorrectos"})}

}) 

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}/`)
})


/* Cuando entre en mi aplicacion deberia mandarme un h1 que diga bienvenido */