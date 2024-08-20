import { fireEvent, render, screen } from '@testing-library/react';
import { headerOptions, mockAllData } from '../../config/header';

import { AllRegionsData } from '../../config/types';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import { RecoilRoot } from 'recoil';
import { singleRegionHandler } from '../../utils/HelperFunctions';

// Mock the singleRegionHandler function
jest.mock('../../utils/HelperFunctions', () => ({
  singleRegionHandler: jest.fn()
}));

// Mock Timer component
jest.mock('../timer/Timer', () => () => (
  <div data-testid="mock-timer">Timer Component</div>
));

// Mock data for testing
const mockData = mockAllData;

test('renders Header with navigation links and Timer when allData is provided', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <Header allData={mockData as AllRegionsData} />
      </RecoilRoot>
    </BrowserRouter>
  );

  headerOptions.forEach((link) => {
    expect(screen.getByText(link.text)).toBeInTheDocument();
  });
  expect(screen.getByTestId('mock-timer')).toBeInTheDocument();
});

test('calls singleRegionHandler on navigation link click', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <Header allData={mockAllData as AllRegionsData} />
      </RecoilRoot>
    </BrowserRouter>
  );

  // Trigger click event
  const firstRegionLink = screen.getByText(headerOptions[0].text);
  fireEvent.click(firstRegionLink);

  // Check if singleRegionHandler was called
  expect(singleRegionHandler).toHaveBeenCalledWith(
    mockData,
    headerOptions[0].text,
    expect.any(Function)
  );
});
