import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    alert(`Login attempted with Username: ${username} and Password: ${password}`);
  };

  return (
    <div className="signup-contain">
        <h2 className="signup-tit">Login</h2>
      <form  className="signup-for"  onSubmit={handleLogin}>
      <div className="form-grop">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        </div>
        <div className="form-grop">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        </div>
       <div >
        <Link to='/Home'><button  className="signup-bu" type="submit">Login</button>
        </Link>
        </div>
      </form>
    </div>
  );
};


export default Login;
