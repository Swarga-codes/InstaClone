import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import Navbar from '../SideNav/Navbar'
import './Body.css'
function Body() {
  const[data,setData]=useState([]);

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
  <Posts dat={d}/>
))

}
   
    
    </div>
 
    </div>
  )
}

export default Body