class MemoryContainer {
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

    update = async(product, id) => {
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
    }

    //     saveProduct = async (product) => {
    //         try {
    //             let products = await this.getAllProducts();

    //             if (products.length === 0) {
    //                 product.id = 1;
    //                 product.timestamp = new Date().toLocaleString();
    //                 products.push(product);
    //                 await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
    //                 return `Producto Añadido correctamente :` + products[product.id] + product.id
    //             } else {
    //                 product.id = products[products.length - 1].id + 1;
    //                 product.timestamp = new Date().toLocaleString();
    //                 products.push(product);
    //                 await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
    //             }
    //             return `Producto Añadido correctamente :` + [product]
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     replaceProduct = async (product, id) => {
    //         let products = await this.getAllProducts();
    //         if (id <= products.length) {
    //             product.id = Number(id)
    //             product.timestamp = products[id - 1].timestamp
    //             products.splice(id - 1, 1, product)
    //             await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
    //             return `Producto actualizado`
    //         } else {
    //             return `ID ${id} inexistente`
    //         }
    //     }

    //     getProductById = async (id) => {
    //         try {
    //             let products = await this.getAllProducts();
    //             if (id <= products.length) {
    //                 return products[[id - 1]]
    //             } else {
    //                 return `ID ${id} inexistente`
    //             }

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     deleteProductById = async (id) => {
    //         try {
    //             let products = await this.getAllProducts();
    //             if (id <= products.length) {
    //                 products.splice(id - 1, 1)
    //                 await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
    //                 return `Producto Id ${id} fue eliminado`
    //             } else {
    //                 return `ID ${id} inexistente`
    //             }

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     deletAllProducts = async () => {
    //         try {
    //             await fs.promises.writeFile(path, "[]");
    //             return `Todos Los productos fueron eliminados correctamente`
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
};

export default MemoryContainer