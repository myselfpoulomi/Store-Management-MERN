import express from 'express'

const app= express();

app.get("/",(req,res)=>{
    res.send("api called")
})

app.listen (3000, ()=>{
    console.log("Server Started at http://localhost:3000");
    
})