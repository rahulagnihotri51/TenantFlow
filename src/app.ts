import express from "express";
import {z} from "zod";

const app = express();
app.use(express.json());

const userSchema = z.object({
    name:z.string().min(2),
    email:z.email()
})

app.get('/users',(req,res)=>{
    res.json({
        message:"user received"
    })
})
app.get('',(req,res)=>{
    res.json({
        message:"user received"
    })
})

app.post('/users',(req,res)=>{
    const result = userSchema.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({
            error:result.error
        });
    }

    console.log(req.body);

    res.json({
        message:"rahul",
        user:req.body
    })
})

export default app;