import { Avatar, Box, Button, Grid } from '@material-ui/core'
import { makeStyles ,alpha} from '@material-ui/styles';
import React,{useState} from 'react'
import classNames from 'classnames'
import Customerlist from './customertable'

const useStyles = makeStyles((theme) => ({
    taskItemRoot: {
     
      width:"100%",
      transition: 'all .2s',
      cursor:'pointer',
      borderRadius:'20px',
      boxShadow:'2px 1px 5px gray',
      margin:'10px 0px 0px 0px',
      display:"flex",
      alignItems:'center',
      justifyContent:"space-between",
      padding:'10px'
      
   
    },
    backgrid:{
        background:'white',
        padding:'20px',
       margin:10,
        boxShadow: `0 3px 10px 0 `,
        maxHeight:'65vh',
       
       
        
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

  },
  backgridbox:{
    overflowY:'auto',
    padding:'0px 5px',
  
    height:'55vh',
  
        
  },
  totalbox:{
      background:'lightgreen',
    
      display:"flex",
      alignItems:"center",
      justifyContent:'space-between',
      padding:10,
      
  }
  
  }));



const Totalcal=(props)=>{
  const [addeditem,setaddeditem]=useState()
 const menu=["Burger","Pizza","Chicken"]




const classes=useStyles()
return(
    <Grid item  sm={12} md={6} lg={4} className={classes.backgrid}>
        <Box className={classes.backgridbox}>

      
        {
       
         menu.map((item)=>{
           
         
                return(
                    <Grid  item sm={12} className={classNames(classes.taskItemRoot)}  >
                   
                    <Avatar 
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png"
                    style={{height:"70px",width:'70px'}}/>
                  <Box px={2} style={{display:"flex",justifyContent:'space-between',alignItems:'center',width:'100%'}}>

                 
                    <Box >
                      <h3 className={classes.itemname}>Sandwich</h3>
                      <h5 className={classes.itemdis}>this is a very good Sandwich</h5>
                      <h3>Rs 21/-</h3>
                      </Box>

                      <Box>
                        <Button className={classes.addbutton} variant="contained">+</Button>
                        <label>1</label>
                        <Button className={classes.minusbutton}>-</Button>
                      </Box> 
                      </Box>
                     
                    </Grid>
                )
            })
        }
  </Box>
  <Box className={classes.totalbox} >
      <Box>
          <h3>Total Items: 3</h3>
          <h3>Amount: 30</h3>
      </Box>
      <Box>
         <Button variant="contained" color="primary" onClick={()=>{props.setplaceorder("ctable")}}>Place Order</Button>
      </Box>
  </Box>
    </Grid>
)
}
export default Totalcal