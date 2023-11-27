const express = require("express")
const publicRouter = express.Router()
const ControllerPublic = require("../controllers/publicController")

// publicRouter.post("/register", ControllerPublic.registerUser)
// publicRouter.post("/login", ControllerPublic.loginUser)
publicRouter.get("/items", ControllerPublic.getItems)
publicRouter.get("/categories", ControllerPublic.getCategories)
publicRouter.post("/items/filter", ControllerPublic.filterItemByCategory)
publicRouter.get("/items/:id", ControllerPublic.getItemById)


module.exports = publicRouter