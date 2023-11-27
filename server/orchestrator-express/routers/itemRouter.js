const express = require("express")
const itemRouter = express.Router()
const ItemController = require("../controllers/itemController")

itemRouter.get("/", ItemController.getAllItem)
itemRouter.post("/", ItemController.createItem)
itemRouter.delete("/:id", ItemController.deleteItem)
itemRouter.get("/:id", ItemController.getItemById)
itemRouter.put("/:id", ItemController.editItem)

module.exports = itemRouter