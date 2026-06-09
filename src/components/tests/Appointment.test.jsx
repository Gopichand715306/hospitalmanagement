import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Appointment from '../pages/Appointment';
import { HospitalContext } from '../context/HospitalContext';

const mockProviderValue = {
  doctorsData: [{ id: 1, name: "Dr. A. K. Sharma", specialty: "Cardiology" }],
  addAppointment: jest.fn()
};

describe('Unit Test 2: Appointment Form Field Validation Mechanics', () => {
  test('displays field level warning hints if text submission is empty', () => {
    render(
      <HospitalContext.Provider value={mockProviderValue}>
        <Appointment />
      </HospitalContext.Provider>
    );

    const submitBtn = screen.getByRole('button', { name: /Book Consultation/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Patient name is required.')).toBeInTheDocument();
    expect(screen.getByText("Phone field can't be left empty.")).toBeInTheDocument();
  });
});