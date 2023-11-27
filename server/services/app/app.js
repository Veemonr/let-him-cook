if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express")
const app = express()
const cors = require("cors")
const port = 3002 || process.env.PORT
const mainRouter = require("./routers/mainRouter")
const errorHandler = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", mainRouter)

app.use(errorHandler)

app.listen(port, () => {
    console.log("Listen to ",port);
})