// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Import the Home component
import Dashboard from './Dashboard.jsx'; // Import the Dashboard component
import Nav from './Nav.jsx'; // Import the Nav component

function App() {
  return (
    <Router>
      <Nav /> {/* Render the Nav component here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component at the root path */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;