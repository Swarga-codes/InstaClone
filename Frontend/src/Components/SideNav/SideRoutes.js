import React from 'react'
import './Navbar.css'
function SideRoutes({Icon,name}) {
  return (
    
    <div className="route_name">
    <Icon className="route_icon"/>
    <p>{name}</p>
    </div>
  )
}

export default SideRoutes