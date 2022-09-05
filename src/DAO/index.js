const persistence = "MEMORY";
let productService;
let cartService
switch(persistence){
    case "MEMORY":
        const {default:MemProduct} = await import('./memory/products.js');
        const {default:MemCart} = await import('./memory/cart.js');
        productService = new MemProduct();
        cartService = new MemCart();
        break;
    case "MONGO":
        const {default:MongoProduct} = await import('./mongoDB/product.js');
        productService = new MongoProduct();
        break;
    case "FS":
        const {default:FsProduct} = await import('./fileSystem/product.js');
        const {default:FsCart} = await import('./fileSystem/cart.js');
        productService = new FsProduct();
        cartService = new FsCart();
        break;
}

const services = {
    productService,
    cartService
}

export default services