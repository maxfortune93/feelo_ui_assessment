import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import '@testing-library/jest-dom/extend-expect';

const mockData = {
  supportContact: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  },
  salesOverview: {
    uploads: 5,
    linesAttempted: 100,
    successfulUploads: 90,
    linesSaved: 85,
    lastUploadDate: Date.now()
  }
};

test('renders Account Overview header', () => {
  render(<AccountOverview data={mockData} />);
  const headerElement = screen.getByText(/Account Overview/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders support contact name', () => {
  render(<AccountOverview data={mockData} />);
  const contactNameElement = screen.getByText(/John Doe/i);
  expect(contactNameElement).toBeInTheDocument();
});

test('renders sales info upload success', () => {
  render(<AccountOverview data={mockData} />);
  const uploadSuccessElement = screen.getByText(/90%/i);
  expect(uploadSuccessElement).toBeInTheDocument();
});

test('renders sales info lines saved', () => {
  render(<AccountOverview data={mockData} />);
  const linesSavedElement = screen.getByText(/85%/i);
  expect(linesSavedElement).toBeInTheDocument();
});