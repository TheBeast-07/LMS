import React from 'react';
import './Private.css'; // Create a new CSS file for Private component styles

const Private = () => {
  return (
    <div className="private d-flex flex-column  border p-3">
      <h5 className="mb-3">Private Files</h5>
      <p className="text-muted mb-3">No files available</p>
      <a href="#" className="btn btn-link">Manage Private Files</a>
    </div>
  );
};

export default Private;
