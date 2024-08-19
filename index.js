const express=require('express')
const app=express()
const db=require('./database-mongo/index') 
var cors = require('cors');
app.use(cors());
const PORT=8080
const router=require('./routes/item.routes')
const mongoose=require('mongoose')
app.use(express.json())
mongoose.set('strictQuery', true);
app.use(express.static(__dirname + "/../client/dist"));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/players',router)


app.listen(PORT,()=>{
  console.log('server is listening on port:',PORT);
})