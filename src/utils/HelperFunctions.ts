import { AllRegionsData, ApiResponse } from './../config/types';

import { SetterOrUpdater } from 'recoil';

export const onRegionClickHandler = (region: string, socket: WebSocket) => {
  if (socket) {
    socket.send(JSON.stringify({ region }));
  }
};
export const singleRegionHandler = (
  regions: AllRegionsData,
  regionName: string,
  setRegion: SetterOrUpdater<ApiResponse | null>
): void => {
  const selectedRegion: ApiResponse = regions.find(
    (region) => region.region === regionName
  )!;
  setRegion(selectedRegion);
};
