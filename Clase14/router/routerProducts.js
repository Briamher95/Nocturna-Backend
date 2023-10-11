const express = require("express")
const { getAllProducts, deleteProductById, } = require("../database/productsManager")
// Corregir todos los errores de codigo
const router = express.Router()
exports.router = router

router.get("/", (req, res) => {

    res.json({ok: true, products:getAllProducts()})
})

router.delete("/:id", (req, res) => {
    const {id} = req.params
    deleteProductById(id)
    res.json({ok: true, message: "Producto Eliminado", products: getAllProducts()})
})


module.exports = router