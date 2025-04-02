import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app= express();

app.get("/",(req,res)=>{
    res.send("api called")
})

app.post("/post",(req,res)=>{
    res.send("post api called")
})

app.put("/put",(req,res)=>{
    res.send("put api called")
})

console.log(process.env.MONGO_URL);


app.listen (3000, ()=>{
    console.log("Server Started at http://localhost:3000");
    
})