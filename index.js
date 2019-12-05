const express = require('express')
const router =require('./config/routes')
const cors = require('cors')
const port = process.env.PORT || 3015;
const app=express()
app.use(express.json())
app.use(cors())
const path = require('path')
app.use('/api',router)
app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 

app.listen(port,function(){
    console.log('listening on the port',port)
})
