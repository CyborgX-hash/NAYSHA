import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="/images/Naysha.png" alt="Naysha Logo" />
      </div>
      <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/form">Plan Trip</Link>
      </div>
      <div className='login'>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default Navbar;
