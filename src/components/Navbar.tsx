import React from 'react';

const Navbar = () => {
  return (
      <nav className="custom-navbar">
  <div className="navbar-container">
    <a href="/" className="brand-logo">
      <img src="/public/images/logo.jpeg" alt="Dr. Dhanshree Logo" className="logo-img" />
      <span className="brand-text">Dr. Dhanshree's Dental Clinic</span>
    </a>
  </div>
</nav>
  );
};


export default Navbar;