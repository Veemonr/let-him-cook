const express = require("express")
const mainRouter = express.Router()
const userRouter = require("./userRouter")
const itemRouter = require("./itemRouter")
const categoryRouter = require("./categoryRouter")

mainRouter.use("/users", userRouter)
mainRouter.use("/items", itemRouter)
mainRouter.use("/categories", categoryRouter)


module.exports = mainRouter

