import './Header.css';

import { ComponentDataProps } from '../../config/types';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Timer from '../timer/Timer';
import { headerOptions } from '../../config/header';
import { singleRegionHandler } from '../../utils/HelperFunctions';
import { singleRegionState } from '../../RecoilStateManagement/states';
import { useRecoilState } from 'recoil';

const Header: React.FC<ComponentDataProps> = ({
  allData
}): React.ReactElement | any => {
  const [singleRegion, setSingleRegion] = useRecoilState(singleRegionState);
  return (
    <>
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
                onClick={() => {
                  singleRegionHandler(allData!, link.text, setSingleRegion);
                }}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        {allData && <Timer></Timer>}
      </header>
    </>
  );
};

export default Header;
