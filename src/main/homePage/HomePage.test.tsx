import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';
import React from 'react';

test('renders learn react link', () => {
  render(<HomePage />);
  const sectionElement = screen.getByText(/Home Page/i);
  expect(sectionElement).toBeInTheDocument();
  expect(sectionElement).toHaveClass('homepage-section');
});
