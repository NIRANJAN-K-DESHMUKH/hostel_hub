import "./login.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    if (username === "admin" && password === "admin") {
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      console.log('Invalid');

    }

  };
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="leftDiv">
          <img src="assets/landingPageImage.png" alt="" className="leftImg" />
        </div>
        <div className="rightDiv">

          <form className="loginform" onSubmit={handleSubmit}>
            <h1 id="loginformtitle">Hostel Hub</h1>
            <label className="loginformlabel">Username</label>
            <input type="text" className="loginforminput" id="username" value={username} onChange={handleUsernameChange} />

            <br /><br />
            <label className="loginformlabel">Password</label>
            <input type="password" className="loginforminput" id="password" value={password} onChange={handlePasswordChange} />

            <br /><br />
            
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <button type="submit" id="submitbutton">Login</button>                   
            </Link>

          </form>
        </div>

      </div>

    </div>

  );
};
export default LoginPage;