const express = require("express");
const router = express.Router();

const {Product, validateProduct} = require("../models/product");

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

router.post("/", async (req, res) => {
    const { error } =  validateProduct(req.body);

    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        isActive: req.body.isActive
    });

    const newProduct = await product.save();
    res.send(newProduct);
});

router.put("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) {
        return res.status(404).send("aradığınız ürün bulunamadı.");
    }

    const { error } = validateProduct(req.body);

    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.imageUrl = req.body.imageUrl;
    product.isActive = req.body.isActive;

    const updatedProduct = await product.save();

    res.send(updatedProduct);
});

router.delete("/:id", async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product) {
        return res.status(404).send("aradığınız ürün bulunamadı.");
    }

    res.send(product);
});

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id); 

    if(!product) {
        return res.status(404).send("aradığınız ürün bulunamadı.");
    }
    res.send(product);
});

module.exports = router;