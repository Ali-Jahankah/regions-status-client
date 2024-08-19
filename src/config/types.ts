//Types for the expected response from the provided API

export interface ServiceStatus {
  redis: boolean;
  database: boolean;
}

export interface Stats {
  servers_count: number;
  online: number;
  session: number;
  server: {
    active_connections: number;
    wait_time: number;
    workers: [string, WorkerStats][];
    cpu_load: number;
    timers: number;
  };
}

export interface WorkerStats {
  wait_time: number;
  workers: number;
  waiting: number;
  idle: number;
  time_to_return: number;
  recently_blocked_keys: [string, number, string][];
  top_keys: [string, number][];
}

export interface ApiResponse {
  status: string;
  region: string;
  roles: string[];
  results: {
    services: ServiceStatus;
    stats: Stats;
  };
  strict: boolean;
  server_issue: any;
}
// Type for the countdown timer
export interface UpdateTimer {
  time: number | null;
  isRefreshed: boolean;
}

// Type for the all-regions data
export type AllRegionsData = ApiResponse[];
//Types for CustomError component
export interface CustomErrorTypes {
  errorCode: number | null;
  errorMessage: string | null;
}
export interface ComponentDataProps {
  allData: AllRegionsData | null;
}
