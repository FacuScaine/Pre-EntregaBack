import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection ='products';
const productSchema = mongoose.Schema({
    Nombre:String,
    Descripcion:String,
    Codigo:Number,
    Foto:String,
    Precio:Number,
    Stock:Number,
},{timestamps:true})

export default class Product extends MongoDBContainer.ProductContainer{
    constructor(){
        super(collection,productSchema);
    }
}