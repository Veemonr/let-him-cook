const express = require("express")
const usersRouter = express.Router()
const UsersController = require("../controllers/usersController")

usersRouter.post("/register", UsersController.register)
// usersRouter.post("/login", UsersController.login)

module.exports = usersRouter