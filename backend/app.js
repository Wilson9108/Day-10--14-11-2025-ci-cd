const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/name',(req,res)=>{
    res.status(200).json({message:'wilson'})
})

module.exports={app}