import './Header.css';

import { NavLink } from 'react-router-dom';
import React from 'react';
import { headerOptions } from '../../config/header';

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <ul className="header-ul">
        <li className="header-li home">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'header-link active-header-link' : 'header-link'
            }
          >
            Home 🏠
          </NavLink>
        </li>
        {headerOptions.map((link, index) => (
          <li className="header-li" key={index}>
            <NavLink
              to={`/regions/${link.text}`}
              className={({ isActive }) =>
                isActive ? 'header-link active-header-link' : 'header-link'
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
