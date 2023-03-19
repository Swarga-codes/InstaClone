const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const CheckLogin = require('../middlewares/CheckLogin');
const POSTS=mongoose.model('POSTS');
router.get('/posts',CheckLogin,(req,res)=>{
    POSTS.find()
    .populate('postedBy',"_id userName")
    .then(posts=>res.json(posts))
    .catch(err=>console.log(err));
})
router.get('/profilepage',CheckLogin,(req,res)=>{
    POSTS.find({postedBy:req.user._id})
    .populate('postedBy','_id userName')
    .then(posts=>res.json(posts))
    .catch(err=>console.log(err));
})
router.post('/createPosts',CheckLogin,(req,res)=>{
    const{body,pics}=req.body
    if(!body || !pics){
        return res.status(422).json({error:'Please include all the fields'});
    }
console.log(req.user)
const posts=new POSTS({
    body,
    photo:pics,
    postedBy:req.user
})
posts.save().then((data)=>{
   return res.json({posts:data})
}).catch(err=>console.log(err));
})
router.put('/likes',CheckLogin,(req,res)=>{
    POSTS.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
           return res.status(422).json({error:err})
        }
else{
    res.status(200).json(result)
}
    })
})
router.put('/unlikes',CheckLogin,(req,res)=>{
    POSTS.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
           return res.status(422).json({error:err})
        }
else{
    res.status(200).json(result)
}
    })
})
module.exports=router