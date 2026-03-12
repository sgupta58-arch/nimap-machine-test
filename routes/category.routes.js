const express = require("express");
const router = express.Router();

const controller = require("../controllers/category.controller");

router.get("/", controller.getCategories);

router.post("/add", controller.addCategory);

router.get("/delete/:id", controller.deleteCategory);

module.exports = router;