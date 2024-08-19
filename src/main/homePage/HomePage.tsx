import './HomePage.css';

import React from 'react';

const HomePage: React.FC = (): React.ReactElement => {
  return (
    <article className="homepage-container">
      <div>
        <p>Please click on any region to see live updates.</p>
        <p>You can refresh the data every 60 seconds.</p>
        <p>
          If needed, you can later adjust the update interval and data retrieval
          settings on either the client side or the server side.
        </p>
      </div>
    </article>
  );
};

export default HomePage;
