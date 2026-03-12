const express = require("express");
const router = express.Router();

const controller = require("../controllers/product.controller");

router.get("/", controller.getProducts);

router.post("/add", controller.addProduct);

router.get("/delete/:id", controller.deleteProduct);

module.exports = router;