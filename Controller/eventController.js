const events = require('../Models/eventSchema')

exports.addEvents= async(req,res)=>{
    const {eventname,description,date,userId} = req.body
    
    try{
       
            const newEvent = new events({
                eventname,description,date,userId 
            })
            await newEvent.save()
            res.status(200).json(newEvent)
        
    }
    catch(error){
        res.status(400).json('Error' + error)
    }
    }

    exports.getEvents= async(req,res)=>{
        console.log("inside get");
         const {userId} = req.params
        try{
            const response = await events.find({userId})
            res.status(200).json(response)
        }
        catch(error){
            res.status(400).json('Error' + error)
        }
    }

    exports.deleteEvent= async(req,res)=>{
        console.log("inside delete")
        const {id} = req.params
      try{
        const response = await events.findByIdAndDelete({_id:id})
        res.status(200).json("deleted")
      }
      catch(error){
        res.status(400).json('Error' + error)
    }
    }

    // exports.updateAnEvent = async(req,res)=>{
    //     const {id} = req.params
    //     const {
    //         event
    //     }
    //     try{
    //       const response = await events.findByIdAndUpdate({_id:id},)  
    //     }
    // }