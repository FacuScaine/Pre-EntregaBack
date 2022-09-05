const persistence = "MONGO";
let productService;
let cartService
switch (persistence) {
    case "MEMORY":
        const { default: MemProduct } = await import('./memory/products.js');
        const { default: MemCart } = await import('./memory/cart.js');
        productService = new MemProduct();
        cartService = new MemCart();
        break;
    case "FS":
        const { default: FsProduct } = await import('./fileSystem/product.js');
        const { default: FsCart } = await import('./fileSystem/cart.js');
        productService = new FsProduct();
        cartService = new FsCart();
        break;
    case "MONGO":
        const { default: MongoProduct } = await import('./mongoDB/product.js');
        const { default: MongoCart } = await import('./mongoDB/cart.js');
        productService = new MongoProduct();
        cartService = new MongoCart();
        break;
}

const services = {
    productService,
    cartService
}

export default services