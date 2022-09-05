import fs from 'fs';

class ProductContainer {

    getAll = async () => {
        try {
            if (fs.existsSync('./src/files/products.json')) {
                let fileData = await fs.promises.readFile('./src/files/products.json', 'utf-8');
                let products = JSON.parse(fileData)
                return products;
            }else{
                return "No hay productos";
            }} catch (error) {
                console.log(error)
            };
    }

    save = async (product) => {
        try{
            let products = await this.getAll ();

            if(products.length === 0){
                product.id=1;
                product.timestamp = new Date().toLocaleString();
                products.push(product);
                await fs.promises.writeFile('./src/files/products.json',JSON.stringify(products,null,'\t'));
                return `Producto Añadido correctamente :` + products[product.id] + product.id
            }else{
                product.id = products[products.length-1].id+1;
                product.timestamp = new Date().toLocaleString();
                products.push(product);
                await fs.promises.writeFile('./src/files/products.json',JSON.stringify(products,null,'\t'));
            }
            return `Producto Añadido correctamente :` + [product]
        }catch(error){
            console.log(error)
        }
    }

    update = async (product,id) => {
        let products = await this.getAll();
        if (id <= products.length){
            product.id = Number(id)
            product.timestamp = products[id-1].timestamp
            products.splice(id-1,1,product)
            await fs.promises.writeFile('./src/files/products.json',JSON.stringify(products,null,'\t'));
            return `Producto actualizado`
        }else{
            return `ID ${id} inexistente`
        }
    }
    
    getOne = async (id) =>{
        try {
            let products = await this.getAll();
            if (id <= products.length){
                return products[[id-1]]
            }else{
                return `ID ${id} inexistente`
            }
            
        } catch (error) {
            console.log(error)  
        }
    }

    deleteOne = async (id) =>{
        try {
            let products = await this.getAll();
            if (id <= products.length){
                products.splice(id-1,1)
                await fs.promises.writeFile('./src/files/products.json',JSON.stringify(products,null,'\t'));
                return `Producto Id ${id} fue eliminado`
            }else{
                return `ID ${id} inexistente`
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    deletAllProducts = async () =>{
        try {
            await fs.promises.writeFile('./src/files/products.json',"[]");
            return `Todos Los productos fueron eliminados correctamente`
        } catch (error) {
            console.log(error)
        }
    }
};

class CartContainer{

    getAllCarts = async () => {
        try {
            if (fs.existsSync('./src/files/carts.json')) {
                let fileData = await fs.promises.readFile('./src/files/carts.json', 'utf-8');
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
                await fs.promises.writeFile('./src/files/carts.json', JSON.stringify(carts, null, '\t'));
                return `Carrito creado con id:${cart.id}`
            } else {
                cart.id = carts[carts.length - 1].id + 1;
                cart.timestamp = new Date().toLocaleString();
                cart.products = []
                carts.push(cart);
                await fs.promises.writeFile('./src/files/carts.json', JSON.stringify(carts, null, '\t'));
                return `Carrito creado con id:${cart.id}`
            }
        } catch (error) { console.log(error) }

    }

    deleteCartById = async (id) => {
        try {
            let carts = await this.getAllCarts();
            if (id <= carts.length) {
                carts.splice(id - 1, 1)
                await fs.promises.writeFile('./src/files/carts.json', JSON.stringify(carts, null, '\t'));
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
                await fs.promises.writeFile('./src/files/carts.json', JSON.stringify(carts, null, '\t'));
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
                await fs.promises.writeFile('./src/files/carts.json', JSON.stringify(carts, null, '\t'));
                return `Producto ${productId} eliminado correctamente`
            }else{
                return `ID ${id} inexistente`
            }
        } catch (error) { console.log(error) }
    }
};

const FsContainer = {
    ProductContainer,
    CartContainer
};

export default FsContainer