import React, { ReactElement } from 'react';

import Navbar from 'react-bootstrap/Navbar';

import CSS from 'csstype';
import NavBarStyle from './style';

const navbarStyle: CSS.Properties = {
  width: '97vw',
};

const NavBarLayout = (): ReactElement => {
  return (
    <NavBarStyle>
      <Navbar style={navbarStyle}>
        <Navbar.Brand>
          <span>Way Data Solution</span>
          <div className="userLayout">
            <div className="userInfo">
              <span>Fernando Lima</span>
              <span className="business">@WayDataSolution</span>
            </div>
            <div className="userIcon">
              <img src="https://avatars1.githubusercontent.com/u/47810697?v=4" />
            </div>
          </div>
        </Navbar.Brand>
      </Navbar>
    </NavBarStyle>
  );
};

export default NavBarLayout;
