import React from 'react'
import './SignUp.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className="signup">
    <div className="signup_logo">
    <img src={Logo} alt="" />
    </div>
    <div className="signup_fields">
    <div>
    <input type="email" name='email' id='email' placeholder='Enter email'/>
    </div>
    <div>
    <input type="text" name='name' id='name' placeholder='Enter Full Name'/>
    </div>
    <div>
    <input type="text" name='username' id='username' placeholder='Enter Username'/>
    </div>
    <div>
    <input type="password" name='password' id='password' placeholder='Enter Password'/>
    </div>
    <button className='SignUpBtn'>Sign Up</button>
    <p className='existinguser'>Already Registered? <Link to='/login'><span>Sign In</span></Link></p>
    </div>
    </div>
  )
}

export default SignUp