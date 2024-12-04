import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Nav from './Nav'; // Import the Nav component
import RecentlyAccessedCourses from './RecentlyAccessCourses';
import CourseOverView from './CourseOverView';
import Timeline from './TimeLine';
import Private from './Private';
import Online from './Online';
import Calendar from './Calendar';
import First from './First';

function Dashboard() {
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
                <First/>

                {/* User Profile Information and Other Cards */}
                <div className="container-fluid mt-4">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <div className="d-flex flex-column gap-3">
                                <RecentlyAccessedCourses />
                                <CourseOverView />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <div className="d-flex flex-column gap-3">
                                <Timeline />
                                <Private />
                                <Online />
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
