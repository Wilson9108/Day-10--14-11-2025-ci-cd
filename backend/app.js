const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/name',(req,res)=>{
    res.status(200).json({message:'wilson'})
})

app.get('/getage',(req,res)=>{
    console.log("getage wilson")
    console.log("get age sung jinwoo")
    res.status(200).json({message:29})
})

module.exports={app}