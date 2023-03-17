const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const CheckLogin = require('../middlewares/CheckLogin');
const POSTS=mongoose.model('POSTS');
router.post('/createPosts',CheckLogin,(req,res)=>{
    const{title,body}=req.body
    if(!title || !body){
        return res.status(422).json({error:'Please include all the fields'});
    }
console.log(req.user)
const posts=new POSTS({
    title,
    body,
    postedBy:req.user
})
posts.save().then((data)=>{
   return res.json({posts:data})
}
    ).catch(err=>console.log(err));
})
module.exports=router