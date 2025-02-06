
const users = require('../Models/userSchema')
exports.addUser= async(req,res)=>{
const {username,email,userId} = req.body

try{
    const user= await users.findOne({email})
    if(user){
        res.status(400).json("user already exist")
    }
    else{
        const newUser = new users({
            username,email,userId 
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
}
catch(error){
    res.status(400).json('Error' + error)
}
}

exports.getUsers= async(req,res)=>{
    console.log("inside get");

    try{
        const response = await users.find()
        res.status(200).json(response)
    }
    catch(error){
        res.status(400).json('Error' + error)
    }
}