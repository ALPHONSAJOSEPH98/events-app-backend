require('dotenv').config()
const cors = require('cors')
const express= require('express')


require('./Db/connection')

const eventapp = express()

const router = require('./Routes/router')
eventapp.use(express.json())
eventapp.use(cors())
eventapp.use(router)

const PORT = 3000 || process.env.PORT

eventapp.listen(PORT,(req,res)=>{
    console.log("event app running on port" +PORT);
    
})