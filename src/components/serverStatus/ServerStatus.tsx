import './ServerStatus.css';

import { ApiResponse } from '../../config/types';
import React from 'react';
import { singleRegionState } from '../../RecoilStateManagement/states';
import { useRecoilState } from 'recoil';

const ServerStatus: React.FC = (): React.ReactElement | null => {
  const [selectedRegion] = useRecoilState<ApiResponse | null>(
    singleRegionState
  );

  if (!selectedRegion) {
    return null;
  }

  const { status, region, results, strict, server_issue } = selectedRegion!;
  const { services, stats } = results;
  const { server } = stats;

  return (
    <div className="server-status">
      <header className="status-header">
        <h1>Server Status for {region}</h1>
        <p>
          Status: <span className={`status ${status}`}>{status}</span>
        </p>
      </header>
      <div className="tables-container">
        <section className="services">
          <h2>Services</h2>
          <table>
            <tbody>
              <tr>
                <th>Redis</th>
                <td>{services.redis ? 'Available' : 'Unavailable'}</td>
              </tr>
              <tr>
                <th>Database</th>
                <td>{services.database ? 'Available' : 'Unavailable'}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="stats">
          <h2>Server Stats</h2>
          <table>
            <tbody>
              <tr>
                <th>Servers Count</th>
                <td>{stats.servers_count}</td>
              </tr>
              <tr>
                <th>Online</th>
                <td>{stats.online}</td>
              </tr>
              <tr>
                <th>Session</th>
                <td>{stats.session}</td>
              </tr>
              <tr>
                <th>Active Connections</th>
                <td>{server.active_connections}</td>
              </tr>
              <tr>
                <th>Wait Time</th>
                <td>{server.wait_time} ms</td>
              </tr>
              <tr>
                <th>CPU Load</th>
                <td>{(server.cpu_load * 100).toFixed(2)}%</td>
              </tr>
              <tr>
                <th>Timers</th>
                <td>{server.timers}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <section className="workers">
        <h2>Workers</h2>
        <div className="workers-container">
          {server.workers.map(([name, details]) => (
            <div key={name} className="worker">
              <h3>Worker: {name}</h3>
              <table className="worker-sub-table">
                <tbody>
                  <tr>
                    <th>Wait Time</th>
                    <td>{details.wait_time} ms</td>
                  </tr>
                  <tr>
                    <th>Workers</th>
                    <td>{details.workers}</td>
                  </tr>
                  <tr>
                    <th>Waiting</th>
                    <td>{details.waiting}</td>
                  </tr>
                  <tr>
                    <th>Idle</th>
                    <td>{details.idle}</td>
                  </tr>
                  <tr>
                    <th>Time to Return</th>
                    <td>{details.time_to_return} ms</td>
                  </tr>
                  <tr>
                    <th>Recently Blocked Keys</th>
                    <td>
                      {details.recently_blocked_keys.length > 0 ? (
                        <ul>
                          {details.recently_blocked_keys.map(
                            ([key, count, date]) => (
                              <li key={key}>
                                {key} (Count: {count}, Date:{' '}
                                {new Date(date).toLocaleString()})
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        'None'
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>Top Keys</th>
                    <td>
                      {details.top_keys.length > 0 ? (
                        <ul>
                          {details.top_keys.map(([key, value]) => (
                            <li key={key}>
                              {key} (Value: {value.toFixed(4)})
                            </li>
                          ))}
                        </ul>
                      ) : (
                        'None'
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <section className="strict-issue">
        <h2>Strict Mode and Server Issue</h2>
        <table>
          <tbody>
            <tr>
              <th>Strict</th>
              <td>{strict ? 'Enabled' : 'Disabled'}</td>
            </tr>
            <tr>
              <th>Server Issue</th>
              <td>{server_issue ? server_issue : 'None'}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ServerStatus;
