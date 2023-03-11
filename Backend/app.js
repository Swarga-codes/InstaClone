const express=require('express');
const app=express();
 const data=require('./data');
 const cors=require('cors');
 app.use(cors());
app.get('/',(req,res)=>{
    res.json(data);
})
app.get('/about',(req,res)=>{
    res.json("I am about")
})
app.listen(5000, ()=>{
    console.log("Listening to port...")
})