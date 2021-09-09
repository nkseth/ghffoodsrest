import React from 'react';
import { Grid } from '@material-ui/core';


import makeStyles from '@material-ui/core/styles/makeStyles';
import DeliveryZoneList from './Cuisinetable'
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
  { label: 'Cuisines', isActive: true },
];

const ListingDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Cuisine Menu" breadcrumbs={breadcrumbs} style={{overflowY:'hidden'}}>
      <GridContainer>
        <Grid item xs={12} >
          <DeliveryZoneList />
        </Grid>
       
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
