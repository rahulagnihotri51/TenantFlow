import express = require('express');

const app = express();

app.use(express.json());

app.get('/users',(req,res)=>{
    res.json(({
        message:"User recieved"
    }))
})
app.post('/users',(req,res)=>{
    console.log(req.body);
    res.json(({
        message:"Rahul",
        user:req.body
    }))
})

module.exports = app;