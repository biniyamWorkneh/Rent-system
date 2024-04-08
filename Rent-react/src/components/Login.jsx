import React from 'react'
import oo from "../assets/b2.avif"
import './Login.css'

const Login = () => {
  return (
    <div className='login' id='login'>
    <div className="login-container">
    <h1>Log in</h1>
    <div className="input-container">
      <h4>User name</h4>
      <input
        type="text"
        placeholder="Username"
      
      />
      <h4>Email</h4>
      <input
        type="text"
        placeholder="email"
      
      />
      <h4>Password</h4>
      <input
        type="password"
        placeholder="Password"
     
      />
    </div>
    <div className="button-container">
      <button className="login-button">
        register
      </button>
    </div>
  </div> 
  </div> )
}

export default Login