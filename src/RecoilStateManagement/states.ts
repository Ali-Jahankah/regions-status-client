import {
  AllRegionsData,
  ApiResponse,
  CustomErrorTypes,
  UpdateTimer
} from './../config/types';

import { atom } from 'recoil';

export const regionsState = atom<AllRegionsData | null>({
  key: 'regionsState',
  default: null
});
export const socketState = atom<WebSocket | null>({
  key: 'socketState',
  default: null
});
export const timerState = atom<UpdateTimer>({
  key: 'timerState',
  default: {
    time: null,
    isRefreshed: false
  }
});
export const errorState = atom<CustomErrorTypes>({
  key: 'errorState',
  default: {
    errorCode: null,
    errorMessage: null
  }
});
export const singleRegionState = atom<ApiResponse | null>({
  key: 'singleRegionState',
  default: null
});
export const regionNameState = atom<string | null>({
  key: 'regionNameState',
  default: null
});
