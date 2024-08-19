import './Timer.css';

import React, { useEffect, useState } from 'react';
import {
  onRegionClickHandler,
  singleRegionHandler
} from '../../utils/HelperFunctions';
import {
  regionsState,
  singleRegionState,
  socketState,
  timerState
} from '../../RecoilStateManagement/states';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useLocation } from 'react-router-dom';

const Timer: React.FC = () => {
  const [timer, setTimer] = useRecoilState(timerState);
  const [singleRegion, setSingleRegion] = useRecoilState(singleRegionState);
  const [countdown, setCountdown] = useState<number>(60);
  const socket = useRecoilValue(socketState);
  const regions = useRecoilValue(regionsState);
  const location = useLocation();

  const match = location.pathname.match(/\/regions\/([^/]+)/);
  const region = match ? match[1] : null;

  // Initialize countdown when timer.time changes
  useEffect(() => {
    if (timer.time !== undefined) {
      setCountdown(60 - timer.time!);
    }
  }, [timer.time]);

  // Manage countdown and timer state
  useEffect(() => {
    if (countdown <= 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  // Separate effect to handle the timer state update when countdown ends
  useEffect(() => {
    if (countdown === 0) {
      setTimer((prevTimer) => ({ ...prevTimer, isRefreshed: false }));
    }
  }, [countdown, setTimer, setSingleRegion]);
  useEffect(() => {
    if (region && regions) {
      singleRegionHandler(regions, region, setSingleRegion);
    }
  }, [regions, region, setSingleRegion]);
  const handleRefresh = () => {
    setTimer((prev) => ({ ...prev, isRefreshed: true }));
    onRegionClickHandler('all-regions', socket!);
  };

  return (
    <section className="countdown-timer">
      <p>
        {countdown <= 0
          ? 'Please refresh the data!'
          : `Updating data available in ${countdown} seconds...`}
      </p>
      <button
        onClick={handleRefresh}
        className="refresh-btn"
        disabled={timer.isRefreshed}
      >
        Refresh
      </button>
    </section>
  );
};

export default Timer;
