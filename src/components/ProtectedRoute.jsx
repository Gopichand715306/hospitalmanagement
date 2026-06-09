import React, { useContext } from 'react';
import { HospitalContext } from '../context/HospitalContext';

/*
  --- PROTECTED ROUTER / SECURE ROUTE PATTERN ---
  This higher-order structural component wraps restricted routes.
  It uses a simple boolean state simulation to allow or deny view access.
*/
function ProtectedRoute({ children }) {
  const { isAdminLoggedIn } = useContext(HospitalContext);

  if (!isAdminLoggedIn) {
    return (
      <div className="access-denied-container">
        <div className="denied-box">
          <h2>⚠️ Access Denied</h2>
          <p>You do not have administrative privileges to view this page.</p>
          <p><em>Click the <strong>"Simulate Login"</strong> button in the navigation header bar to simulate authorization.</em></p>
        </div>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;