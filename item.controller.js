const Player=require('../database-mongo/Item.model')


const getPLayers=async(req,res)=>{
    const players =await Player.find({})
    res.status(200).json(players)
}


const getPlayerId=async(req,res)=>{
    const {id}=req.params
    try{
   const players =await Player.findById(id)
   res.status(200).json(players)
    }
    catch(err){
  throw err
    }
}



const createPlayer=async(req,res)=>{
    const {name,position,nationality,age,team,img}=req.body
    try{
        const players=await Player.create({name,position,nationality,age,team,img})
        res.status(201).json(players)
    } catch(err){
         res.status(404).json({mssg:'error'})
    }
}


const deletePlayer=async (req,res)=>{
 const {id}=req.params
 try{
 const players=await Player.findOneAndDelete({_id:id})
 res.status(200).json(players)
 }
 catch(error){
    res.status(400).json({mssg:'error'})
 }
}



const updatePlayer =async (req,res)=>{
    const {id}=req.params
    try{
const players=await Player.findByIdAndUpdate(id,{
    ...req.body 
})
res.status(200).json(players)
    }
    catch(error){
        res.status(400).json({mssg:'error'})
    }
}

module.exports={
    updatePlayer,
    deletePlayer,
    createPlayer,
    getPlayerId,
    getPLayers
}