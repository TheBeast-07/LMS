import React from 'react';
import Nav from './Nav'; // Import the Nav component
import { Link } from 'react-router-dom'; // Importing Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
function Home() {
  return (
    <div className="container-fluid d-flex min-vh-100 p-3">
      {/* Sidebar */}
      <div className="col-lg-3 col-md-4 col-sm-12 text-black p-3">
        <ul className="list-unstyled sidebar-links">
          <li>
            <Link to="/dashboard" className="text-black text-decoration-none">Dashboard</Link>
          </li>
          <li>
            <Link to="/private-files" className="text-black text-decoration-none">Private Files</Link>
          </li>
          <li>
            <Link to="/calendar" className="text-black text-decoration-none">Calendar</Link>
          </li>
          <li>
            <Link to="/my-courses" className="text-black text-decoration-none">My Courses</Link>
          </li>
          <li>
            <Link to="/site-home" className="text-black text-decoration-none">Site Home</Link>
          </li>
          <li>
            <Link to="/my-course" className="text-black text-decoration-none">My Course</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="col-lg-9 col-md-8 col-sm-12 d-flex flex-column px-5 py-3 border border-grey">
        {/* Profile Card on Top */}
        <div className="profile-card-top border-bottom pb-3">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: '50px', height: '50px' }}
            />
            <div>
              <h6 className="mb-1">User Name</h6>
              <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>User ID: 12345</p>
            </div>
          </div>
          <div className="links">
            <Link to="/dashboard" className="text-primary text-decoration-none d-block mb-2">Dashboard/Profile</Link>
          </div>
          <div className="action-boxes d-flex justify-content-end align-items-center">
            <div className="action-box me-3">
              <a href="#" className="text-dark text-decoration-none">Reset this page to default</a>
            </div>
            <div className="action-box">
              <a href="#" className="text-dark text-decoration-none">Customize this page</a>
            </div>
          </div>
        </div>

        {/* User Profile Information and Other Cards */}
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-6">
              {/* User Details Card */}
              <div className="card mb-3 position-relative">
                <div className="card-header">User Details</div>
                <div className="position-absolute top-0 end-0 p-3">
                  <a href="#">Edit Profile</a>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <b>Email Address</b>
                    <div>
                      <a href="#">ahsanayaz@gmail.com</a>
                      <small className="text-muted">(Visible to other course participants)</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    <b>Country</b>
                    <div>Pakistan</div>
                  </div>
                  <div className="mb-3">
                    <b>City/Town</b>
                    <div>Islamabad</div>
                  </div>
                </div>
              </div>

              {/* Privacy Policy Card */}
              <div className="card mb-3">
                <div className="card-header">Privacy and Policy</div>
                <a className="text-decoration-none" href="#">Data Retention summary</a>
              </div>

              {/* Course Details Card */}
              <div className="card mb-3">
                <div className="card-header">Course Details</div>
                <div className="card-body">
                  <h4>Course Profiles</h4>
                  <div>
                    <div><a className="text-decoration-none" href="#">Introduction to Computing Section B</a></div>
                    <div><a className="text-decoration-none" href="#">Object Oriented Programming LAB</a></div>
                    <div><a className="text-decoration-none" href="#">Calculus-1 (8)</a></div>
                    <div><a className="text-decoration-none" href="#">Software Requirement Engineering</a></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Miscellaneous and Reports */}
            <div className="col-md-6">
              {/* Miscellaneous Card */}
              <div className="card mb-3">
                <div className="card-header">Miscellaneous</div>
                <div className="card-body">
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none">Blog entries</a>
                  </div>
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none">Forum Posts</a>
                  </div>
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none">Forum Discussion</a>
                  </div>
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none">Learning Plan</a>
                  </div>
                </div>
              </div>

              {/* Reports Card */}
              <div className="card mb-3 my-3">
                <div className="card-header">Reports</div>
                <div className="card-body">
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none">Browse Selection</a>
                  </div>
                  <div>
                    <a href="#" className="text-decoration-none">Grade Overview</a>
                  </div>
                </div>
              </div>

              {/* Login Activity Card */}
              <div className="card mb-3">
                <div className="card-header">Login Activity</div>
                <div className="card-body">
                  <div className="mb-3">
                    <strong>First access to site:</strong>
                    <div>Friday, 13 October 2023, 12:20 PM (1 year 34 days)</div>
                  </div>
                  <div>
                    <strong>Last access to site:</strong>
                    <div>Friday, 15 November 2024, 6:44 PM (47 secs)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
