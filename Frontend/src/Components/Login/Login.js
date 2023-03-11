import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
function Login() {
  return (
    <div className='login'>
    <div className="login_logo">
    <img src={Logo} alt="" />
    </div>
    <div className="login_fields">
    <div>
  <input type="email" name='email' id='email' placeholder='Enter email'/>
  </div>
  <div>
  <input type="password" name='password' id='password' placeholder='Enter Password'/>
  </div>
  <button className='LoginBtn'>Login</button>
    <p className='noaccount'>Don't have an account? <Link to='/signup'><span>SignUp</span></Link></p>
    </div>
    </div>
  )
}

export default Login