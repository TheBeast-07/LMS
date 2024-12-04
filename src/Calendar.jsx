import React from 'react';
import './Calendar.css'; // Create a CSS file for styling this component

const Calendar = () => {
  return (
    <div className="calendar-container d-flex align-items-center border border-dark rounded my-3 p-3">
      {/* Image Section */}
      <div className="calendar-image me-3">
        <img src="https://s3-alpha-sig.figma.com/img/4c5f/b184/8a06938d08123c8230008f97271d118f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FooQlBV96wSH3i3iEQ8oaMmWMiwjAZW5dIeJXKPHJUzgZS9bp1SSLTlPTsECBBhv3qWsgwbwajIq8wDUWg3DwSj~OkrM9tiP-vKfL6H3ZF96p0oRv7tm-puuSHb0a8qglj7vt9IfohnIvhbuF80PexObO~70UF5mqiTMZWgv9~VP8d-ij-Xeubx4fcaUn2P34Q6ArMxymZeX0d8P3O015~EluflTTRzkCTd5c~ZSKQnYcTc~fXmnj-wWcdb53dZlpbfgyvWSTL7DBshTn694pMaByn8eeVHm66NQBkQhTdipdhftZ8s3ckT2eQWwtZsp7usnuQuuTvVJ5c~MOH6LPg__" alt="" />
      </div>

      {/* Content Section */}
      <div className="calendar-content">
        <h5 className="mb-1">Calendar</h5>
        <p className="text-muted mb-0">See Your Schedule</p>
      </div>
    </div>
  );
};

export default Calendar;
