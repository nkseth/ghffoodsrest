import React,{useState} from 'react';
import { Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Menucategory from './Menucategory';
import Items from './items';
import Totalcal from './totalcal';
import Customertable from './customertable'
import Addcustomer from './addcustomer'
import OrderPreview from './orderpreview';


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
  { label: 'Orders', link: '/dashboard/Orders' },
  { label: 'Add Orders', isActive: true },
];

const ListingDashboard = () => {
  const classes = useStyles();
  const [placeorder,setplaceorder]=useState("total")
  
  const setplaceo=(item)=>{
    setplaceorder(item)
  }
 
  return (
    <PageContainer heading="Create New Orders" breadcrumbs={breadcrumbs}>
      <Grid container spacing={3} >
     
   <Menucategory/>
   <Items/>
   {
     placeorder==="total"? <Totalcal setplaceorder={setplaceo}/>:null 
    
   }
   {
      placeorder==="ctable"?  <Customertable setplaceorder={setplaceo}/>:null
   }
   {
     placeorder==="addcustomer"?  <Addcustomer  setplaceorder={setplaceo} />:null
    
   }
     {
     placeorder==="orderpreview"?  <OrderPreview  setplaceorder={setplaceo} />:null
    
   }
  </Grid>

    </PageContainer>
  );
};

export default ListingDashboard;
