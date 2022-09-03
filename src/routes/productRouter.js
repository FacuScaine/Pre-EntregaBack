import { Router } from "express";
import services from '../DAO/index.js'

import userLicense from "../middlewares/usersLicense.js";

const router = Router();

router.get('/products', async (req, res) => {
        try {
                let resp = await services.productService.getAll();
                res.send(resp)

        } catch (error) {
                res.status(500).send("Error al buscar productos");
        }

});

router.get('/products/:ID', async (req, res) => {
        try {
                let id = req.params.ID
                let resp = await services.productService.getOne(id);
                res.send(resp)
        } catch (error) {
                res.status(500).send("Error al buscar producto mediante ID");
        }
});

router.put('/products/:ID', userLicense, async (req, res) => {
        try {
                let id = req.params.ID
                let product = req.body
                let resp = await services.productService.update(product,id)
                res.send(resp)
        } catch (error) {
                res.status(500).send("Error al buscar producto mediante ID");
        }
});

router.post('/products', userLicense, async (req, res) => {
        try {
                let product = req.body
                let resp = await services.productService.save(product)
                res.send([resp])
        } catch (error) {
                res.status(500).send("Error al buscar producto mediante ID");
        }
});

router.delete('/products/:ID', userLicense, async (req, res) => {
        try {
                let id = req.params.ID
                let resp = await services.productService.deleteOne(id)
                res.send(resp)
        } catch (error) {
                res.status(500).send("Error al buscar producto mediante ID");
        }
})

export default router