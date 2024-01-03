import React, { useState } from 'react';
import './Login.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
    password1: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password1) {
      setPasswordError('Passwords do not match');
      return;
    }

    console.log('Form data submitted:', formData);

    setPasswordError('');
  };

  return (
    <div className="signin-container">
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Ph-Number:</label>
          <input
            type="tel"
            id="mobile"
            placeholder="Ph-Number"
            name="mobile"
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="password1">Confirm Password:</label>
          <input
            type="password"
            id="password1"
            placeholder="Confirm Password"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            required
          />
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p>
        <h3>
          Already have an account?Login
        </h3>
      </p>
      </div>
    </div>
  );
}

export default Signup;