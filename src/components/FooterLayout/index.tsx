import React, { ReactElement } from 'react';

import Navbar from 'react-bootstrap/Navbar';

import CSS from 'csstype';

const navStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '97vw',
  fontSize: '10px',
  fontWeight: 700,
  color: '#748194',
  backgroundColor: '#edf2f9',
};

const footerStyle: CSS.Properties = {
  width: '100%',
  margin: 'auto',
  bottom: 0,
};

const FooterLayout = (): ReactElement => {
  return (
    <footer style={footerStyle}>
      <Navbar style={navStyle}>
        <span>Way Data Solution - Copyright © 2020</span>
      </Navbar>
    </footer>
  );
};

export default FooterLayout;
