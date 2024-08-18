import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HomePage from '../homePage/HomePage';
import React from 'react';
import RegionPage from '../regionPage/RegionPage';

const App = (): React.ReactElement => {
  //Adding React Router DOM to enable navigation between pages and update the URL accordingly
  return (
    <Router>
      <main className="app-container">
        <div className="glass-overlay">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/regions/:region" element={<RegionPage />}></Route>
          </Routes>

          <Footer />
        </div>
      </main>
    </Router>
  );
};

export default App;
