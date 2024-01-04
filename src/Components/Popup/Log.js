// Log.js

import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Log = ({ onClose, switchForm, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form data submitted:', formData);
    onLogin();
    onClose(); // Close the login popup
  };

  return (
      <div className="signup-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              name="email"
              pattern="^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
        <p>
          <h3>
            Don't have an account?{' '}
            <button type="button" onClick={switchForm}>
              Sign Up
            </button>
          </h3>
        </p>
      </div>
  );
};

export default Log;
