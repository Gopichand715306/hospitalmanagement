import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HospitalContext } from '../context/HospitalContext';

function Navbar() {
  // Consuming Context Values (Demonstrating multi-component usage)
  const { theme, toggleTheme, appointmentCount, isAdminLoggedIn, setIsAdminLoggedIn } = useContext(HospitalContext);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">🏥 City Care Hospital</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointment">Book Appointment ({appointmentCount})</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin" className="admin-link-btn">Admin Portal</Link></li>
      </ul>
      <div className="nav-controls">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <button 
          className="auth-toggle-btn" 
          onClick={() => setIsAdminLoggedIn(prev => !prev)}
        >
          {isAdminLoggedIn ? "Logout Admin" : "Simulate Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;