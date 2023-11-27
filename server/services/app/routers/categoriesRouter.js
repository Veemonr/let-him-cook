const express = require("express")
const categoriesRouter = express.Router()
const ControllerCategories = require("../controllers/categoiresController")

categoriesRouter.get("/", ControllerCategories.getCategories)
categoriesRouter.post("/", ControllerCategories.createCategories)
categoriesRouter.delete("/:id", ControllerCategories.deleteCategory)


module.exports = categoriesRouter