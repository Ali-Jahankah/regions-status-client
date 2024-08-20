import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

test('renders HomePage with expected content', () => {
  render(<HomePage />);

  // Check if the specific text is rendered
  expect(
    screen.getByText(/Please click on any region to see live updates./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/You can refresh the data every 60 seconds./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /If needed, you can later adjust the update interval and data retrieval settings on either the client side or the server side./i
    )
  ).toBeInTheDocument();
});
