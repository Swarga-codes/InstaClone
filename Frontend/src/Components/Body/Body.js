import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import Navbar from '../SideNav/Navbar'
import './Body.css'
function Body() {
  const[data,setData]=useState([]);
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
  <Posts dat={d} id={d._id} likePosts={likePosts} UnlikePosts={UnlikePosts}/>

))

}
   
    
    </div>
 
    </div>
  )
}

export default Body