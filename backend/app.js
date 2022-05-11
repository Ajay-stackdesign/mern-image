const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

app.use(express.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(fileUpload())

const uploadRoute = require("./routes/uploadRoutes")

app.use("/api/v1", uploadRoute)


module.exports = app