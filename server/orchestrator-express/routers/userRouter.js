const express = require("express")
const userRouter = express.Router()
const UserController = require("../controllers/userController")

userRouter.get("/", UserController.getAllUser)
userRouter.post("/", UserController.createUser)
userRouter.get("/:id", UserController.getUserById)
userRouter.delete("/:id", UserController.deleteById)

module.exports = userRouter