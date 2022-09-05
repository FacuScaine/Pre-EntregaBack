import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection ='carts';
const cartSchema = mongoose.Schema({
    products: []
},{timestamps:true})

export default class Cart extends MongoDBContainer.CartContainer{
    constructor(){
        super(collection,cartSchema);
    }
}