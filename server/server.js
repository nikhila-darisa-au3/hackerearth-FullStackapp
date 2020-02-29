const express = require('express')
const app  = express()
const cors = require("cors");
const database = require('./config/database')
const getData = require('./routes/getData')
app.use(cors());
app.use('/',getData)
const PORT = process.env.PORT||8000
app.listen(PORT,()=>{console.log("post listening on",PORT)})