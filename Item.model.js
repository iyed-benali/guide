const mongoose = require("mongoose");
const db = require("./index.js");

const playersSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  nationality:{
    type:String,
    required:true
  },
  age:{
type:Number,
required:true
  },
  team:{
    type:String,
    required:true
  },
  img:{
    type:String,
    required:true
  }

});

const Player = mongoose.model("Players", playersSchema);

module.exports = Player;