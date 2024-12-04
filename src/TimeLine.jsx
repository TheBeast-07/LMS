import React from 'react';
import './Timeline.css'; // Import the CSS file for styling

function Timeline() {
  return (
    <div className="timeline-container">
      <h5 className="timeline-title">Timeline</h5>
      <div className="timeline-boxes">
        <div className="box left-box">
          
        </div>
        <div className="divider"></div>
        <div className="box right-box">
         
        </div>
      </div>
      <div className="no-activity">
        <p>No Upcoming Activity Due</p>
      </div>
    </div>
  );
}

export default Timeline;