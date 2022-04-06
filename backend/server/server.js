const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('../connection/Connection')
const cors = require('cors')
const app = express()
connectDB()
const portnum = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/',require('../routes/UserRoute'))


app.listen(portnum,()=>{
    console.log(`server is working on htttp://localhost:${portnum}`)
})