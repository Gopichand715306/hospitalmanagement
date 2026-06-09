import React, { useContext } from 'react';
import { HospitalContext } from '../context/HospitalContext';

function AdminDashboard() {
  // Consuming context variables to populate system configuration matrices
  const { appointmentCount, doctorsData, departmentsData, appointments } = useContext(HospitalContext);

  return (
    <div className="admin-dashboard-wrapper page-padding">
      <div className="admin-header-strip">
        <h2>🔒 Secure Administration Console</h2>
        <span className="live-status-badge">System Status: Active</span>
      </div>
      <p>This view is restricted and wrapped inside a protected route structure checking boolean state conditions.</p>

      {/* KPI Metric Blocks Summary Panels */}
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>{doctorsData.length}</h3>
          <p>Total Physicians On Duty</p>
        </div>
        <div className="metric-card">
          <h3>{departmentsData.length}</h3>
          <p>Active Clinical Departments</p>
        </div>
        <div className="metric-card">
          <h3>{appointmentCount}</h3>
          <p>Scheduled Appointments</p>
        </div>
      </div>

      {/* Appointment Tracking Log Panel Grid */}
      <div className="appointments-log-table-area">
        <h3>Live Booked Appointment Registrations</h3>
        {appointments.length === 0 ? (
          <p className="no-data-msg">No appointments have been requested by active patients yet.</p>
        ) : (
          <div className="responsive-table-scroll">
            <table className="student-dashboard-table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Age/Gender</th>
                  <th>Contact Number</th>
                  <th>Assigned Medical Officer</th>
                  <th>Target Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td><strong>{appt.patientName}</strong></td>
                    <td>{appt.age} Yrs / {appt.gender}</td>
                    <td>{appt.phone}</td>
                    <td>{appt.doctor}</td>
                    <td><span className="date-tag-element">{appt.date}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;