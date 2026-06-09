import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../context/HospitalContext';

/*
  --- CONTROLLED COMPONENT ---
  Responsibilities:
  - Form field elements are driven entirely by React state variables.
  - Changes trigger handler events which keep state values perfectly mirrored in real-time.
  - This approach simplifies input validations before firing submission logic.
*/
function Appointment() {
  const { doctorsData, addAppointment } = useContext(HospitalContext);

  // Controlled Component State Definitions
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");

  // Validation feedback tracking error state
  const [validationErrors, setValidationErrors] = useState({});
  const [successToast, setSuccessToast] = useState("");

  /*
    --- SESSION STORAGE INTEGRATION ---
    We use sessionStorage to back up values as a "Draft Form Cache" 
    so users don't lose typed data if they accidentally refresh or switch pages.
  */
  useEffect(() => {
    const savedDraft = sessionStorage.getItem('appointmentFormDraft');
    if (savedDraft) {
      const parsed = JSON.parse(savedDraft);
      setPatientName(parsed.patientName || "");
      setAge(parsed.age || "");
      setGender(parsed.gender || "");
      setPhone(parsed.phone || "");
      setSelectedDoctor(parsed.selectedDoctor || "");
      setDate(parsed.date || "");
    }
  }, []);

  // Save current field states into Session Storage on any field value update
  useEffect(() => {
    const draftData = { patientName, age, gender, phone, selectedDoctor, date };
    sessionStorage.setItem('appointmentFormDraft', JSON.stringify(draftData));
  }, [patientName, age, gender, phone, selectedDoctor, date]);

  // Form Validation Logic Handler
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // 1. Validation for Empty Fields
    if (!patientName.trim()) errors.patientName = "Patient name is required.";
    if (!age) errors.age = "Age is required.";
    if (!gender) errors.gender = "Gender selection is required.";
    if (!selectedDoctor) errors.selectedDoctor = "Please choose a professional doctor.";
    if (!date) errors.date = "Please pick a valid calendar booking date.";

    // 2. Validation for Phone Numbers (Regular Expression verifying 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      errors.phone = "Phone field can't be left empty.";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Invalid format. Phone numbers must be exactly 10 digits.";
    }

    // Evaluate validation status
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear operational error flags if validated successfully
    setValidationErrors({});

    // Package details to save to global context array stack
    const appointmentPayload = {
      id: Date.now(),
      patientName,
      age,
      gender,
      phone,
      doctor: selectedDoctor,
      date
    };

    addAppointment(appointmentPayload);
    setSuccessToast(`Success! Appointment confirmed for ${patientName}.`);

    // Reset explicit form states
    setPatientName("");
    setAge("");
    setGender("");
    setPhone("");
    setSelectedDoctor("");
    setDate("");
    sessionStorage.removeItem('appointmentFormDraft'); // Clear draft cache
  };

  return (
    <div className="appointment-page-wrapper page-padding">
      <div className="form-card-container">
        <h2>Schedule an Appointment</h2>
        <p className="viva-note-text">
          <em>*Controlled Component Layout: Every keystroke triggers state transformations.*</em>
        </p>

        {successToast && <div className="success-banner">{successToast}</div>}

        <form onSubmit={handleBookingSubmit} className="college-form" data-testid="appointment-form">
          
          <div className="form-group">
            <label>Patient Name:</label>
            <input 
              type="text" 
              value={patientName} 
              onChange={(e) => setPatientName(e.target.value)} 
              placeholder="Full Name"
              data-testid="input-name"
            />
            {validationErrors.patientName && <span className="error-text">{validationErrors.patientName}</span>}
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label>Age:</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                placeholder="Years"
              />
              {validationErrors.age && <span className="error-text">{validationErrors.age}</span>}
            </div>

            <div className="form-group flex-1">
              <label>Gender:</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {validationErrors.gender && <span className="error-text">{validationErrors.gender}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Contact Phone (10 digits):</label>
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="e.g. 9876543210"
              data-testid="input-phone"
            />
            {validationErrors.phone && <span className="error-text">{validationErrors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Assign Specialist Doctor:</label>
            <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
              <option value="">-- Choose Specialist Below --</option>
              {doctorsData.map(doc => (
                <option key={doc.id} value={doc.name}>{doc.name} ({doc.specialty})</option>
              ))}
            </select>
            {validationErrors.selectedDoctor && <span className="error-text">{validationErrors.selectedDoctor}</span>}
          </div>

          <div className="form-group">
            <label>Appointment Target Date:</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
            {validationErrors.date && <span className="error-text">{validationErrors.date}</span>}
          </div>

          <button type="submit" className="submit-btn-primary">Book Consultation Slate</button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;