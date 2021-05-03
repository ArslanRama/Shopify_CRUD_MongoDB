const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.displayProduct);

router.post("/", productController.createProducts);

router.get("/delete/:id", productController.deleteProduct);

// router.post('/update/:id', productController.updateProduct)

module.exports = router;