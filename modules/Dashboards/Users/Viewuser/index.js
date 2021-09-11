import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Personalinfo from './table'
import Fun from './profilecomponet'
import Tabs from './tabs'

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
  { label: 'Users',link: '/dashboard/Users'  },
    { label: 'View User', isActive: true },
];

const CrmDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="User Profile" breadcrumbs={breadcrumbs}>
      <GridContainer>
      <Grid item xs={12} >
         
         <Fun/>

        </Grid>   
        <Grid item xs={12} >
         
         <Tabs/>

        </Grid> 
     <Grid item xs={12} >
         
         <Personalinfo/>

        </Grid> 
       
      
      </GridContainer>
    </PageContainer>
  );
};

export default CrmDashboard;
