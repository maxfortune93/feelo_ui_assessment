import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SalesInfo from './sales-info';

const mockData = {
  uploads: 5,
  linesAttempted: 100,
  successfulUploads: 90,
  linesSaved: 85,
  lastUploadDate: Date.now()
};

test('renders upload success percentage', () => {
  render(<SalesInfo {...mockData} />);
  const uploadSuccessElement = screen.getByText(/90%/i);
  expect(uploadSuccessElement).toBeInTheDocument();
});

test('renders lines saved percentage', () => {
  render(<SalesInfo {...mockData} />);
  const linesSavedElement = screen.getByText(/85%/i);
  expect(linesSavedElement).toBeInTheDocument();
});
