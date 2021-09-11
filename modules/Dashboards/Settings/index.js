import React from 'react';
import { Grid ,Box,Typography} from '@material-ui/core';


import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Commoncomp from './Commoncomponent'
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import { AssignmentIndOutlined, Contacts, DirectionsBikeOutlined, EmailOutlined, ListAltOutlined, LocalAtmOutlined, PowerOffOutlined, PowerSettingsNewOutlined } from '@material-ui/icons';

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
  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 16,
    },
   

  },
   subtitle:{
      
     fontSize:".7rem",
      color:'gray'
      
    }
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Settings', isActive: true },
];
const Settings=[
  {
    title:"General Settings",
    logo:<SettingsIcon style={{fontSize:'100px'}}/>,
    discription:'General Settings Such As, Site Title, Site Description, Address And So On.',
    
  },
  {
    title:"Payment Setting",
    logo:<LocalAtmOutlined style={{fontSize:'100px'}}/>,
    discription:'Change The Payment Modes For The Transaction.',
    
  },
  {
    title:"Email",
    logo:<EmailOutlined style={{fontSize:'100px'}}/>,
    discription:'Email SMTP Settings, Notifications And Others Related To Email.',
    
  },
  {
    title:"System",
    logo:<PowerSettingsNewOutlined style={{fontSize:'100px'}}/>,
    discription:'Andriod Ane IOS Version Settings.',
    
  },
  {
    title:"Static Pages",
    logo:<DescriptionIcon style={{fontSize:'100px'}}/>,
    discription:'Bussiness Static Pages Like Help About Us Privacy Policy Etc.',
    
  },
  {
    title:"Order Related Settings",
    logo:<ListAltOutlined style={{fontSize:'100px'}}/>,
    discription:'Order Related Settings.',
    
  },
  {
    title:"Delivery Person Setting",
    logo:<DirectionsBikeOutlined style={{fontSize:'100px'}}/>,
    discription:'Bussiness Static Pages Like Help About Us Privacy Policy Etc.',
    
  },
  {
    title:"User / Vendor Verification Setting",
    logo:<AssignmentIndOutlined style={{fontSize:'100px'}}/>,
    discription:'General Settings Such As, Site Title, Site Description.',
    
  },
  {
    title:"License Code",
    logo:<Contacts style={{fontSize:'100px'}}/>,
    discription:'General Settings Such As, Site Title, Site Description.',
    
  },
]
const ListingDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Settings" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item sx={12} >

        <Box display="flex" alignItems="flex-start" flexDirection='column' m={4}>
            <Typography component="div" variant="h4" className={classes.titleRoot}>
            Settings And Management
            </Typography>
             <Typography component="div" variant="h6" className={classes.subtitle}>
             Set Your Panel Up To Date With General Settings
              </Typography>
              </Box>
        </Grid>
        <Grid item xs={12} container spacing="4" justifyContent="center" style={{marginBottom:'10vh'}}>
          {Settings.map((item,index)=>{
            return(
              <Grid item xs={6}>
              <Commoncomp icon={item.logo} index={index} 
              discription={item.discription} title={item.title}/>
              </Grid>
          
            )
          })}
         
        </Grid>
       
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
