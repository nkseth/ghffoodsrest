import React from 'react';
import { Grid ,Box,Typography, Button} from '@material-ui/core';


import makeStyles from '@material-ui/core/styles/makeStyles';

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
 outer:{
     width:'100%',
     minHeight:'160px',
     background:'white',
     display:'flex',
     boxShadow:'0 0 10px gray'
 },
 withlogo:{
    minWidth:'40%',
    minHeight:'100%',
    background:theme.palette.primary.main,
    color:'white',
    display:'grid',
    placeItems:'center'
 },

   subtitle:{
      
     fontSize:".7rem",
      color:'gray',
      marginTop:'10px'
      
    },
    content:{
        padding:'20px'
    }
  
}));



const ListingDashboard = (props) => {
  const classes = useStyles();
  return (
  <Box className={classes.outer}>
      <Box className={classes.withlogo}>
{props.icon}
      </Box>
      <Box className={classes.content}>
<Typography variant="h3">{props.title}</Typography>
<Typography variant="h6" className={classes.subtitle}>{props.discription}</Typography>
<Box mt={7} >
          <Button color="primary" >Change settings {'>'} </Button>
      </Box>
      </Box>
     
  </Box>
  );
};

export default ListingDashboard;
