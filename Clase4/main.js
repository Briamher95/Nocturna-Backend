"use strict";
class Product {
    constructor(title, price, stock, id) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.id = id;
    }
}
class Cart {
    constructor(id) {
        this.cart = [];
        this.id = id;
    }
}
class CartManager {
    constructor() {
        this.carts = [];
        this.id = 0;
    }
    createCart() {
        this.carts.push(new Cart(this.id++));
    }
    getCartById(cid) {
        const carritoBuscado = this.carts.find((cart) => cart.id === cid);
        return carritoBuscado ? carritoBuscado : null;
    }
    addProductCart(cid, product, quantity) {
        const cartActual = this.getCartById(cid);
        if (cartActual !== null) {
            const productoBuscado = cartActual.cart.find((producto) => producto.id === product.id);
            if (productoBuscado !== undefined) {
                productoBuscado.stock += quantity;
            }
            else {
                cartActual.cart.push(product);
            }
        }
    }
}
const managerCarts = new CartManager();
managerCarts.createCart();
console.log("abajo es el log  del carrito que buscamos por el Id");
console.log(managerCarts.getCartById(0));
managerCarts.addProductCart(0, new Product("Pantalon", 100, 10, "1"), 10);
console.log(managerCarts);
// createCart() creara un carrito con las propiedades cart (empieza como array vacio) y id (cada nuevo carrito debera tener un id distinto)
//getCartById(cid) => recibira un cartId y devolvera el carrito buscado sino devuelve null
/* addProductCart(cid, product, quantity) => recibira un cartId y un product : Product y una cantidad : number,
Si el producto ya existe en el carrito:
-Incrementara la quantity del producto ya existente por la quantity pasada por parametro


Sino:

-Agregara la propiedad quantity a el product y a ese product lo agregara al array del carrito cuyo id sea identico al cid pasado por parametro. */ 
