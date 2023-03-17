const mongoose=require('mongoose');
const USER=mongoose.model('USER');
const {ObjectId}=mongoose.Schema.Types;
const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no preview"
    },
    postedBy:{
        type:ObjectId,
        ref:USER
    }
})
mongoose.model('POSTS',postsSchema);