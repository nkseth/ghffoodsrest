import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box, Typography, Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtSearch from '../../../../@coremat/CmtSearch';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';


import { crm } from '../../../../@fake-db';
import TaskItem from './TaskItem';
import TaskItemHead from './TaskItemhead';

const useStyles = makeStyles((theme) => ({
  headerRoot: {
    paddingBottom: 0,
    paddingTop: 0,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      '&.Cmt-header-root': {
        flexDirection: 'column',
      },
      '& .Cmt-action-default-menu': {
        position: 'absolute',
        right: 24,
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
    width: 38,
    height: 38,
  },
  searchActionBar: {
    position: 'absolute',
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
      
    }
}));

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const TasksList = () => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [visibleItemsNo, setVisibleItemsNo] = useState(5);
  const [visibleItems, setVisibleItems] = useState([]);

  const classes = useStyles();



  useEffect(() => {
    setVisibleItems(rows);
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
        .filter((item) => item.Name.toLowerCase().includes(searchKeywords.toLowerCase()))
        .slice(0, visibleItemsNo);
    } else return visibleItems.slice(0, visibleItemsNo);
  };
const Coloumns=[{
    number:"#",
    DPP:"Delivery Person Profile" ,
    Name:"Delivery Person Name",
    Contact:"Contact",
    DISOR:"Driver is Online or Not??",
    Email:"Email",
    action:"Actions" 
}]

const rows=[{
    number:"1",
    DPP:"Should be a url" ,
     Name:"Nanak ",
    Contact:"852412154",
    DISOR:"YES",
    Email:"nanaksethh2gmail.com",
   
},
{
    number:"1",
    DPP:"Should be a url" ,
    Name:"Nanak ",
    Contact:"852412154",
    DISOR:"YES",
    Email:"nanaksethh2gmail.com",
   
},
{
    number:"1",
    DPP:"Should be a url" ,
      Name:"Nanak ",
    Contact:"852412154",
    DISOR:"YES",
    Email:"nanaksethh2gmail.com",
   
},

]


  return (
    <CmtCard>
      <CmtCardHeader
        className={classes.headerRoot}
        title={
          <Box display="flex" alignItems="flex-start" flexDirection='column' m={4}>
            <Typography component="div" variant="h4" className={classes.titleRoot}>
              Delivery Zone Management
            </Typography>
             <Typography component="div" variant="h6" className={classes.subtitle}>
             Add, Edit, Manage Delivery Zone.
              </Typography>
          
          </Box>
        }
        actionsPos="top-corner"
        actions={actions}>
        <div className={classes.searchAction}>
          <div className={classes.searchActionBar}>
            <CmtSearch onlyIcon value={searchKeywords} onChange={onSearchQuery} border={false} />
          </div>
        </div>
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={Coloumns} renderRow={(item, index) => <TaskItemHead item={item} key={index} type="header" />}  />
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
  );
};

export default TasksList;
