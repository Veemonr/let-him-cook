const express = require("express")
const userRouter = require("./userRouter")
const mainRouter = express.Router()

mainRouter.use("/users", userRouter)


module.exports = mainRouter