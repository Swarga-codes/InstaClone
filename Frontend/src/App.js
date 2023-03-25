import './App.css';
import Body from './Components/Body/Body';
import { useEffect, useState } from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import CreatePosts from './Components/CreatePosts/CreatePosts';
// import Navbar from './Components/SideNav/Navbar';
import {commentContext} from './context/comments'


function App() {
  const[comment,setComment]=useState('');
  const navigate=useNavigate();
  const[tokenVal,setToken]=useState('')
  const checkToken=()=>{
    const token=localStorage.getItem('jwt');
    if(token){
      console.log('I have a token!');
      setToken(token);
     navigate('/');
    }
    else{
      console.log('I dont have !')
      navigate('/login');
    }
  }
 
  useEffect(() => {
    checkToken();
  }, [tokenVal])
  
  return (
  <commentContext.Provider value={{comment,setComment}}>
    <Routes>
 
      <Route exact path='/' element={<Body/>}/>
      
      <Route exact path='/login' element={<Login/>}/>
    


    <Route exact path='/signup' element={<SignUp/>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/createposts' element={<CreatePosts/>}/>
    </Routes>
    </commentContext.Provider>
  );
}

export default App;
