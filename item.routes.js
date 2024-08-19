const express =require('express')
const router=express.Router()
const Player =require('../database-mongo/Item.model.js')
const { updatePlayer, deletePlayer,createPlayer,getPlayerId,getPLayers}=require('../controllers/item.controller') 

//GET ALL players
router.get('/',getPLayers)
//GET ONE player by id 
router.get('/:id',getPlayerId)
//add a player
router.post('/',createPlayer)
//delete a player
router.delete('/:id',deletePlayer)
//update a player 
router.patch('/:id',updatePlayer)

module.exports=router




