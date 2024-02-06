import "./login.css";
import React, { useState } from 'react';
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

          <form onSubmit={handleSubmit}>
            <h1>Hostel Hub</h1>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} />

            <br /><br />
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />

            <br /><br />
            <button type="submit">Login</button>
          </form>
        </div>

      </div>

    </div>

  );
};
export default LoginPage;