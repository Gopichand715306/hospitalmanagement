import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DoctorContainer from '../components/DoctorContainer';

function Doctors({ filterType }) {
  /*
    --- NESTED ROUTING AND STATE MANAGEMENT ---
    We track active layout categories via explicit route path parameters:
    /doctors -> all cards
    /doctors/cardiology -> filtered array stack
    /doctors/neurology -> filtered array stack
  */
  
  return (
    <div className="doctors-page-wrapper page-padding">
      <h2>Our Medical Specialists</h2>
      <p>Select a medical specialty filter below to update the view via nested routes:</p>

      {/* Specialty Filter Navigation Links */}
      <div className="filter-navigation-bar">
        <NavLink to="/doctors" end className={({ isActive }) => isActive ? 'filter-btn active' : 'filter-btn'}>
          Show All Specialists
        </NavLink>
        <NavLink to="/doctors/cardiology" className={({ isActive }) => isActive ? 'filter-btn active' : 'filter-btn'}>
          Cardiology Unit
        </NavLink>
        <NavLink to="/doctors/neurology" className={({ isActive }) => isActive ? 'filter-btn active' : 'filter-btn'}>
          Neurology Unit
        </NavLink>
      </div>

      {/* Render the Container-Presenter Layout Core */}
      <div className="container-mount-area">
        <DoctorContainer specialtyFilter={filterType} />
      </div>
    </div>
  );
}

export default Doctors;