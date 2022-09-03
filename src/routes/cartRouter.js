// import { Router } from "express";
// import cartManager from "../managers/cartsManager.js";
// import productManager from '../managers/productsManager.js'

// const cartService = new cartManager();
// const productService = new productManager();

// const router = Router();

// router.post('/carts', async (req, res) => {
//     try {
//         let answ = await cartService.createCart();
//         res.send(answ)
//     } catch (error) {
//         res.status(500).send("Cannot get Carts");
//     }

// })

// router.delete('/carts/:ID', async (req, res) => {
//     try {
//         let id = req.params.ID;
//         let answ = await cartService.deleteCartById(id);
//         res.send(answ)
//     } catch (error) {
//         res.status(500).send("Error al buscar un carrito por su ID");
//     }
// })

// router.get('/carts/:ID/products', async(req, res) => {
//     try {
//         let id = req.params.ID;
//         let answ = await cartService.getProductsById(id);
//         res.send(answ)
//     } catch (error) {
//         res.status(500).send("Error al buscar productos de un carrito");
//     }
// })

// router.post('/carts/:ID/:productID', async(req, res) => {
//     try {
//         let id = req.params.ID;
//         let productId = req.params.productID;
//         let product = await productService.getProductById(productId);
//         let answ = await cartService.addProductToCart(id, product)
//         res.send(answ)
//     } catch (error) {
//         res.status(500).send("Error al añadir producto");
//     }

// })

// router.delete('/carts/:ID/products/:productID', async(req, res) => {
//     try {
//         let id = req.params.ID;
//         let productId = req.params.productID;
//         let answ = await cartService.deleteProductFromCart(id, productId);
//         res.send(answ)
//     } catch (error) {
//         res.status(500).send("Error al eliminar producto por su ID");
//     }
// })

// export default router