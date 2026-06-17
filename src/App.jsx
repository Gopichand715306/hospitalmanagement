import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HospitalProvider } from './context/HospitalContext';
import AppRoutes from './Route/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <HospitalProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HospitalProvider>
  );
}

export default App;