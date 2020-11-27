import React, { ReactElement } from 'react';

import { GeneralLayout, ChartProgress, TableDelivery, FooterLayout, NavBarLayout } from '../../components';

const DashboardPage = (): ReactElement => (
  <GeneralLayout>
    <NavBarLayout />
    <ChartProgress />
    <TableDelivery />
    <FooterLayout />
  </GeneralLayout>
);

export default DashboardPage;
