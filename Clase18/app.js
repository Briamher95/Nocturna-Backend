const express = require("express")
const session = require("express-session")
const mongoose = require("mongoose")
const hbs = require("hbs")
const PORT = 7070
const app = express()

//Middlewares


app.use(express.static(__dirname + "/public")) // habilitamos que se puedan acceder a los archivos estaticos

app.use(express.urlencoded({ extended: true })) //habilitamos que se nos puedan enviar formularios por el body

const session_params = {
    secret: "keySecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}

app.use(session(session_params))


//Configurando Handlebars
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


//MongoDB / mongoose config

const DB_NAME = "e-commerceUTN_Noche_LM"
const DB_PORT = 27017
const DB_ADRESS = "127.0.0.1"
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`

mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const database = mongoose.connection;

database.on("error", ()=>{
    console.error("ERROR DE CONEXION A MONGODB")

    /*  Se define un manejador de eventos para el evento "error" en la conexión a la base de datos. Si se produce un error en la conexión, se imprimirá un mensaje de error en la consola.*/
})
database.once("open",()=>{
    console.log("Conectado a MongoDB")
})
/* Se define otro manejador de eventos, esta vez para el evento "open". Cuando la conexión a la base de datos se abre con éxito, se imprimirá un mensaje indicando que se ha conectado a MongoDB. */

const User = mongoose.model("User",{
    username: String,
    password: String,
})

//Endpoints:

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/register", (req, res) => {
    res.render("register")
})



app.listen(PORT, () => {
    console.log('El servidor se esta escuchando en: http://localhost:' + PORT)
})