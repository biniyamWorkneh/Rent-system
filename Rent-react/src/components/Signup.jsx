import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className='signup' id='signup'>
    <div className="login-container">
    <h1>Sign up</h1>
    <div className="input-container">
      <h4>user name</h4>
      <input
        type="text"
        placeholder="Username"
      
      />
      <h4>email</h4>
      <input
        type="text"
        placeholder="email"
      
      />
      <h4>password</h4>
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
  </div>
  )
}

export default Signup