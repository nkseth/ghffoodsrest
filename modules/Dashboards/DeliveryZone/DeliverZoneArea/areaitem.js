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
import Editmodel from './Editmodel'
import Editarea from './Editarea'
import DeleteModel from '../../../Components/newcomponents/Deletemoodle'
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
const TaskItem = ({ item,selectarea,selected}) => {
  
const [model,setmodel]=useState(false)
const [dstate,setdstate]=useState(false)
  const classes = useStyles();
  const closemodel=()=>{
      setmodel(!model)
  }

  return (
    <div className={classes.taskItemRoot} onClick={()=>{selectarea(item)}} style={{background:selected?"#3f51b5":"", color:selected?"white":""}}>
    <DeleteModel open={dstate} close={()=>{setdstate(false)}}/>
   <Editmodel open={model} close={closemodel} title={"Edit Area"}>
      <Editarea/>
       </Editmodel>
      <GridContainer >
        <Grid item xs={12} sm={12}  >
          <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
         
          <Typography className={classes.titleRoot}
          style={{ color:selected?"white":""}}
          >{item.DeliveryZoneName}</Typography>
            
            
               <Box style={{display:'flex',flexDirection:'row'}}>
                
                   <Tooltip title="Edit"  >
                   <IconButton onClick={closemodel} >
                    < EditIcon style={{ color:selected?"white":""}}/>
                   </IconButton>
                   </Tooltip>

                  <Tooltip title="Delete"   >
                   <IconButton onClick={()=>{setdstate(true)}} >
<DeleteForeverIcon style={{ color:selected?"white":""}} />
                   </IconButton>
 
                 </Tooltip>
               
              
               </Box>
          </div>
        </Grid>
       
      </GridContainer>
    </div>
  );
};

export default TaskItem;
