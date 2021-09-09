import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Box, Typography, Checkbox ,Switch,Tooltip,IconButton, Avatar} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GridContainer from '../../../../@jumbo/components/GridContainer';

import { useRouter } from 'next/router'
import Deletemodel from '../../../Components/newcomponents/Deletemoodle'
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
    fontSize: 15,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
}));
const TaskItem = ({ item ,type,index}) => {

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
        
<Grid>
 <Checkbox checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
</Grid>
<Grid  >
           <Typography className={classes.titleRoot}>{index+1}</Typography>
        </Grid>
  <Grid item sm={2} container justifyContent="center">
           <Typography style={{textAlign:'center'}} className={classes.titleRoot}>{item.Name}</Typography>
        </Grid>
        <Grid item sm={1}>
       <Typography className={classes.titleRoot}>{item.Role}</Typography>
        </Grid> 
        <Grid item sm={3}>
       <Typography className={classes.titleRoot}>{item.Email}</Typography>
        </Grid> 
        <Grid item sm={2}>
       <Typography className={classes.titleRoot}>{item.Contact}</Typography>
        </Grid> 

<Grid item sm={3} >
           <Box style={{display:'flex',flexDirection:'row' ,alignItems:'center'}}>
                  <Switch />
                  <Tooltip title="View" 
                   onClick={()=>{router.push("/dashboard/Users/Edituser/19")}}  >
                   <IconButton >
                    < VisibilityIcon/>
                   </IconButton>
                   </Tooltip>
                   <Tooltip title="Edit" 
                   onClick={()=>{router.push("/dashboard/Users/Edituser/19")}}  >
                   <IconButton >
                    < EditIcon/>
                   </IconButton>
                   </Tooltip>

                  <Tooltip title="Delete"   >
                   <IconButton onClick={()=>{setdstate(true)}}>
<DeleteForeverIcon/>
                   </IconButton>
 
                 </Tooltip>
               
              
               </Box>
        </Grid> 
    
       
      
       
      </GridContainer>
    </div>
  );
};

export default TaskItem;
