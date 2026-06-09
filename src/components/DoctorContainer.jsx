import React, { useContext, useState } from 'react';
import { HospitalContext } from '../context/HospitalContext';
import DoctorCard from './DoctorCard';

/*
  --- CONTAINER (SMART) COMPONENT ---
  Responsibilities:
  - Owns business logic state parameters.
  - Handles filter logic array operations.
  - Maps data arrays into Presenter Child Components.
*/
function DoctorContainer({ specialtyFilter }) {
  const { doctorsData } = useContext(HospitalContext);

  // Filter logic runs inside the smart container component
  const displayedDoctors = specialtyFilter 
    ? doctorsData.filter(doc => doc.specialty.toLowerCase() === specialtyFilter.toLowerCase())
    : doctorsData;

  return (
    <div className="doctor-grid-layout">
      {displayedDoctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
      {displayedDoctors.length === 0 && (
        <p>No medical staff listed under this explicit department option.</p>
      )}
    </div>
  );
}

export default DoctorContainer;