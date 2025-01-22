import React from 'react'
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginRegister = () => {
  return (
    <div classname='wrapper'>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser classname="icon"/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock classname="icon"/>
          </div>
          <div className="remember-forget">
            <label><input type="checkbox"/>Remind me</label><a href="#">  Forgot Password ?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account ?<a href="#">  Register</a></p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginRegister