import React, { useEffect, useState } from 'react';

import { crm } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import { TextField,Grid, Button } from '@material-ui/core';

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
  Boxgrid1:{
      background:'white',
      
      width:'100%'
  },
  title:{
    fontSize:'1.5rem',
    fontWeight:'bold',
    marginBottom:'8%'
  },
   subtitle:{
    fontSize:'.8rem',
    fontWeight:'normal',
    marginBottom:'8%'
  },
  button:{
      fontSize:'.7rem'
  },
  Boxgrid11:{
      background:'white',
      
      width:'100%'
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'DeliveryZone', link: '/dashboard/DeliveryZone' },
  { label: 'EditAreaFields', isActive: true },
];

const ListingDashboard = () => {
  const classes = useStyles();
  const [DevileryZoneArea,setDevileryZone]=useState([])
  const [selecteitem,setselecteditem]=useState([])
  const [modeltype,setmodeltype]=useState("")
  useEffect(()=>{
setDevileryZone(crm.DeliveryZone)
setselecteditem(crm.DeliveryZone[0])
  },[])

  const selectarea=(itemr)=>{
    setselecteditem(itemr)
  }

  const [model,setmodel]=useState(false)

  const closemodel=()=>{
      setmodel(!model)
      setmodeltype("")
  }

  return (
    <PageContainer heading="Delivery Zone Management" breadcrumbs={breadcrumbs}>

      
      <GridContainer spacing={6} style={{width:'100%',height:'100%',background:'white',minHeight:'300px'
     }} alignItems="center">
    <Grid item  sm={12} md={6}>
    <TextField  label="Delivery Zone Name" variant="outlined" fullWidth />
    </Grid>
     <Grid item  sm={12} md={6}>
         <TextField  label="Admin Email" variant="outlined" fullWidth/> 
    </Grid>
     <Grid item  sm={12} md={6}>
        <TextField  label="Admin Name" variant="outlined"  fullWidth/>  
    </Grid>
     <Grid item sm={12} md={6}>
        <TextField  label="Contact" variant="outlined" fullWidth />  
    </Grid>
    <Grid item sm={12} container justifyContent="center" >
       <Button variant="contained" color="primary">Update Delivery Zone</Button> 
    </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
