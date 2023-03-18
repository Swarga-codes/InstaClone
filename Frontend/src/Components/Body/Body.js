import React from 'react'
import Posts from '../Posts/Posts'
import Navbar from '../SideNav/Navbar'
import './Body.css'
function Body() {
 
  return (
    <div className='Body'>
    <Navbar/>
    <Posts/>
    </div>
  )
}

export default Body