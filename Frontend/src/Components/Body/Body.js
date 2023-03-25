import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import SendIcon from '@mui/icons-material/Send';
import Navbar from '../SideNav/Navbar'
import './Body.css'
import CloseIcon from '@mui/icons-material/Close';
function Body() {
  const[data,setData]=useState([]);
  const[showComment,setShowComment]=useState(false);
  const[items,setItem]=useState([]);
  const clickComment=(posts)=>{
    if(!showComment){
      setShowComment(true);
      console.log('I am clicked')
    setItem(posts);
    }
    else{
      setShowComment(false);
    }
    
  }
const likePosts = (id)=>{
  fetch("http://localhost:5000/likes",{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({
      postId:id
    })
  }).then(res=>res.json())
  .then(result=>{console.log(result);
  const updatedData= data.map((posts)=>{
    if(posts._id===result._id){
      return result;
    }
    else{
      return posts;
    }
  })
  setData(updatedData)
  })
  .catch(err=>console.log(err))
}
const UnlikePosts = (id)=>{
  fetch("http://localhost:5000/unlikes",{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    },
    body: JSON.stringify({
      postId:id
    })
  }).then(res=>res.json())
  .then(result=>{console.log(result);
    const updatedData= data.map((posts)=>{
      if(posts._id===result._id){
        return result;
      }
      else{
        return posts;
      }
    })
    setData(updatedData)
  })
  .catch(err=>console.log(err))
}
 useEffect(()=>{
  fetch('http://localhost:5000/posts',{
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    }
  }).then(res=>res.json())
  .then(data=>{
    console.log(data);
    setData(data);
  })
  .catch(err=>console.log(err))
 },[])
  return (
    <div className='Body'>
    <Navbar/>
    <div className="all_posts">
{data.map(d=>(
  <Posts dat={d} id={d._id} likePosts={likePosts} UnlikePosts={UnlikePosts} comms={clickComment}/>
 
))

}
<div className={showComment?"comment_details":"comment_details_hidden"}>
<div className="comment_container">
<div className="comment_pic">
<img src={items.photo} alt="" />
</div>
<div className="comment_display">
<div className="user_header">
<img src='https://yt3.ggpht.com/yti/AHXOFjVHVX_kjSaYusVMA1nrtddJ5R2nvBe7wIidMJ8n=s88-c-k-c0x00ffffff-no-rj-mo' alt="" />
<p>{items.postedBy?.userName}</p>
</div>
<div className="comment_section">
{items?.comments?.map((com)=>{
  return(
  <p><b>{com?.postedBy?.userName}</b>&nbsp; &nbsp;{com.comment}</p>
)})}


</div>
<div className="likes_caption">
<p>{items?.likes?.length} likes</p>
<br />
<p>{items.body}</p>
</div>

<div className="add_comment">

<input type="text" name='comment' id='name' placeholder='Enter a comment...'/>
<button><SendIcon sx={{backgroundColor:'#201b1b'}}/></button>
</div>
</div>
</div>

<div className="close_comment" onClick={()=>clickComment()}>
<CloseIcon/>
</div>

</div>
    
    </div>

    </div>
  )
}

export default Body