const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const POSTS=mongoose.model('POSTS');
const USER=mongoose.model('USER');
const CheckLogin=require('../middlewares/CheckLogin')
router.get('/users/:userId',CheckLogin,(req,res)=>{
    USER.find({_id:req.params.userId})
    .select("-password")
    .then(data=>{
        POSTS.find({postedBy:req.params.userId})
        .populate('postedBy')
        .then(result=>res.status(200).json({data,result}))
        .catch(err=>res.status(422).json({error:err}))
    })
    .catch(err=>res.status(422).json({error:err}))
})
module.exports=router