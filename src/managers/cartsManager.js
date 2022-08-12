import fs from 'fs';
const path = 'src/files/carts.json';

class cartManager {

    getAllCarts = async () => {
        try {
            if (fs.existsSync(path)) {
                let fileData = await fs.promises.readFile(path, 'utf-8');
                let carts = JSON.parse(fileData)
                return carts;
            }else{
                return "No hay productos";
            }} catch (error) {console.log("Cannot write file: "+error)};
    }

    createCart = async () => {
        try{
            let cart = {}
            let carts = await this.getAllCarts();
            if(carts.length === 0){
                cart.id = 1;
                cart.timestamp = new Date().toLocaleString();
                carts.push(cart);
                await fs.promises.writeFile(path,JSON.stringify(carts,null,'\t'));
                return 1
            }else{
                cart.id = carts[carts.length-1].id+1;
                cart.timestamp = new Date().toLocaleString();
                carts.push(cart);
                await fs.promises.writeFile(path,JSON.stringify(carts,null,'\t'));
            }
            return cart.id
        }catch(error){
            console.log("Cannot write file: "+error)
        }
        
    }

    deleteCartById = async (id) =>{
        try {
            let carts = await this.getAllCarts();
            if (id-1 <= carts.length){
                carts.splice(id-1,1)
                await fs.promises.writeFile(path,JSON.stringify(carts,null,'\t'));
            }else{
                return 1
            }
            
        } catch (error) {
            console.log(error + "Deleting product")
        }
    }
    
    getProductsById = async (id) =>{
        try {
            let carts = await this.getAllCarts();
            if (id-1 <= carts.length){
                let cart = carts[id-1].products
                return cart
            }else{
                return 1
            }
            
        } catch (error) {
            console.log(`El producto ID=> ${id} no existe`)  
        }
    }
    replaceProduct = async (product,id) => {
        let products = await this.getAllProducts();
        console.log(1)
        if (id-1 < products.length){
            product.id = Number(id)
            product.timestamp = products[id-1].timestamp
            products.splice(id-1,1,product)
            await fs.promises.writeFile(path,JSON.stringify(products,null,'\t'));
        }else{
            return 1
        }
    }
    

}


export default cartManager;
