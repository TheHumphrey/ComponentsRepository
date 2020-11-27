import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';

const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
