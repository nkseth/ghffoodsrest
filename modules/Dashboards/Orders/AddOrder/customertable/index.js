import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box, Typography, Button, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useRouter } from 'next/router'
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtSearch from '../../../../../@coremat/CmtSearch';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../../@coremat/CmtList';
import TaskItem from './customerlist';
import { green } from '@material-ui/core/colors';


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


const Rows=[{
  name:"nanak",
  email:'nanaksethh@gmail.com',
  phoneno:'8349492788'
},
{
  name:"kki",
  email:'nanaksethh@gmail.com',
  phoneno:'8349492788'
},
{
  name:"jlk",
  email:'nanaksethh@gmail.com',
  phoneno:'8349492788'
}]

  useEffect(() => {
    setVisibleItems(Rows);
  }, []);


  const onSearchQuery = (event) => {
    setSearchKeywords(event.target.value);
  };

  const onMoreClick = () => {
    setVisibleItemsNo(visibleItemsNo + 5);
  };

  const getVisibleItems = () => {
    if (searchKeywords) {
      return visibleItems
        .filter((item) => item.name.toLowerCase().includes(searchKeywords.toLowerCase()))
        .slice(0, visibleItemsNo);
    } else return visibleItems.slice(0, visibleItemsNo);  
  };


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



  return (
    <Grid item sm={12} md={6} lg={4} className={classes.backgrid} >
    <CmtCard style={{boxShadow:'none',height:'90%'}}>
        <Box>
        <Button onClick={()=>{props.setplaceorder("total")}}>BACK</Button> 
        <Button onClick={()=>{props.setplaceorder("addcustomer")}}>+ADD NEW</Button> 
        
        </Box>
      
      <CmtCardHeader
        className={classes.headerRoot}
        title={
            <Box display="flex" alignItems="flex-start" flexDirection='column' m={4}>
              <Typography component="div" variant="h4" className={classes.titleRoot}>
              Select Customer
              </Typography>
            
            
            </Box>
          }
        actionsPos="top-corner"
        actions={actions}>
          
        <div >
        <CmtSearch onlyIcon value={searchKeywords} onChange={onSearchQuery} border={false} />
        </div>
           
           
         
       
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
         
          <CmtList data={getVisibleItems()} renderRow={(item, index) => <TaskItem item={item} key={index} type="value" />}  />
        </PerfectScrollbar>
        {visibleItems.length > visibleItemsNo && (
          <Box pt={1} px={6} pb={6}>
            <Button className={classes.btnRoot} onClick={onMoreClick}>{`+ ${
              visibleItems.length - visibleItemsNo
            } more`}</Button>
          </Box>
        )}
     
      </CmtCardContent>
    </CmtCard>
    <Box style={{display:'flex'}} justifyContent="center">
    <Button onClick={()=>{props.setplaceorder("orderpreview")}} variant="contained" style={{background:'lightgreen'}}>PLACE ORDER</Button> 
    </Box>
    </Grid>
  );
};

export default TasksList;
