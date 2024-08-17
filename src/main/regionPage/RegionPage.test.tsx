import { render, screen } from '@testing-library/react';

import React from 'react';
import RegionPage from './RegionPage';

test('renders learn react link', () => {
  render(<RegionPage />);
  const sectionElement = screen.getByText(/Region/i);
  expect(sectionElement).toBeInTheDocument();
});
