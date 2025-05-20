import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login to Your Account</h2>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
