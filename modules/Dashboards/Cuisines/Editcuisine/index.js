import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Personalinfo from './Cuisineform'

import { Grid } from '@material-ui/core';
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
  { label: 'Cusines',link: '/dashboard/Cuisines'  },
    { label: 'Edit Cusine', isActive: true },
];

const CrmDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Edit Cuisine" breadcrumbs={breadcrumbs}>
      <GridContainer>
        
     <Grid item xs={12} >
         <Personalinfo/>

        </Grid> 
      
      </GridContainer>
    </PageContainer>
  );
};

export default CrmDashboard;
