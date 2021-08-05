import React from 'react';
import { Grid } from '@material-ui/core';


import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from './Ordertable'
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const useStyles = makeStyles((theme) => ({
  orderLg2: {
    [theme.breakpoints.up('lg')]: {
      order: 2,
    },
  },
  orderLg1: {
    [theme.breakpoints.up('lg')]: {
      order: 1,
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Orders', isActive: true },
];

const ListingDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Orders" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} >
         <Table/>
        </Grid>
       
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
