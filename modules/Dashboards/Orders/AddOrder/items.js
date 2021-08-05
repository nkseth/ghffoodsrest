import { Avatar, Box, Button, Grid } from '@material-ui/core'
import { makeStyles ,alpha} from '@material-ui/styles';
import React,{useState} from 'react'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    taskItemRoot: {
     
      width:"100%",
      transition: 'all .2s',
      cursor:'pointer',
      minHeight:'70px',
      borderRadius:'20px',
      boxShadow:'2px 1px 5px gray',
      margin:'10px 5px',
      display:"flex",
      alignItems:'center',
      justifyContent:"space-between",
      padding:'10px'
      
   
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
  activeitem:{
    backgroundColor: "lightgray",  
    transform: 'translateY(-4px)',
    boxShadow: `0 3px 10px 0 `,
    '& $titleRoot': {
      color: theme.palette.text.primary,
    },
  },
  itemname:{
    fontWeight:'500',
    fontSize:"1rem"
  },
  itemdis:{
    fontWeight:'normal',
    fontSize:".75rem"
  },
  addbutton:{
background:'lightgreen',
fontSize:'20px',
padding:'2px',
minWidth: "20px",
lineHeight: "none"
  },
  minusbutton:{
    background:'#FF7F7F',
    fontSize:'20px',
    padding:'2px',
    minWidth: "20px",
    lineHeight: "none"
  },
  quantity:{

  }
  
  }));



const Items=()=>{
  const [addeditem,setaddeditem]=useState()
 const menu=["Burger","Pizza","Chicken","FIsh","Noodels","Rice","French Fries"]
 const [activeitem,setactiveitem]=useState([])



const classes=useStyles()
return(
    <Grid item  sm={12} md={6} lg={5} className={classes.backgrid}
    >
        {
       
         menu.map((item)=>{
           
         
                return(
                    <Grid  item sm={12} className={classNames(classes.taskItemRoot)}  >
                   
                    <Avatar 
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png"
                    style={{height:"100px",width:'100px'}}/>
                  <Box px={2} style={{display:"flex",justifyContent:'space-between',alignItems:'center',width:'100%'}}>

                 
                    <Box >
                      <h3 className={classes.itemname}>Sandwich</h3>
                      <h5 className={classes.itemdis}>this is a very good Sandwich</h5>
                      <h3>Rs 21/-</h3>
                      </Box>

                      <Box>
                        <Button className={classes.addbutton} variant="contained">+</Button>
                        <label>0</label>
                        <Button className={classes.minusbutton}>-</Button>
                      </Box> 
                      </Box>
                     
                    </Grid>
                )
            })
        }
    </Grid>
)
}
export default Items