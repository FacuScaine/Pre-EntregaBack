import mongoose from "mongoose";

 class ProductContainer{
    constructor(collection,schema){
        mongoose.connect('mongodb+srv://FacuScaine:Scaine1234@backend-coder.bvphsqh.mongodb.net/?retryWrites=true&w=majority')
        this.model = mongoose.model(collection,schema);
    }

    getAll = async() =>{
        let results = await this.model.find();
        return results;
    }
    save = async(document) =>{
        let results = await this.model.create(document);
        return results;
    }
    getOne = async(nombre) =>{
        let results = await this.model.find({"Nombre":{$eq:nombre}})
        return results
    }
    deleteOne = async(nombre) =>{
        let results = await this.model.deleteOne({"Nombre":{$eq:nombre}})
        return results
    }
    update = async(newProduct,id) =>{
        let results = await this.model.updateOne({"Nombre":{$eq:id}},{$set:newProduct});
        return results
    }
};

class CartContainer{
    constructor(collection,schema){
        mongoose.connect('mongodb+srv://FacuScaine:Scaine1234@backend-coder.bvphsqh.mongodb.net/?retryWrites=true&w=majority')
        this.model = mongoose.model(collection,schema);
    }

    getAllCarts = async() =>{
        let results = await this.model.find();
        return results;
    }

    createCart = async(Cart) =>{
        let results = await this.model.create(Cart);
        return results;
    }

    deleteCartById = async (id) => {
        try {
            let results = await this.model.deleteOne({"_id":{$eq:id}})
            return results

        } catch (error) { console.log(error) }
    }

    getProductsById = async (id) => {
        try {
            let results = await this.model.find({"_id":{$eq:id}},{"products":1})
            return results
        } catch (error) { console.log(error) }
    };

    // addProductToCart = async (id, product) => {
    //     try {
    //         let result = await this.model.find({"_id":{$eq:id}},{$and:[{$set:}]})
    //         return result
    //     } catch (error) { console.log(error) }
    // };

}

const MongoDbContainer = {
    ProductContainer,
    CartContainer
};

export default MongoDbContainer