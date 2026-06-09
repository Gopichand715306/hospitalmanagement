import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HospitalContext } from '../context/HospitalContext';

function Home() {
  const { departmentsData } = useContext(HospitalContext);

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1>Advanced Healthcare, Closer To You</h1>
          <p>Your health is our priority. Experience cutting-edge medical treatments provided by leading clinical staff.</p>
          <div className="hero-btn-group">
            <Link to="/appointment" className="hero-cta-btn">Book An Appointment</Link>
            <Link to="/doctors" className="hero-secondary-btn">Meet Our Specialists</Link>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="home-section page-padding">
        <h2 className="section-title">Our Essential Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>⏰ 24/7 Emergency Care</h3>
            <p>Immediate trauma support and surgical capabilities operational around the clock.</p>
          </div>
          <div className="service-card">
            <h3>🔬 Advanced Diagnostics</h3>
            <p>High-resolution modern imaging facilities and fully automated lab verification panels.</p>
          </div>
          <div className="service-card">
            <h3>💊 Outpatient Pharmacy</h3>
            <p>On-site prescription fulfillment services to ensure rapid, hassle-free healing cycles.</p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="home-section departments-banner page-padding">
        <h2 className="section-title">Clinical Medical Departments</h2>
        <div className="departments-list-flex">
          {departmentsData.map((dept, index) => (
            <div key={index} className="dept-pill">
              <h4>{dept} Department</h4>
              <p>Specialized treatments and modern treatment modules.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;