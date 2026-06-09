import React from 'react';
import { Link } from 'react-router-dom';

/*
  --- PRESENTER (DUMB) COMPONENT ---
  Responsibilities:
  - Has zero lifecycle management hooks, zero state, zero business configurations.
  - Receives explicit structural values via React props.
  - Dictates visual layout structure (Pure Presentation).
*/
function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card" data-testid="doctor-card-element">
      <div className="doctor-avatar">👨‍⚕️</div>
      <h3>{doctor.name}</h3>
      <p className="doc-specialty"><strong>Department:</strong> {doctor.specialty}</p>
      <p className="doc-exp"><strong>Experience:</strong> {doctor.experience}</p>
      <Link to={`/doctors/${doctor.id}`} className="view-details-link">
        View Full Profile &rarr;
      </Link>
    </div>
  );
}

export default DoctorCard;