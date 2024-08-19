import {
  AllRegionsData,
  ApiResponse,
  CustomErrorTypes,
  UpdateTimer
} from '../../config/types';
import {
  errorState,
  regionsState,
  socketState,
  timerState
} from '../../RecoilStateManagement/states';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useWebSocketData = () => {
  const [socket, setSocket] = useRecoilState<WebSocket | null>(socketState);

  const [data, setData] = useRecoilState<AllRegionsData | null>(regionsState);
  const [, setTimer] = useRecoilState<UpdateTimer>(timerState);
  const resetData = useResetRecoilState(regionsState);

  const [errorPage, setErrorPage] =
    useRecoilState<CustomErrorTypes>(errorState);

  const navigate = useNavigate();

  useEffect(() => {
    const wsUrl = process.env.REACT_APP_WS_URL;
    if (!wsUrl) {
      console.error('WebSocket URL is not defined in environment variables.');
      return;
    }

    const socketInstance: WebSocket = new WebSocket(wsUrl);
    setSocket(socketInstance);

    socketInstance.addEventListener('open', () => {
      console.log('New WebSocket connection created');
    });

    socketInstance.addEventListener('close', () => {
      console.log('WebSocket connection closed.');
      setErrorPage({
        errorCode: 500,
        errorMessage:
          'Cannot establish a WebSocket connection. Please ensure that your server is running and accessible.'
      });
      resetData();
      navigate('/500');
    });

    socketInstance.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    socketInstance.addEventListener('message', (event) => {
      try {
        const regionData: {
          updateTime: number;
          regionData: AllRegionsData;
        } = JSON.parse(event.data);
        setData(regionData.regionData);

        setTimer((prev: UpdateTimer) => ({
          ...prev,
          time: regionData.updateTime
        }));

        console.log('Data received and set in state');
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    });

    return () => {
      socketInstance.close();
    };
  }, []);

  return { socket, data };
};
