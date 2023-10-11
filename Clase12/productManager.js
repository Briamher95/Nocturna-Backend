class ProductManager {

    constructor(){

        this.products = []

        this.idCounter = 0

    }

    createProduct(product){
        product.id = this.idCounter++;
        this.products.push(product)
    }

    getProducts( ){
        
        return this.products

    }

    getProductById(id) {
        const productFound = this.products.find(producto => producto.id == id);
    
        if (productFound) {
            return {ok:true, respuesta: productFound};
        } else {
            return {ok: false};
        }
    }

}


const productsList = new ProductManager()

productsList.createProduct({ name: "LCD", price: 50.000 });
productsList.createProduct({ name: "Plantita", price: 20.000 });
productsList.createProduct({ name: "mesa", price: 35.000 });

console.log(productsList.getProductById(0))

module.exports= {productsList}