import React, { useEffect, useState } from 'react'
import PostDetails from '../PostDetails/PostDetails';
import Navbar from '../SideNav/Navbar'
import './Profile.css'
function Profile() {
  const[posts,setPosts]=useState([]);
  const[profileName,setprofileName]=useState('');
  const[getPost,setgetPost]=useState([]);
  const[show,setShow]=useState(false);
  const detailDisp=(getPost)=>{
    if(show){
setShow(false);
    }
    else{
      setShow(true);
      setgetPost(getPost);
    }
  }
  useEffect(()=>{
fetch('http://localhost:5000/profilepage',{
  method:'GET',
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Bearer '+localStorage.getItem('jwt')
  }
}).then(res=>res.json())
.then(data=>{console.log("Profile data ",data);
setPosts(data);
setprofileName(data[0].postedBy.userName);
})
.catch(err=>console.log(err))
  },[])
  return (
    <div className='Profile'>
  <Navbar/>
   <div className="profile_header">
   <div className="profile_image">
   <img src='https://yt3.ggpht.com/yti/AHXOFjVHVX_kjSaYusVMA1nrtddJ5R2nvBe7wIidMJ8n=s88-c-k-c0x00ffffff-no-rj-mo' alt="" />
   </div>
   <div className="profile_details">
   <div className="profile_name">
   <h1>{profileName}</h1>
   <div className="profile_reach">
   <p>{posts.length} Posts</p>
   <p>0 Followers</p>
   <p>0 Following</p>
    </div>
   </div>

   </div>
   </div>
   {/* Gallery Section */}
   <div className="users_posts">
   {posts.map(post=>(
    <img src={post.photo} alt="" onClick={()=>{
      detailDisp(post);
    }}/>
   ))}
   </div>
   {
    show &&
    <PostDetails items={getPost} detailDisp={detailDisp}/>
   }
   
    </div>
  )
}

export default Profile