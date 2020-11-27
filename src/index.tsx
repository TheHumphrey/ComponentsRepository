import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import store from './store';

import light from './styles/themes/light';

import GlobalStyle from './styles/global';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <ThemeProvider theme={light}>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
