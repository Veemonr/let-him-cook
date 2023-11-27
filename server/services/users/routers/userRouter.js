const express = require("express")
const userRouter = express.Router()
const UserController = require("../controllers/controllerUser")

userRouter.post("/", UserController.userCreate)
userRouter.get("/", UserController.findAllUser)
userRouter.get("/:id", UserController.findUserById)
userRouter.delete("/:id", UserController.deleteUser)


module.exports = userRouter