// src/Login.js
import React, { useContext, useState } from 'react';
import '../login.css';
import { loginContext } from './loginContext.jsx'

const Login = () => {

     const {username,setUsername,password,setPassword,showProfile,setShowProfile}=useContext(loginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={()=>{setShowProfile(true)}} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
