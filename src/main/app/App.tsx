import './App.css';

import { AllRegionsData, UpdateTimer } from '../../config/types';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { regionsState, timerState } from '../../RecoilStateManagement/states';

import CustomError from '../../components/errors/CustomError/CustomError';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HomePage from '../homePage/HomePage';
import NotFound from '../../components/errors/404/NotFound';
import RegionPage from '../regionPage/RegionPage';
import { useRecoilValue } from 'recoil';
import { useWebSocketData } from '../../utils/customHooks/useWebSocketData';

//Adding React Router DOM to enable navigation between pages and update the URL accordingly

const App: React.FC = (): React.ReactElement => {
  useWebSocketData();
  const navigate = useNavigate();
  const timer: UpdateTimer | null = useRecoilValue(timerState);
  const data: AllRegionsData | null = useRecoilValue(regionsState);

  useEffect(() => {
    // Navigate user to 500 error page if server stops or data does not exist
    if (!data || !timer) {
      navigate('/500');
    }
  }, [data, timer, navigate]);
  return (
    <main className="app-container">
      <div className="glass-overlay">
        <Header allData={data} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/regions/:regionId" element={<RegionPage />}></Route>
          <Route path="/500" element={<CustomError allData={data} />}></Route>
          {/* 404 page for all other routes */}
          <Route path="*" element={<NotFound />}></Route>{' '}
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;
