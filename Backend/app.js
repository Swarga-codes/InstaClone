const express=require('express');
const app=express();
 const cors=require('cors');
 const mongoose=require('mongoose');
 const {mongoUrl}=require('./keys');
 const jwt=require('jsonwebtoken');
 const {Secret_key}=require('./keys');
 mongoose.connect(mongoUrl);
 require('./models/model')
 require('./models/posts')
 const routes=require('./routes/auth');
 app.use(express.json())
 app.use(routes)
app.use(require('./routes/createPosts'));
app.use(require('./routes/user'))

 
 mongoose.connection.on('connected',()=> {
    console.log('Connected to the database')
 });
 mongoose.connection.on('error',()=>{
    console.log('Couldnt connect to the database')
 });
 app.use(cors());

app.listen(5000, ()=>{
    console.log("Listening to port...")
})