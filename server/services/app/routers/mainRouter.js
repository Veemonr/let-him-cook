const express = require("express")
const mainRouter = express.Router()
const usersRouter = require("./usersRouter")
const publicRouter = require("./publicRouter")
const itemsRouter = require("./itemsRouter")
const categoriesRouter = require("./categoriesRouter")
// const authentication = require("../middlewares/authentication")
// const auhthorizationAdmin = require("../middlewares/authorizationAdmin")

mainRouter.use("/users", usersRouter)
mainRouter.use("/public", publicRouter)

// mainRouter.use(authentication)
// mainRouter.use(auhthorizationAdmin)

mainRouter.use("/items", itemsRouter)
mainRouter.use("/categories", categoriesRouter)

module.exports = mainRouter