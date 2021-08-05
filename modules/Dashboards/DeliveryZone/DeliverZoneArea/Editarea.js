import React, { useEffect, useState } from 'react';

import { crm } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';

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
    <GridContainer spacing={6} style={{width:'100%',height:'100%',background:'white',minHeight:'300px',padding:'20px'
     }} alignItems="center">
    <Grid item  sm={12} >
    <TextField  label="Name of Area" variant="outlined" fullWidth />
    </Grid>
     <Grid item  sm={12} md={6}>
         <TextField  label="Radius Of Area"  type="number" variant="outlined" fullWidth/> 
    </Grid>
     <Grid item  sm={12} md={6}>
        <TextField  label="Location Based On Latitude/Lontitude" variant="outlined"  fullWidth/>  
    </Grid>
     <Grid item sm={12}>
        <TextField  label="Vendor" variant="outlined" fullWidth />  
    </Grid>
    <Grid item sm={12} container justifyContent="center" >
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.873601846335!2d79.95283415!3d23.14396615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ad6673439f69%3A0x24425f7565764bba!2sMedical%20Store!5e0!3m2!1sen!2sin!4v1627592549106!5m2!1sen!2sin"
  width={"100%"}
  height={450}
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
    </Grid>
      </GridContainer>
    
  );
};

export default ListingDashboard;
