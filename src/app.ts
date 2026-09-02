import express from "express";

const app = express();

app.use(express.json());

app.get('/health',(req,res)=>{
    res.json({
        status:"rahul"
    })
})

app.post('/users',(req,res)=>{
    console.log(req.body);

    res.json({
        message:"hello",
        user:req.body
    })
})

export default app;