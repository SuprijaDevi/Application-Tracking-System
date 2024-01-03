import React, { useState } from 'react';
import './Login.css';

function Login() {
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

    console.log('Form data submitted:', formData);

  };

  return (
    <div className="signin-container">
      <div className="signup-container1">
        <h2>Login</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
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
            Don't have an account? <a href="/signup">Sign Up</a>
          </h3>
        </p>
      </div>
    </div>
  );
}

export default Login;
