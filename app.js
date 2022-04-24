const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const db = require("./database/config")
const ru = require("./routes")
app.use("/",ru)




app.listen(5000,console.log("running on port 5000"))