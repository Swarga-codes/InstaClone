const mongoose=require('mongoose');
const USER=mongoose.model('USER');
const {ObjectId}=mongoose.Schema.Types;
const postsSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
      require:true
    },
    postedBy:{
        type:ObjectId,
        ref:"USER"
    }
})
mongoose.model('POSTS',postsSchema);