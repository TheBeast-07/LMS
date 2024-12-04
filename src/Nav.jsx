import React from 'react';
import { GoBell } from "react-icons/go";
import './Nav.css';  

const Nav = () => {
  // Fixed user information
  const userName = 'Ahsan Ayaz';
  const userId = '12345';

  return (
    <nav className="navbar d-flex justify-content-between p-3">
    
      <div className="logo d-flex align-items-center">
        <img 
          src="https://img.freepik.com/premium-vector/software-technology-company-logo-with-connecting-dots-illustration_884294-31.jpg" 
          alt="Logo" 
          className="logo-icon" 
        />
        <span className="logo-text">Structure Limited</span>
      </div>

      <div className="d-flex align-items-center">
        {/* Notifications Icon */}
        <div className="notifications me-3">
          <GoBell />
        </div>

        {/* User Info */}
        <div className="user-info me-3">
          <span className="user-name">{userName}</span>
          <span className="user-id">ID: {userId}</span>
        </div>

        {/* User Profile Image */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
          alt="Profile"
          className="user-profile-pic"
        />
      </div>
    </nav>
  );
};

export default Nav;
