import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Doctors from '../pages/Doctors';
import DoctorDetails from '../pages/DoctorDetails';
import Appointment from '../pages/Appointment';
import Contact from '../pages/Contact';
import AdminDashboard from '../pages/AdminDashboard';
import ProtectedRoute from '../components/ProtectedRoute';

function AppRoutes() {
  return (
    <Routes>
      {/* Basic Navigational Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Nested Routing Layout Strategy */}
      <Route path="/doctors" element={<Doctors />}>
        {/* Default outlet route: showing all doctors */}
        <Route index element={<Navigate to="" replace />} />
        {/* Sub-routes mapping filters */}
        <Route path="cardiology" element={<Doctors filterType="Cardiology" />} />
        <Route path="neurology" element={<Doctors filterType="Neurology" />} />
      </Route>

      {/* Dynamic Route: :id is evaluated at runtime */}
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />

      {/* Secure Protected Route Layout Wrapper */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />

      {/* Catch-all Wildcard Route for Page Not Found requests */}
      <Route path="*" element={<div className="page-padding"><h2>404 Error: Page Not Found</h2></div>} />
    </Routes>
  );
}

export default AppRoutes;