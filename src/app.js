import express from "express";
import __dirname from './utils.js';
import productRouter from './routes/productRouter.js'

const app = express();

const admin = false

app.listen(8080,()=>console.log("listening on 8080"));

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use('/api',productRouter);

export default admin