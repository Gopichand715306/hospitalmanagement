import React, { useRef, useState } from 'react';

/*
  --- UNCONTROLLED COMPONENT ---
  Responsibilities:
  - Form field inputs are NOT tied to React state.
  - Form fields manage their own values inside the native DOM elements.
  - React accesses values directly using a reference (`useRef`) hook on submission.
*/
function FeedbackForm() {
  // References pointing directly to DOM inputs
  const criticNameRef = useRef(null);
  const commentsRef = useRef(null);
  const ratingRef = useRef(null);

  // Local UI-only message acknowledgment notification state
  const [submissionMsg, setSubmissionMsg] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();

    // Pull current values from standard DOM references
    const nameValue = criticNameRef.current.value;
    const commentValue = commentsRef.current.value;
    const ratingValue = ratingRef.current.value;

    if (!nameValue || !commentValue) {
      alert("Please fill out Name and Comments before submitting raw feedback.");
      return;
    }

    // Process output or log data directly
    console.log("Uncontrolled Form Data Submitted:", {
      name: nameValue,
      comments: commentValue,
      rating: ratingValue
    });

    setSubmissionMsg(`Thank you ${nameValue}! Feedback saved via Direct DOM References.`);
    
    // Clear the values using standard imperative DOM API mutations
    criticNameRef.current.value = "";
    commentsRef.current.value = "";
    ratingRef.current.value = "5";
  };

  return (
    <div className="feedback-form-wrapper">
      <h3>Submit Direct Patient Feedback (Uncontrolled Form)</h3>
      <p className="viva-note-text">
        <em>*Uses <strong>useRef()</strong> to query input values without causing re-renders during text entry.</em>
      </p>

      <form onSubmit={handleFormSubmission} className="college-form">
        <div className="form-group">
          <label>Reviewer Name:</label>
          <input type="text" ref={criticNameRef} placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <select ref={ratingRef}>
            <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
            <option value="4">4 Stars ⭐⭐⭐⭐</option>
            <option value="3">3 Stars ⭐⭐⭐</option>
            <option value="2">2 Stars ⭐⭐</option>
            <option value="1">1 Star ⭐</option>
          </select>
        </div>

        <div className="form-group">
          <label>Comments:</label>
          <textarea ref={commentsRef} rows="3" placeholder="Write review notes here..."></textarea>
        </div>

        <button type="submit" className="submit-btn-primary">Submit Feedback via DOM Refs</button>
      </form>

      {submissionMsg && <div className="success-toast">{submissionMsg}</div>}
    </div>
  );
}

export default FeedbackForm;