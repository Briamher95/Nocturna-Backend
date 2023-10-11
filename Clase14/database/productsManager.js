const products = [
    {
        name: "tv samsung 42",
        price: 4000,
        stock: 5,
        description: "lorem ipsum",
        id: 1
    },
    {
        name: "tv philips 32",
        price: 2000,
        stock: 5,
        description: "lorem ipsum",
        id: 2
    },



]

const getAllProducts = () => {
    return products
}

const getProductById = () => {

}
//funcion para eliminar un producto del array de products por el id
const deleteProductById = (id) => {
    let productoBuscado = products.find(producto => producto.id === id)
    products.splice(products.indexOf(productoBuscado), 1)
}

const updateStockById = (id, stock) => {
    const productToUpdate = products.find(producto => producto.id === Number(id))
    productToUpdate.stock = stock
}


module.exports = { getAllProducts, deleteProductById , updateStockById }