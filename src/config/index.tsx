export const mockSingleRegion = {
  status: 'Online',
  region: 'us-west',
  results: {
    services: {
      redis: true,
      database: false
    },
    stats: {
      servers_count: 10,
      online: 9,
      session: 5,
      server: {
        active_connections: 200,
        wait_time: 120,
        cpu_load: 0.35,
        timers: 10,
        workers: [
          [
            'worker1',
            {
              wait_time: 50,
              workers: 10,
              waiting: 2,
              idle: 5,
              time_to_return: 30,
              recently_blocked_keys: [
                ['key1', 10, '2024-08-20T00:00:00Z'],
                ['key2', 5, '2024-08-20T00:10:00Z']
              ],
              top_keys: [
                ['key1', 0.1234],
                ['key2', 0.5678]
              ]
            }
          ]
        ]
      }
    },
    strict: true,
    server_issue: 'None'
  }
};
