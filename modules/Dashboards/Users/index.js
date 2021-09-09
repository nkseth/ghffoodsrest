import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';

import {useRouter} from 'next/router' 
import makeStyles from '@material-ui/core/styles/makeStyles';
import DeliveryZoneList from './Usertable'
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
  { label: 'Users', isActive: true },
];

const ListingDashboard = () => {
  const router=useRouter()
  const classes = useStyles();
  return (
    <PageContainer heading="User Management" breadcrumbs={breadcrumbs} style={{overflowY:'hidden'}}>
      <GridContainer>
        <Box mb={2}>
        <Button variant="contained" color="primary" onClick={()=>{router.push("/dashboard/Users/Adduser/1")}} >ADD NEW</Button>
        </Box>
        <Grid item xs={12} >

          <DeliveryZoneList />
        </Grid>
       
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
