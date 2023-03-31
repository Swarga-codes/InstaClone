import React, { useEffect, useState } from 'react'
import PostDetails from '../PostDetails/PostDetails';
import ProfilePicPopup from '../ProfilePicPopup/ProfilePicPopup';
import Navbar from '../SideNav/Navbar'
import './Profile.css'
function Profile() {
  const[posts,setPosts]=useState([]);
  const[profile,setprofile]=useState('');
  const[getPost,setgetPost]=useState([]);
  const[show,setShow]=useState(false);
  const[changeProfilePic,setChangeProfilePic]=useState(false);
  const editProfilePic=()=>{
    if(!changeProfilePic){
      setChangeProfilePic(true);
    }
    else{
      setChangeProfilePic(false);
    }
  }
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
fetch(`http://localhost:5000/users/${JSON.parse(localStorage.getItem('users'))._id}`,{
  method:'GET',
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Bearer '+localStorage.getItem('jwt')
  }
}).then(res=>res.json())
.then(data=>{console.log("Profile data ",data);
setPosts(data.result);
setprofile(data.data[0]);
})
.catch(err=>console.log(err))
  },[])
  return (
    <div className='Profile'>
  <Navbar/>
   <div className="profile_header">
   <div className="profile_image">
   <img src={profile.photo?profile.photo:'https://yt3.ggpht.com/yti/AHXOFjVHVX_kjSaYusVMA1nrtddJ5R2nvBe7wIidMJ8n=s88-c-k-c0x00ffffff-no-rj-mo'} alt="" onClick={editProfilePic}/>
   </div>
   <div className="profile_details">
   <div className="profile_name">
   <h1>{profile.userName}</h1>
   <div className="profile_reach">
   <p>{posts.length} Posts</p>
   <p>{profile.followers? profile.followers.length: "0"} Followers</p>
   <p>{profile.following? profile.following.length: "0"} Following</p>
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
   {
    changeProfilePic &&
    <ProfilePicPopup edit={editProfilePic}/>
   }
    </div>
  )
}

export default Profile