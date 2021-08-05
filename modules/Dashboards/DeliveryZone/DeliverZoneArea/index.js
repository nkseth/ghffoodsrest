import React, { useEffect, useState } from 'react';
import { Grid, Typography,Box ,Button} from '@material-ui/core';
import Editmodel from './Editmodel'
import { crm } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Areatable from './Areatable'
import ModelTable from './moodletable'
import Editarea from './Editarea' 
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
  { label: 'EditArea', isActive: true },
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
        {
modeltype==="DP"?
  <Editmodel open={model} close={closemodel}  title="Delivery person">
         <ModelTable  title="Delivery Person" subtitle="Add, Edit, Manage Delivery person."></ModelTable>
       </Editmodel>:null
        }
       {
      modeltype==="ADDPLACE"?
         <Editmodel open={model} close={closemodel} title="Edit Area">
        <Editarea/>
       </Editmodel>:null
       }
      
      <GridContainer spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4} container direction="column" alignItems="center" justifyContent="center">
           
            <Box className={classes.Boxgrid1} p={3}>
            <Typography className={classes.title} >{DevileryZoneArea[0]?.DeliveryZoneName}</Typography>
            <Typography className={classes.subtitle}>Number Of Delivery Person : 32</Typography>
            <Button variant="contained" size="medium" color="primary" className={classes.button} onClick={()=>{closemodel(); setmodeltype("DP")}}>
                 View Delivery person
            </Button>

              </Box>
           
         
            <Box className={classes.Boxgrid11}  p={3} mt={5}>
            <Button variant="contained" size="medium" color="primary" className={classes.button} onClick={()=>{closemodel() ; setmodeltype("ADDPLACE")}}>
                 Add Area
            </Button>
            <Box mt={4}>
<Areatable selectarea={selectarea} selected={selecteitem}/>
            </Box>

            </Box>
           
            
        </Grid>


         <Grid item container xs={12} md={12} lg={8}  >
           <Box p={4} className={classes.Boxgrid11}>
               <iframe src={selecteitem.maplink} width={"100%"} height={"100%"} style={{border: 0}} allowFullScreen loading="lazy" />
        </Box>
       </Grid>
       
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
