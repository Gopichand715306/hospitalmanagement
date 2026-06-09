import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} City Care Hospital. All Academic Rights Reserved.</p>
        <p style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
          Built for Final Semester Review | Tech Stack: React, React Router, Context API
        </p>
      </div>
    </footer>
  );
}

export default Footer;