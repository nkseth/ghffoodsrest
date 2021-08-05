import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import DeliveyTable from './table'
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
  { label: 'Delivery Person', link:'/dashboard/DeliveryPerson' },
   { label: 'Delivery Person', isActive: true },
];

const CrmDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Delivery Person Orders" breadcrumbs={breadcrumbs}>
      <GridContainer style={{width:"100%"}}>
     <Grid item sm={12}>
 <DeliveyTable/>
       
     </Grid>
       
      </GridContainer>
    </PageContainer>
  );
};

export default CrmDashboard;
