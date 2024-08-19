import './RegionPage.css';

import React from 'react';
import ServerStatus from '../../components/serverStatus/ServerStatus';

const RegionPage: React.FC = (): React.ReactElement => {
  return (
    <article className="region-container">
      <ServerStatus></ServerStatus>
    </article>
  );
};

export default RegionPage;
