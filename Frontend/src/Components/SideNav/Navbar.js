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
function Navbar() {
  return (
    <div className="SideNav">
      <div className="app_logo">
      <img src={Logo} alt="" />
      </div>
      <div className="nav_routes">
     <SideRoutes Icon={HomeIcon} name="Home"/>
     <SideRoutes Icon={SearchIcon} name="Search"/>
     <SideRoutes Icon={ExploreIcon} name="Explore"/>
     <SideRoutes Icon={MovieIcon} name="Reels"/>
     <SideRoutes Icon={SendIcon} name="Messages"/>
     <SideRoutes Icon={FavoriteBorderIcon} name="Notifications"/>
     <SideRoutes Icon={AddBoxIcon} name="Create"/>
     <SideRoutes Icon={PersonIcon} name="Profile"/>
      </div>
    </div>
  );
}

export default Navbar;