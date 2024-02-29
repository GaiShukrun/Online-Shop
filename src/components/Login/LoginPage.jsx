import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import './LoginPage.css'

function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const navigate = useNavigate (); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', formData);
      console.log('Login successful:', response.data);
      // Handle successful login (redirect, display message, etc.)
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login failure (display error message, reset form, etc.)
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/api/login', formData);
  //     console.log('Login successful:', response.data);
  //     // Store token in session storage
  //     sessionStorage.setItem('token', response.data.token); // Assuming token is returned from the server
  //     // Handle successful login (redirect, display message, etc.)
  //     setIsLoggedIn(true);
  //     navigate("/");
  //   } catch (error) {
  //     console.error('Login failed:', error.response.data);
  //     // Handle login failure (display error message, reset form, etc.)
  //   }
  // };

  return (
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      
      <div className="dog">
  <div className="ears"></div>
  
  <div className="body">
    <div className="eyes"></div>
    <div className="beard">
      <div className="mouth">
        <div className="tongue"></div>
      </div>
    </div>
    <div className="belt">
      <div className="locket"></div>
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
      <div className="dot dot4"></div>
      <div className="tag"></div>
    </div>
    <div className="stomach">
    </div>
    <div className="legs">
      <div className="left"></div>
      <div className="right"></div>
    </div>
  </div>
  <div className="tail">
  </div>
</div>
    </div>
    
    
  );
}

export default Login;
