const mongoose = require('mongoose')
// create connection string

const connection_string = process.env.ConnectionString

// connect to database 
mongoose.connect(connection_string).then((res)=>{
    console.log("Mongodb coonection established with eventApp")
    
}).catch((err)=>{
    console.log("Mongodb connection error :" +err)
    
})
