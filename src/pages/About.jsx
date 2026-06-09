import React from 'react';

function About() {
  return (
    <div className="about-page-wrapper page-padding">
      <div className="container-narrow">
        <h2>About City Care Hospital</h2>
        <p className="subtitle-lead">Serving the academic and local community with dignity since 1998.</p>
        
        <hr className="divider-line" />

        <div className="about-block">
          <h3>Our Strategic Vision</h3>
          <p>
            To transform healthcare delivery standards through innovation, research-driven diagnostics, 
            and compassionate patient care frameworks.
          </p>
        </div>

        <div className="about-block">
          <h3>Our Active Mission</h3>
          <p>
            To ensure high-quality patient treatment systems, accessible scheduling metrics, 
            and clean environments managed by certified clinical experts.
          </p>
        </div>

        <div className="academic-disclosure-box">
          <h4>VIVA Review Concept checklist:</h4>
          <p>This layout uses structured HTML wrappers coupled with responsive vanilla grid CSS systems to remain readable on cross-device screen widths.</p>
        </div>
      </div>
    </div>
  );
}

export default About;