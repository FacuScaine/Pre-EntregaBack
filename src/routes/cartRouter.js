import { Router } from "express";
import services from "../DAO/index.js";

const router = Router();

router.get('/carts', async(req, res) => {
    try {
        let answ = await services.cartService.getAllCarts()
        res.send(answ)
    } catch (error) {
        res.status(500).send("Error al buscar un carrito");
    }
})

router.post('/carts', async (req, res) => {
    try {
        let answ = await services.cartService.createCart();
        res.send(answ)
    } catch (error) {
        res.status(500).send("Cannot get Carts");
    }

})

router.delete('/carts/:ID', async (req, res) => {
    try {
        let id = req.params.ID;
        let answ = await services.cartService.deleteCartById(id);
        res.send(answ)
    } catch (error) {
        res.status(500).send("Error al buscar un carrito por su ID");
    }
})

router.get('/carts/:ID/products', async(req, res) => {
    try {
        let id = req.params.ID;
        let answ = await services.cartService.getProductsById(id);
        res.send(answ)
    } catch (error) {
        res.status(500).send("Error al buscar productos de un carrito");
    }
})

router.post('/carts/:ID', async(req, res) => {
    try {
        let id = req.params.ID;
        let product = req.body
        let answ = await services.cartService.addProductToCart(id, product)
        res.send(answ)
    } catch (error) {
        res.status(500).send("Error al añadir producto");
    }

})

router.delete('/carts/:ID/products/:productID', async(req, res) => {
    try {
        let id = req.params.ID;
        let productId = req.params.productID;
        let answ = await services.cartService.deleteProductFromCart(id, productId);
        res.send(answ)
    } catch (error) {
        res.status(500).send("Error al eliminar producto por su ID");
    }
})

export default router