import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Box, Typography, Checkbox ,Switch,Tooltip,IconButton, Avatar, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import CmtList from '../../../../../@coremat/CmtList';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GridContainer from '../../../../../@jumbo/components/GridContainer';
import { crm, propertiesList } from '../../../../../@fake-db';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  taskItemRoot: {
    padding: '7px 24px 7px 12px',
    width:"100%",
    transition: 'all .2s',


  },
  titleRoot: {
    color: "gray",
    fontSize: 12,
  
    width: '100%',
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 70,
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
     
     
      <GridContainer alignItems="center"> 
        
<Grid sm={1}>
 <Checkbox checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
</Grid>
       
       <Grid item sm={2}>
           <Avatar></Avatar>
        </Grid>
        
         <Grid item sm={9}>
            <Typography className={classes.titleRoot}>{item.name}</Typography> 
            <Typography className={classes.titleRoot}>{item.email}</Typography>
            <Typography className={classes.titleRoot}>{item.phone}</Typography>
        </Grid>  
       
        
       
      
       
      </GridContainer>
    </div>
  );
};

export default TaskItem;
