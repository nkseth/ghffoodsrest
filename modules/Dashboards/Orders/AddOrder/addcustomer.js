import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box, Typography, Button, Grid, TextField } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useRouter } from 'next/router'
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtSearch from '../../../../@coremat/CmtSearch';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';



const useStyles = makeStyles((theme) => ({
  headerRoot: {
    paddingBottom: 0,
    paddingTop: 0,
    position: 'relative',
    display:"flex",
  
    
    [theme.breakpoints.down('xs')]: {
      '&.Cmt-header-root': {
        flexDirection: 'column',
      },
      '& .Cmt-action-default-menu': {
        position: 'absolute',
        right: 5,
        top: 5,
      },
    },
  },
  cardContentRoot: {
    padding: '0 !important',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    marginTop: -1,
  
  },
  scrollbarRoot: {
    height: 280,
    width:'100%'
  },
  searchAction: {
    position: 'relative',
    width: "70px",
    background:'red',
    height: 38,
  },
  searchActionBar: {
    position: 'absolute',
    background:"green",
    right: 0,
    top: 2,
    zIndex: 1,
  },
  btnRoot: {
    color: theme.palette.text.secondary,
  },
  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 16,
    },
   

  },
   subtitle:{
      
     fontSize:".7rem",
      color:'gray'
      
    },
    backgrid:{
        background:'white',
        padding:'20px',
        maxHeight:'100%',
        overflowY:'auto',
        boxShadow: `0 3px 10px 0 `,
        margin:10,
        maxHeight:'65vh'
    },
}));

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const TasksList = (props) => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [visibleItemsNo, setVisibleItemsNo] = useState(5);
  const [visibleItems, setVisibleItems] = useState([]);

  const classes = useStyles();
const router=useRouter()


  useEffect(() => {
    setVisibleItems(Rows);
  }, []);


  

const Coloumns=[{
    orderid:"orderid",
    vendorname:"Vendor Name" ,
    userName:"User Name",
DateTime:'Date /TIme',
    orderstatus:"Order Status",
    amount:"Amount" ,
    paymentS:'Payment Status',
    paymentT:"payment Type",
    OrderAccept:'Order Accept',
    AssignDriver:'Assign Driver',
    Actions:"Actions"
}]

const Rows=[{
    name:"nanak",
    email:'nanaksethh@gmail.com',
    phoneno:'8349492788'
},
{
    name:"nanak",
    email:'nanaksethh@gmail.com',
    phoneno:'8349492788'
},
{
    name:"nanak",
    email:'nanaksethh@gmail.com',
    phoneno:'8349492788'
}]

  return (
    <Grid item sm={12} md={6} lg={12} className={classes.backgrid} >
    <CmtCard style={{boxShadow:'none',height:'100%'}}>
        <Box>
        <Button onClick={()=>{props.setplaceorder("ctable")}}>BACK</Button> 
        
        </Box>
      
      <CmtCardHeader
        className={classes.headerRoot}
        title={
            <Box display="flex" alignItems="flex-start" flexDirection='column' m={4}>
              <Typography component="div" variant="h4" className={classes.titleRoot}>
              Add customer
              </Typography>
            
            
            </Box>
          }
        actionsPos="top-corner"
        >
           
         
       
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>

        <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
      <Box mt={3}>
      <TextField id="outlined-search" label="Username"  variant="outlined"  />
      </Box>
       <Box  mt={3} >
       <TextField id="outlined-search" label="Email Id"  variant="outlined" />
       </Box>
<Box  mt={3}>
<TextField id="outlined-search" label="contact No." variant="outlined" />
</Box>
     <Box  mt={3}>
     <Button variant="contained" color="primary" onClick={()=>{setplaceorder("ctable")}}>ADD CUSTOMER</Button>
     </Box>
     
     
        </div>
     

     
      </CmtCardContent>
      
    </CmtCard>
    </Grid>
  );
};

export default TasksList;
