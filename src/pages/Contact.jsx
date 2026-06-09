import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

function Contact() {
  return (
    <div className="contact-page-wrapper page-padding">
      <div className="contact-split-grid">
        {/* Contact Info */}
        <div className="contact-info-panel">
          <h2>Get In Touch</h2>
          <p>Contact our administrative desks for quick processing or emergencies.</p>
          
          <div className="info-block">
            <h4>📍 Physical Campus Address</h4>
            <p>Building 42, Tech Park Medical Circle, Hyderabad, Telangana, India - 500081</p>
          </div>

          <div className="info-block">
            <h4>📞 Reception Desk Helpline</h4>
            <p>+91 40 5557 8291 / +91 99999 88888</p>
          </div>

          <div className="info-block">
            <h4>✉️ Official Email Registry</h4>
            <p>support@citycarehospital.edu.in</p>
          </div>
        </div>

        {/* Feedback Form Uncontrolled Hook Component */}
        <div className="feedback-mount-panel">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;