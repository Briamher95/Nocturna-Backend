//DB info:

const DB_NAME = "e-commerceUTN_Noche_LM"
const DB_PORT = 27017
const DB_ADRESS = `127.0.0.1`
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`

const mongoose = require('mongoose')
const Producto = require('./models/Producto')




const crearProducto = async (titulo, precio, descripcion, stock) => {
    try {
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Nos conectamos con mongoDB correctamente")
        const nuevoProducto = new Producto({ titulo, precio, descripcion, stock })
        const productoNuevo = await nuevoProducto.save()
        console.log("Se guardo el producto:")
        console.log(productoNuevo)

    }
    catch (err) {
        console.error("no se pudo conectar con mongoDB")
    }
}


const obtenerProductos = async () => {
    try {
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Nos conectamos con mongoDB correctamente")
        const productos = await Producto.find() //busca todos los productos en la coleccion "empanadas",
        console.log(productos)

    }
    catch (error) {
        console.error("no se pudo conectar con mongoDB")
    }
}




const eliminarProductoPorId = async (id) => {
    try {
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Nos conectamos con mongoDB correctamente")
        const productoEliminado = await Producto.findByIdAndRemove(id)
        if (productoEliminado) {
            console.log("Se elimino el producto:")
            console.log(productoEliminado)
        }
        else {
            console.log("No se encontro el producto")
        }

    }
    catch (err) {
        console.error("no se pudo conectar con mongoDB")
    }
}



const actualizarProductoPorId = async (id, stockActualizado) => {
    try {
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Nos conectamos con mongoDB correctamente")
        const productoActualizado = await Producto.findByIdAndUpdate(id, { stock: stockActualizado }, { new: true })
        if (productoActualizado) {
            console.log("Se actualizo el Stock:")
            console.log(productoActualizado)
        }
        else {
            console.log("No se encontro el producto")
        }

    }



    catch (err) {
        console.error("no se pudo conectar con mongoDB")
    }
}

actualizarProductoPorId("652746364628ac1b4e44121b",15)

/* eliminarProductoPorId("652743cd529ea58e51fe7817") */

/* obtenerProductos() */


/* crearProducto("Empanada atun solas", 600, "Empanadas normales", 5) */





//>>>>>>>>>>>>>>>>>>>>>>>>>>>Como hacerlo con THEN y CATCH


/* const crearProducto = async (titulo, precio, descripcion, stock) => {
    mongoose.connect(URL_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Conectado a la base de datos')
            const nuevoProducto = new Producto({ titulo, precio, descripcion, stock })
            const response = nuevoProducto.save().then((prodGuardado) => {
                console.log("Se guardo el producto:")
                console.log(prodGuardado)
            }).catch((err) => {
                console.log("el producto no se guardo")
            })
        })
        .catch(err => console.log(err))
} */
