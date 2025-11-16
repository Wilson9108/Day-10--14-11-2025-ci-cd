const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("hell")
})

module.exports={app}