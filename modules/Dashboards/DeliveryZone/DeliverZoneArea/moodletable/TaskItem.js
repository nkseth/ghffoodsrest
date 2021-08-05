import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Box, Typography, Checkbox ,Switch,Tooltip,IconButton, Avatar} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import CmtList from '../../../../../@coremat/CmtList';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GridContainer from '../../../../../@jumbo/components/GridContainer';
import { crm } from '../../../../../@fake-db';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  taskItemRoot: {
    padding: '7px 24px 7px 12px',
    width:"100%",
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $titleRoot': {
        color: theme.palette.text.primary,
      },
    },
  },
  titleRoot: {
    color: theme.palette.text.disabled,
    fontSize: 16,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
     display:'flex',
    justifyContent:'center'
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    marginRight: 10,
  },
  gridItemCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
    },
  },
  tag_danger: {
    backgroundColor: theme.palette.error.main,
  },
  tag_success: {
    backgroundColor: theme.palette.success.main,
  },
  tag_info: {
    backgroundColor: theme.palette.info.main,
  },
  tag_warning: {
    backgroundColor: theme.palette.warning.main,
  },
}));
const TaskItem = ({ item ,index}) => {

  const [isCompleted, setIsCompleted] = useState(item.completed);
  useEffect(()=>{
    console.log(isCompleted)
  },[isCompleted])

  const router=useRouter()

  const classes = useStyles();

  return (
    <div className={classes.taskItemRoot}>
      <GridContainer>
        <Grid item xs={12} sm={12} >
          <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-evenly' }}>
          <Typography className={classes.titleRoot} >{index+1}</Typography>
            
             <div className={classes.titleRoot}>
<Avatar ></Avatar>
             </div>
               <Typography className={classes.titleRoot} >{item.contact}</Typography>
               <Typography className={classes.titleRoot}>{item.Email}</Typography>
          </div>
        </Grid>
       
      </GridContainer>
    </div>
  );
};

export default TaskItem;
