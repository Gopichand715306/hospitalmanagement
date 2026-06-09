import React, { createContext, useState, useEffect } from 'react';

// Create the Context Object
export const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  /*
    --- VIVA CONCEPT EXPLANATIONS ---
    1. Global State: Data accessible across any nested child component without passing props down.
    2. Prop Drilling: Passing props through multiple layers of components just to reach a deep child. Context solves this.
    3. Theme Management using LocalStorage: Keeps state persistent across browser refreshes.
  */

  // Global State properties
  const [userName, setUserName] = useState("Guest Student");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [appointments, setAppointments] = useState(() => {
    // Initializing state from localStorage (State Colocation / Persistence)
    const saved = localStorage.getItem('appointmentsList');
    return saved ? JSON.parse(saved) : [];
  });

  // Theme state initialized from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('themePreference') || 'light';
  });

  // Synchronize appointments to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('appointmentsList', JSON.stringify(appointments));
  }, [appointments]);

  // Synchronize theme changes to browser storage and DOM class layout
  useEffect(() => {
    localStorage.setItem('themePreference', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const addAppointment = (newAppt) => {
    setAppointments(prev => [...prev, newAppt]);
  };

  /* --- Derived State ---
    Instead of maintaining a separate state variable for count (which could get out of sync),
    we calculate this directly from our existing appointments state array.
  */
  const appointmentCount = appointments.length;

  // Hardcoded Doctor and Department Data Arrays
  const doctorsData = [
    { id: 1, name: "Dr. A. K. Sharma", specialty: "Cardiology", experience: "12 Years", bio: "Senior Cardiologist specializing in bypass and structural heart therapies." },
    { id: 2, name: "Dr. Priya Patel", specialty: "Cardiology", experience: "8 Years", bio: "Non-invasive cardiology specialist with extensive pediatric imaging experience." },
    { id: 3, name: "Dr. Rahul Verma", specialty: "Neurology", experience: "15 Years", bio: "Expert in neuro-degenerative treatment models, epilepsy management, and clinical research." },
    { id: 4, name: "Dr. Sneha Reddy", specialty: "Neurology", experience: "6 Years", bio: "Specialized in micro-neuro surgery tracking, stroke rehabilitation, and critical care units." }
  ];

  const departmentsData = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics"];

  return (
    <HospitalContext.Provider value={{
      userName,
      setUserName,
      isAdminLoggedIn,
      setIsAdminLoggedIn,
      appointments,
      addAppointment,
      appointmentCount,
      theme,
      toggleTheme,
      doctorsData,
      departmentsData
    }}>
      {children}
    </HospitalContext.Provider>
  );
};