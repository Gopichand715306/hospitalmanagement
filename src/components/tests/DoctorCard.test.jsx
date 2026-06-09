import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import '@testing-library/jest-dom';

describe('Unit Test 1: DoctorCard Presentation Component', () => {
  const dummyDoctor = {
    id: 9,
    name: "Dr. Mock Test Unit",
    specialty: "Testing Unit",
    experience: "5 Years"
  };

  test('correctly renders doctor details mapped via properties', () => {
    render(
      <BrowserRouter>
        <DoctorCard doctor={dummyDoctor} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Dr. Mock Test Unit')).toBeInTheDocument();
    expect(screen.getByText(/Testing Unit/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Full Profile/i })).toHaveAttribute('href', '/doctors/9');
  });
});