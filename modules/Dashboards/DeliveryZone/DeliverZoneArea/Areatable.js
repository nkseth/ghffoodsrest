import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box, Typography, Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtSearch from '../../../../@coremat/CmtSearch';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';


import { crm, propertiesList } from '../../../../@fake-db';
import TaskItem from './areaitem';

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

const TasksList = (props) => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [visibleItemsNo, setVisibleItemsNo] = useState(5);
  const [visibleItems, setVisibleItems] = useState([]);

  const classes = useStyles();



  useEffect(() => {
    setVisibleItems(crm.DeliveryZone);
  }, []);


 

  const getVisibleItems = () => {
    if (searchKeywords) {
      return visibleItems
        .filter((item) => item.DeliveryZoneName.toLowerCase().includes(searchKeywords.toLowerCase()))
        .slice(0, visibleItemsNo);
    } else return visibleItems.slice(0, visibleItemsNo);
  };

  return (
    <CmtCard>
   
      <CmtCardContent className={classes.cardContentRoot} >
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={getVisibleItems()} 
          renderRow={(item, index) => <TaskItem item={item} key={index}  selected={item.DeliveryZoneName===props.selected.DeliveryZoneName?true:false} 
          selectarea={props.selectarea} />} 
         />
        </PerfectScrollbar>
       
     
      </CmtCardContent>
      
    </CmtCard>
  );
};

export default TasksList;
