import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const LoginUser = () =>{
    fetch('http://localhost:5000/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res=>res.json)
    .then(data=>console.log('user authenticated successfully!'))
    .catch(err=>console.log(err));
  }
  return (
    <div className='login'>
    <div className="login_logo">
    <img src={Logo} alt="" />
    </div>
    <div className="login_fields">
    <div>
  <input type="email" name='email' id='email' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div>
  <input type="password" name='password' id='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <button className='LoginBtn' onClick={LoginUser}>Login</button>
    <p className='noaccount'>Don't have an account? <Link to='/signup'><span>SignUp</span></Link></p>
    </div>
    </div>
  )
}

export default Login