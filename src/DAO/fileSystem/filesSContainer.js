import fs from 'fs';
const path = 'src/files/products.json';

class FsContainer {

    getAll = async () => {
        try {
            if (fs.existsSync(path)) {
                let fileData = await fs.promises.readFile(path, 'utf-8');
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
                await fs.promises.writeFile(path,JSON.stringify(products,null,'\t'));
                return `Producto Añadido correctamente :` + products[product.id] + product.id
            }else{
                product.id = products[products.length-1].id+1;
                product.timestamp = new Date().toLocaleString();
                products.push(product);
                await fs.promises.writeFile(path,JSON.stringify(products,null,'\t'));
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
            await fs.promises.writeFile(path,JSON.stringify(products,null,'\t'));
            return `Producto actualizado`
        }else{
            return `ID ${id} inexistente`
        }
    }
    
    getOne= async (id) =>{
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
                await fs.promises.writeFile(path,JSON.stringify(products,null,'\t'));
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
            await fs.promises.writeFile(path,"[]");
            return `Todos Los productos fueron eliminados correctamente`
        } catch (error) {
            console.log(error)
        }
    }
};

export default FsContainer