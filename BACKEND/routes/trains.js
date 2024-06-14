
const express = require('express')
let Train = require(`../models/Train`)
const router = express.Router();


router.route("/display").get((req,res)=>{
    Train.find().then((resp)=>{
        res.json(resp)
    }).catch((err)=>{
        res.status(500).send({message:"get doesn't work",err})
    })
})



  router.route("/update/:id").put(async(req,res)=>{
    let userId =req.params.id;
    const{
        trainCode,
        trainName,
        departureTime,
        departureLocation,
        destination,
        ticketPrice,
        trainUrl}=req.body

    const updateTrains={
        trainCode,
        trainName,
        departureTime,
        departureLocation,
        destination,
        ticketPrice,
        trainUrl,
    };
    const update =await Train.findByIdAndDelete(userId,updateTrains).then((respo)=>{
        res.status(200).send({status:"updated",respo})
    }).catch((err)=>{
        res.status(500).send({status:"update error",err})
    })
  })


  router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id
    await Train.findByIdAndDelete(userId).then((resD)=>{
        res.status(200).send({status:"deleted",resD})
    }).catch((err)=>{
        res.status(500).send({status:err})
    })
 
  })

  router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id;
    await Train.findById(userId).then((response)=>{
        res.status(200).send({status:"fetched",response})
    }).catch((err)=>{
        res.status(500).send({status:err})
    })
   
  })


  router.route("/add").post((req,res)=>{
    const  trainCode =req.body.trainCode
     const trainName =req.body.trainName
     const departureTime=req.body.departureTime
     const  departureLocation=req.body.departureLocation
     const destination=req.body.destination
     const ticketPrice=req.body.ticketPrice
     const trainUrl=req.body.trainUrl
  
  const newTrain = new Train({
    trainCode,
        trainName,
        departureTime,
        departureLocation,
        destination,
        ticketPrice,
        trainUrl,
  })
newTrain.save().then(()=>{
    res.send("added");

}).catch((err)=>{
    res.send(err)
})
  })
module.exports =router;