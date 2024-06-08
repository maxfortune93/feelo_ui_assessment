import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SupportContact from './SupportContact';

const mockData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890'
};

test('renders your feefo support contact header', () => {
    render(<SupportContact {...mockData} />);
    const contactNameElement = screen.getByText(/your feefo support contact/i);
    expect(contactNameElement).toBeInTheDocument();
  });

test('renders support contact name', () => {
  render(<SupportContact {...mockData} />);
  const contactNameElement = screen.getByText(/John Doe/i);
  expect(contactNameElement).toBeInTheDocument();
});

test('renders support contact email', () => {
  render(<SupportContact {...mockData} />);
  const contactEmailElement = screen.getByText(/john.doe@example.com/i);
  expect(contactEmailElement).toBeInTheDocument();
});

test('renders support contact phone', () => {
  render(<SupportContact {...mockData} />);
  const contactPhoneElement = screen.getByText(/123-456-7890/i);
  expect(contactPhoneElement).toBeInTheDocument();
});
