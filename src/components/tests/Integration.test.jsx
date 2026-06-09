import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Appointment from '../pages/Appointment';
import { HospitalProvider } from '../context/HospitalContext';

describe('Integration Test Suite: Appointment Booking Flow Workflow', () => {
  test('updates input values, verifies telephone lengths, and displays success feedback alert', () => {
    render(
      <HospitalProvider>
        <Appointment />
      </HospitalProvider>
    );

    // Identify targets
    const nameInput = screen.getByTestId('input-name');
    const phoneInput = screen.getByTestId('input-phone');
    const formElement = screen.getByTestId('appointment-form');

    // Simulate real-time typing events
    fireEvent.change(nameInput, { target: { value: 'Aman Deep Student' } });
    fireEvent.change(phoneInput, { target: { value: '123' } }); // Error length target
    
    fireEvent.submit(formElement);
    expect(screen.getByText('Invalid format. Phone numbers must be exactly 10 digits.')).toBeInTheDocument();

    // Fix phone field to satisfy constraints
    fireEvent.change(phoneInput, { target: { value: '9876543210' } });
    
    // Select other required options
    fireEvent.change(screen.getByLabelText(/Age:/i), { target: { value: '23' } });
    fireEvent.change(screen.getByLabelText(/Gender:/i), { target: { value: 'Male' } });
    fireEvent.change(screen.getByLabelText(/Assign Specialist Doctor:/i), { target: { value: 'Dr. A. K. Sharma' } });
    fireEvent.change(screen.getByLabelText(/Appointment Target Date:/i), { target: { value: '2026-07-15' } });

    fireEvent.submit(formElement);
    expect(screen.getByText(/Success! Appointment confirmed for Aman Deep Student/i)).toBeInTheDocument();
  });
});