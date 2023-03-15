import React from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SideRoutes from "./SideRoutes";
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="SideNav">
      <div className="app_logo">
      <img src={Logo} alt="" />
      </div>
      <div className="nav_routes">
     <Link to='/'><SideRoutes Icon={HomeIcon} name="Home"/></Link>
     <SideRoutes Icon={SearchIcon} name="Search"/>
     <SideRoutes Icon={ExploreIcon} name="Explore"/>
     <SideRoutes Icon={MovieIcon} name="Reels"/>
     <SideRoutes Icon={SendIcon} name="Messages"/>
     <SideRoutes Icon={FavoriteBorderIcon} name="Notifications"/>
     <Link to='/createposts'><SideRoutes Icon={AddBoxIcon} name="Create"/></Link>
     <Link to='/profile'><SideRoutes Icon={PersonIcon} name="Profile"/></Link>
      </div>
    </div>
  );
}

export default Navbar;
