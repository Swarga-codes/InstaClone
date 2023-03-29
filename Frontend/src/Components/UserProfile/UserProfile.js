import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import PostDetails from '../PostDetails/PostDetails';
import Navbar from '../SideNav/Navbar'
import './UserProfile.css'
function UserProfile() {
  const[posts,setPosts]=useState([]);
  const[profileName,setprofileName]=useState('');
  const[postCount,setPostCount]=useState();
  const[userInfo,setuserInfo]=useState("");
  const[isFollow,setisFollow]=useState(false);
  // const[getPost,setgetPost]=useState([]);
  // const[show,setShow]=useState(false);
  const{userId}=useParams()

console.log('user:',userId)
const followUser=(userFollowId)=>{
  fetch("http://localhost:5000/follow",{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
      Authorization:'Bearer '+localStorage.getItem('jwt')
    },
    body:JSON.stringify({
      followId:userFollowId
    })
  }).then((res)=>res.json())
  .then((data)=>{console.log(data);
    setisFollow(true);
  })
  .catch(err=>console.log(err))
}
const unfollowUser=(userFollowId)=>{
  fetch("http://localhost:5000/unfollow",{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
      Authorization:'Bearer '+localStorage.getItem('jwt')
    },
    body:JSON.stringify({
      followId:userFollowId
    })
  }).then((res)=>res.json())
  .then((data)=>{console.log(data);
  setisFollow(false);
  })
  .catch(err=>console.log(err))
}
//   const detailDisp=(getPost)=>{
//     if(show){
// setShow(false);
//     }
//     else{
//       setShow(true);
//       setgetPost(getPost);
//     }
//   }
  useEffect(()=>{
fetch(`http://localhost:5000/users/${userId}`,{
  method:'GET',
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Bearer '+localStorage.getItem('jwt')
  }
}).then(res=>res.json())
.then(data=>{console.log("Profile data ",data);
setPosts(data.result);
setPostCount(data.result.length)
setprofileName(data.data[0].userName);
setuserInfo(data.data[0]._id)
if(data.data[0].followers.includes(JSON.parse(localStorage.getItem("users"))._id)){
  setisFollow(true);
}
})
.catch(err=>console.log(err))
  },[isFollow])
  return (
    <div className='Profile'>
  <Navbar/>
   <div className="profile_header">
   <div className="profile_image">
   <img src='https://yt3.ggpht.com/yti/AHXOFjVHVX_kjSaYusVMA1nrtddJ5R2nvBe7wIidMJ8n=s88-c-k-c0x00ffffff-no-rj-mo' alt="" />
   </div>
   <div className="profile_details">
   <div className="profile_name">
   <h1>{profileName}{"   "}{!isFollow?<button className='follow_user' onClick={()=>{
    console.log(userInfo)
    followUser(userInfo);}}>Follow</button>:
    <button className='unfollow_user' onClick={()=>{
      console.log(userInfo)
      unfollowUser(userInfo);}}>Unfollow</button>
  }</h1>
   
   <div className="profile_reach">
   <p>{postCount} Posts</p>
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
    //   detailDisp(post);
    }}/>
   ))}
   </div>
  {/* {
    show &&
    <PostDetails items={getPost} detailDisp={detailDisp}/>
   } */}
   
    </div>
  )
}

export default UserProfile