// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication, replace with real logic as needed
    if (credentials.username === 'ajjay' && credentials.password === 'aks') {
      navigate('/book'); // Redirect to Book page (you can adjust the path based on where you want to go)
    } else {
      alert('Invalid credentials, please try again');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder='Enter Your UserName'
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder='Enter Your Password'
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
