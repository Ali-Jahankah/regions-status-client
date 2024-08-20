import './RegionPage.css';

import React from 'react';
import ServerStatus from '../../components/serverStatus/ServerStatus';

const RegionPage: React.FC = (): React.ReactElement => {
  return (
    <article className="region-container" data-testid="server-status">
      <ServerStatus></ServerStatus>
    </article>
  );
};

export default RegionPage;
