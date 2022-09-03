import fs from 'fs';
const path = 'src/files/carts.json';

class cartManager {

    getAllCarts = async () => {
        try {
            if (fs.existsSync(path)) {
                let fileData = await fs.promises.readFile(path, 'utf-8');
                let carts = JSON.parse(fileData)
                return carts;
            } else {
                return "No hay productos";
            }
        } catch (error) { console.log(error) };
    }

    createCart = async () => {
        try {
            let cart = {}
            let carts = await this.getAllCarts();
            if (carts.length === 0) {
                cart.id = 1;
                cart.timestamp = new Date().toLocaleString();
                cart.products = []
                carts.push(cart);
                await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'));
                return `Carrito creado con id:${cart.id}`
            } else {
                cart.id = carts[carts.length - 1].id + 1;
                cart.timestamp = new Date().toLocaleString();
                cart.products = []
                carts.push(cart);
                await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'));
                return `Carrito creado con id:${cart.id}`
            }
        } catch (error) { console.log(error) }

    }

    deleteCartById = async (id) => {
        try {
            let carts = await this.getAllCarts();
            if (id <= carts.length) {
                carts.splice(id - 1, 1)
                await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'));
                return `Producto Id:${id} eliminado correctamente`
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) { console.log(error) }
    }

    getProductsById = async (id) => {
        try {
            let carts = await this.getAllCarts();
            if (id <= carts.length) {
                let cart = carts[id - 1].products
                return cart
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) { console.log(error) }
    };

    addProductToCart = async (id, product) => {
        try {
            let carts = await this.getAllCarts()
            if (id <= carts.length) {
                let cart = carts[id - 1]
                cart.products.push(product)
                await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'));
                return `Producto ${id} añadido correctamente`
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) { console.log(error) }
    };

    deleteProductFromCart = async (id, productId) => {
        try {
            let carts = await this.getAllCarts();
            if(id <= carts.length){
                let cart = carts[id - 1]
                let newCart = cart.products.filter(id => id.id != productId)
                cart.products = newCart
                await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'));
                return `Producto ${productId} eliminado correctamente`
            }else{
                return `ID ${id} inexistente`
            }
        } catch (error) { console.log(error) }
    }
}

export default cartManager;
