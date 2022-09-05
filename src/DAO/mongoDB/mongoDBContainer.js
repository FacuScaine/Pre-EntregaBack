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
    
}

const MongoDbContainer = {
    ProductContainer,
    CartContainer
};

export default MongoDbContainer