import { render, screen } from '@testing-library/react';

import RegionPage from '../regionPage/RegionPage';

// Mock ServerStatus component if needed
jest.mock('../../components/serverStatus/ServerStatus', () => () => (
  <div data-testid="mock-server-status">Server Status Component</div>
));

test('renders RegionPage with ServerStatus component', () => {
  render(<RegionPage />);

  const serverStatusElement = screen.getByTestId('server-status');
  expect(serverStatusElement).toBeInTheDocument();

  expect(screen.getByTestId('mock-server-status')).toBeInTheDocument();
});
