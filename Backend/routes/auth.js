const express=require('express');
const mongoose = require('mongoose');
const router=express.Router();
const data=require('../data');
const USER=mongoose.model("USER");
const bcrypt=require('bcrypt');
router.get('/',(req,res)=>{
    res.json(data);
})
router.get('/about',(req,res)=>{
    res.json("I am about")
})
router.post('/signup',(req,res)=>{
    const {email,name,userName,password}=req.body;
    if(!email || !name || !userName || !password){
        return res.status(422).json({error:'Please fill out the required fields'});
    }
    USER.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
if(savedUser){
    return res.status(422).json({error:'User already exists'});
}
   bcrypt.hash(password,12).then((hashedPassword)=> {
const user=new USER({
    email,
    name,
    userName,
    password:hashedPassword
});
user.save()
.then(user=>{res.json({message:'new user added...'})})
.catch((err)=>{console.log(err)});
})
})
})
module.exports=router