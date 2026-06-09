import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HospitalContext } from '../context/HospitalContext';

function DoctorDetails() {
  // Read dynamic url ID string parameter values
  const { id } = useParams();
  const { doctorsData } = useContext(HospitalContext);

  // Search through array list matching database criteria index
  const selectedDoctor = doctorsData.find(doc => doc.id === parseInt(id));

  // Simulating Runtime Error Injection option for testing the ErrorBoundary wrapper
  const triggerSimulatedCrash = () => {
    throw new Error("Academic Evaluation: Simulated runtime error triggered inside profile view.");
  };

  if (!selectedDoctor) {
    return (
      <div className="page-padding text-center">
        <h3>Doctor profile not found.</h3>
        <Link to="/doctors" className="primary-btn">Back to Directory</Link>
      </div>
    );
  }

  return (
    <div className="doctor-detail-wrapper page-padding">
      <div className="detail-card-layout">
        <Link to="/doctors" className="back-nav-arrow">&larr; Back to Listings</Link>
        <div className="detail-header">
          <span className="detail-avatar">👨‍⚕️</span>
          <h2>{selectedDoctor.name}</h2>
          <span className="badge-specialty">{selectedDoctor.specialty}</span>
        </div>
        <div className="detail-body">
          <p><strong>Professional Experience Level:</strong> {selectedDoctor.experience}</p>
          <p><strong>Clinical Biography:</strong> {selectedDoctor.bio}</p>
          <p style={{ color: '#555' }}>
            Accepting patients for consultations on Mondays, Wednesdays, and Fridays. 
            Book an appointment using our standard online web scheduling platform.
          </p>
        </div>

        <div className="error-injection-zone">
          <p className="viva-note-text">👇 Use the button below to test your Error Boundary component implementation.</p>
          <button onClick={triggerSimulatedCrash} className="danger-zone-btn">
            Simulate App Crash Error
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;