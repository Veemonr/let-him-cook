if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express");
const cors = require("cors")
const mainRouter = require('./routers/mainRouter');
const errorHandler = require("./middlewares/errorHandler")
const app = express()
const port = 3000 || process.env.PORT


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", mainRouter)

app.use(errorHandler)

app.listen(port, () => {
    console.log("Listen to", port);
})