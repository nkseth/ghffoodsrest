import { Grid } from '@material-ui/core'
import { makeStyles ,alpha} from '@material-ui/styles';
import React,{useState} from 'react'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    taskItemRoot: {
      padding: '7px 24px 7px 12px',
      width:"100%",
      transition: 'all .2s',
      cursor:'pointer',
      
   '&:hover': {
        backgroundColor: "lightgray",  
        transform: 'translateY(-4px)',
        boxShadow: `0 3px 10px 0 `,
        '& $titleRoot': {
          color: theme.palette.text.primary,
        },
      },
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
  
  }));



const Menucategory=()=>{
 const menu=["Burger","Pizza","Chicken","FIsh","Noodels","Rice","French Fries"]
 const [activeitem,setactiveitem]=useState("")
const classes=useStyles()
return(
    <Grid item sm={12} md={6} lg={2} className={classes.backgrid}
    >
        {
       
         menu.map((item)=>{
           let addclass=""
           if(item===activeitem)
           {
             addclass=classes.activeitem
           }else
           {
            addclass=null 
           }
         
                return(
                    <Grid  item sm={12} className={classNames(classes.taskItemRoot,addclass)}  onClick={()=>{setactiveitem(item)}}>
                    {item}
                    </Grid>
                )
            })
        }
    </Grid>
)
}
export default Menucategory