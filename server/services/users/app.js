if(process.env.NODE_ENV !== "production") {
   require("dotenv").config()
}
const { connect } = require("./config/mongoDb")
const express = require("express")
const cors = require("express")
const app = express()
const mainRouter = require("./routers/mainRouter")
const errorHandler = require("./middlewares/errorHandler")
const PORT = 3001 || process.env.PORT

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", mainRouter)

app.use(errorHandler)


connect()
 .then(() => {
    console.log("connenct to mongoDb");
    app.listen(PORT, () => {
        console.log("Listen to", PORT);
    })
 })
 .catch((error) => {
    console.log(error);
 })
