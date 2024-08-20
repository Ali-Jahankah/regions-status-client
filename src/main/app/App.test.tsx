import { AllRegionsData, UpdateTimer } from '../../config/types';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot, atom } from 'recoil';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import CustomError from '../../components/errors/CustomError/CustomError';
import HomePage from '../homePage/HomePage';
import RegionPage from '../regionPage/RegionPage';

// Mock Recoil States
const timerState = atom<UpdateTimer | null>({
  key: 'timerStateTest',
  default: null
});

const regionsState = atom<AllRegionsData | null>({
  key: 'regionsStateTest',
  default: null
});

describe('App Component Tests', () => {
  test('renders HomePage on "/" route', async () => {
    render(
      <RecoilRoot>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </RecoilRoot>
    );

    // Output the current HTML to inspect the rendered content
    screen.debug();

    // Ensure HomePage content is rendered
    await waitFor(() => {
      expect(
        screen.getByText(/Please click on any region to see live updates./i)
      ).toBeInTheDocument();
    });
  });

  test('navigates to 500 error page if data or timer is null', async () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          // Create null states for time and regions data
          set(timerState, null);
          set(regionsState, null);
        }}
      >
        {/* Navigate to HomePage */}
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/500" element={<CustomError allData={null} />} />
          </Routes>
        </MemoryRouter>
      </RecoilRoot>
    );

    // Output the current HTML to inspect the rendered content
    screen.debug();

    // Ensure navigation to /500
    await waitFor(() => {
      expect(
        screen.getByText(/Cannot establish a WebSocket connection/i)
      ).toBeInTheDocument();
    });
  });

  test('renders RegionPage on "/regions/:regionId" route', async () => {
    render(
      <RecoilRoot>
        <MemoryRouter initialEntries={['/regions/eu-west']}>
          <Routes>
            <Route path="/regions/:regionId" element={<RegionPage />} />
          </Routes>
        </MemoryRouter>
      </RecoilRoot>
    );

    // Output the current HTML to inspect the rendered content
    screen.debug();

    // Ensure RegionPage content is rendered
    await waitFor(() => {
      expect(screen.getByTestId('server-status')).toBeInTheDocument();
    });
  });
});
