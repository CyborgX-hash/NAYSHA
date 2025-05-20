import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create an Account</h2>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" required />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="Confirm your password" required />

        <button type="submit">Sign Up</button>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
