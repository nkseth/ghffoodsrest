import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Box, Typography, Checkbox ,Switch,Tooltip,IconButton} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtList from '../../../../@coremat/CmtList';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import { crm, propertiesList } from '../../../../@fake-db';
import { useRouter } from 'next/router'
import Deletemodel from '../../../Components/newcomponents/Deletemoodle'
const useStyles = makeStyles((theme) => ({
  taskItemRoot: {
    padding: '7px 24px 7px 12px',
    width:"100%",
    transition: 'all .2s',
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $titleRoot': {
        color: theme.palette.text.primary,
      },
   
  },
  titleRoot: {
    color: theme.palette.text.disabled,
    fontSize: 12,
    maxWidth:'100%',
    width: '90%',
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
const TaskItem = ({ item ,type}) => {

  const [isCompleted, setIsCompleted] = useState(item.completed);
  useEffect(()=>{
    console.log(isCompleted)
  },[isCompleted])

  const router=useRouter()

  const classes = useStyles();
const [dstate,setdstate]=useState(false)
  return (
    <div className={classes.taskItemRoot}>
      <Deletemodel open={dstate} close={()=>{setdstate(false)}}/>
      <GridContainer alignItems="center"> 
        
<Grid sm={0.5}>
 <Checkbox checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
</Grid>
<Grid item sm={1}>
           <Typography className={classes.titleRoot}>{item.orderid}</Typography>
        </Grid>
        
         <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.vendorname}</Typography> 
        </Grid>  
         <Grid item  sm={1}>
            <Typography className={classes.titleRoot}>{item.userName}</Typography>
        </Grid> 
          
        <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.DateTime}</Typography>
        </Grid> 
        <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.orderstatus}</Typography>
        </Grid> 
        <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.amount}</Typography>
        </Grid> 
        <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.paymentS}</Typography>
        </Grid> 
        <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.paymentT}</Typography>
        </Grid> 
        <Grid item sm={1}>
            <Typography className={classes.titleRoot}>{item.OrderAccept}</Typography>
        </Grid> 
        <Grid item sm={1}>
        
            <Typography className={classes.titleRoot}>{item.AssignDriver}</Typography>
        </Grid> 
<Grid item sm={1.5}>
            <Typography className={classes.titleRoot}>{item.Actions}</Typography>
        </Grid> 
    
       
      </GridContainer>
    </div>
  );
};

export default TaskItem;
