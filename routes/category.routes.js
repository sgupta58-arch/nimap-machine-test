const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controller");

router.get("/", categoryController.getCategories);
router.put("/:id", categoryController.updateCategory);
router.post("/", categoryController.addCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;