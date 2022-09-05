 class ProductContainer {
    constructor() {
        this.data = []
    }
    getAll = () => {
        try {
            return this.data
        } catch (error) {
            console.log(error)
        }
    }
    save = (product) => {
        try {
            if (this.data.length === 0) {
                product.id = 1;
                product.timestamp = new Date().toLocaleString();
                this.data.push(product)
                return product
            } else {
                product.id = this.data.length + 1
                product.timestamp = new Date().toLocaleString();
                this.data.push(product)
            }
            return product
        } catch (error) {
            console.log(error)
        }
    }

    update = async (product, id) => {
        let data = this.getAll();
        if (id <= data.length) {
            product.id = Number(id)
            product.timestamp = data[id - 1].timestamp
            data.splice(id - 1, 1, product)
            this.data = data
            return `Producto actualizado`
        } else {
            return `ID ${id} inexistente`
        }
    };

    getOne = async (id) => {
        try {
            let products = this.getAll();
            if (id <= products.length) {
                return products[[id - 1]]
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) {
            console.log(error)
        }
    };

    deleteOne = async (id) => {
        try {
            let products = this.getAll();
            if (id <= products.length) {
                products.splice(id - 1, 1)
                this.data = products
                return `Producto Id ${id} fue eliminado`
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) {
            console.log(error)
        }
    }

    deletAllProducts = async () => {
        try {
            this.data = []
            return `Todos Los productos fueron eliminados correctamente`
        } catch (error) {
            console.log(error)
        }
    }
};

class CartContainer{
    constructor(){
        this.productData = []
    }

    getAllCarts = () => {
        try {
            return this.productData
        } catch (error) {
            console.log(error)
        }
    }

    createCart = async () => {
        try {
            let cart = {}
            let carts = this.getAllCarts();
            if (carts.length === 0) {
                cart.id = 1;
                cart.timestamp = new Date().toLocaleString();
                cart.products = []
                this.productData.push(cart)
                return `Carrito creado con id:${cart.id}`
            } else {
                cart.id = carts[carts.length - 1].id + 1;
                cart.timestamp = new Date().toLocaleString();
                cart.products = []
                this.productData.push(cart)
                return `Carrito creado con id:${cart.id}`
            }
        } catch (error) { console.log(error) }

    }

    deleteCartById = async (id) => {
        try {
            let carts = this.getAllCarts();
            if (id <= carts.length) {
                carts.splice(id - 1, 1)
                this.productData = carts
                return `Producto Id:${id} eliminado correctamente`
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) { console.log(error) }
    }

    getProductsById = async (id) => {
        try {
            let carts = this.getAllCarts();
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
            let carts = this.getAllCarts()
            if (id <= carts.length) {
                let cart = carts[id - 1]
                cart.products.push(product)
                this.productData = carts
                return `Producto ${id} añadido correctamente`
            } else {
                return `ID ${id} inexistente`
            }

        } catch (error) { console.log(error) }
    };

    deleteProductFromCart = async (id, productId) => {
        try {
            let carts = this.getAllCarts();
            if(id <= carts.length){
                let cart = carts[id - 1]
                let newCart = cart.products.filter(id => id.id != productId)
                cart.products = newCart
                this.productData = carts
                return `Producto ${productId} eliminado correctamente`
            }else{
                return `ID ${id} inexistente`
            }
        } catch (error) { console.log(error) }
    }
};

const MemoryContainer = {
    ProductContainer,
    CartContainer
};

export default MemoryContainer
