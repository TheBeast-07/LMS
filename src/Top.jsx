import React from 'react';
import './Top.css'; // Add this file for styling the Top section

const Top = ({ userName, userId, userProfilePic }) => {
  return (
    <div className="top-container">
      {/* Nav Section */}
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <img src="https://img.freepik.com/premium-vector/software-technology-company-logo-with-connecting-dots-illustration_884294-31.jpg" alt="Logo" className="logo-icon" />
            <span className="logo-text">Structured Limited</span>
          </div>
        </div>
        <div className="navbar-right">
          <div className="notifications">
            <i className="notification-icon">🔔</i>
          </div>
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-id">ID: {userId}</span>
            <img
              src={userProfilePic || 'https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'}
              alt="Profile"
              className="user-profile-pic"
            />
          </div>
        </div>
      </div>

      {/* User Section Below Navbar */}
      <div className="user-section">
        <div className="user-profile">
          <img
            src={userProfilePic || 'https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'}
            alt="User Profile"
            className="user-profile-pic"
          />
          <div className="user-info">
            <div className="user-name">{userName}</div>
            <div className="user-id">ID: {userId}</div>
            <div className="message">Welcome to your dashboard!</div>
          </div>
        </div>

        <div className="user-actions">
          <div className="action-left">
            <span>Dashboard / Profile</span>
          </div>
          <div className="action-right">
            <button className="action-btn">Reset page to default</button>
            <button className="action-btn">Customize this page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
