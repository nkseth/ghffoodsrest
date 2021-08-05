import React from 'react';

import { Grid, Box } from '@material-ui/core';


import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import RecentOrders from './RecentOrders'
import TodayOrdersHistory from './TodayOrdersHistory';
import TotalOrders from './TotalOrderHistory';
import TodaysEarning from './TodaysEarningHistory';
import TotalEarnings from './TotalEarningsHistory';
import RevenueSummary from './RevenueChart';
import TopSellingItems from './TopSellingItems';
import OrderChat from './OrderChart'
const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Vendor Dashboard', isActive: true },
];

const CryptoDashboard = () => {
  return (
    <PageContainer heading="Vendor Dashboard" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sm={6} md={3}>
          < TodayOrdersHistory />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalOrders />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          < TodaysEarning />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalEarnings />
        </Grid>
        <Grid item xs={12} xl={5}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} lg={6}>
          <OrderChat/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <RevenueSummary />
        </Grid>
         
        <Grid item xs={12} xl={5}>
          <TopSellingItems />
        </Grid>
        
      </GridContainer>
    </PageContainer>
  );
};

export default CryptoDashboard;
