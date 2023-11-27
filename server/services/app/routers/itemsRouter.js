const express = require("express")
const itemsRouter = express.Router()
const ControllerItem = require("../controllers/itemsController")

itemsRouter.get("/", ControllerItem.getItems)
itemsRouter.post("/", ControllerItem.createItem)
itemsRouter.delete("/:id", ControllerItem.deleteItem)
itemsRouter.get("/:id", ControllerItem.getItemById)
itemsRouter.put("/:id", ControllerItem.editItem)


module.exports = itemsRouter