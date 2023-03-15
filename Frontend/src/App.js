
import './App.css';
import Body from './Components/Body/Body';
import { useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import CreatePosts from './Components/CreatePosts/CreatePosts';
// import Navbar from './Components/SideNav/Navbar';

function App() {
  async function fetchData(){
    const res=await fetch('http://localhost:5000/');
    const data=await res.json();
    console.log(data);
     }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Body/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<SignUp/>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/createposts' element={<CreatePosts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
