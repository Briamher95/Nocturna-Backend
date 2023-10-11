const products = [
    {
        nombre: "samsung tv",
        price : 400,
        id : 1
    },
    {
        nombre: "phillips tv",
        price : 300,
        id : 2
    },
    {
        nombre: "LG tv",
        price : 450,
        id : 3
    }
]

const getAllproducts = () => products;


const getProductById = (id) => products.find(product => product.id == id);


module.exports = {getAllproducts, getProductById}