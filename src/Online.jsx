import React from 'react';
import './Online.css'; // Create a CSS file for styling this component

const Online = () => {
  const onlineUsers = ["Farooq Khan", "Kaleem Ullah"];

  return (
    <div className="online-users border border-dark rounded p-3 d-flex flex-column align-items-start">
      <h5 className="mb-3">Online Users</h5>
      <p className="mb-3 text-muted">
        {onlineUsers.length} Online Users (Last 5 Minutes)
      </p>
      <ul className="list-unstyled mb-0">
        {onlineUsers.map((user, index) => (
          <li key={index} className="mb-1">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Online;
