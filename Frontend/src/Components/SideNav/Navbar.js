import React from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SideRoutes from "./SideRoutes";
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate=useNavigate();
  const Logout=()=>{
    
    localStorage.clear();
    navigate('/login');
  }
  return (
    <div className="SideNav">
      <div className="app_logo">
      <img src={Logo} alt="" />
      </div>
      <div className="nav_routes">
     <Link to='/'><SideRoutes Icon={HomeIcon} name="Home"/></Link>
     <SideRoutes Icon={SearchIcon} name="Search"/>
     <Link to='/myfollowing'><SideRoutes Icon={ExploreIcon} name="Explore"/></Link>
     <SideRoutes Icon={MovieIcon} name="Reels"/>
     <SideRoutes Icon={SendIcon} name="Messages"/>
     <Link to='/createposts'><SideRoutes Icon={AddBoxIcon} name="Create"/></Link>
     <Link to='/profile'><SideRoutes Icon={PersonIcon} name="Profile"/></Link>
     <div onClick={Logout}><SideRoutes Icon={LogoutIcon} name="Logout"/></div>
      </div>
    </div>
  );
}

export default Navbar;
