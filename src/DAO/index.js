const persistence = "MEMORY";
let productService;
switch(persistence){
    case "MEMORY":
        const {default:MemProduct} = await import('./memory/products.js');
        productService = new MemProduct();
        break;
    case "MONGO":
        const {default:MongoProduct} = await import('./mongoDB/product.js');
        productService = new MongoProduct();
        break;
    case "FS":
        const {default:fileSystem} = await import('./fileSystem/product.js');
        productService = new fileSystem();
        break;
}

const services = {
    productService,
}

export default services