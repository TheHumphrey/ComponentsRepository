import React, { ReactElement } from 'react';

import { LoginComponent, GeneralLayout, FooterLayout } from '../../components';

const LoginPage = (): ReactElement => (
  <GeneralLayout>
    <LoginComponent />
    <FooterLayout />
  </GeneralLayout>
);

export default LoginPage;
