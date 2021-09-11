import { Avatar, Box, Typography } from '@material-ui/core'
import React from 'react'
const Fun=()=>{
        return(
            
                
                 
<Box style={{display:'flex',alignItems:'center',justifyContent:'center'}} my={5}>  
<Box mx={2} px={15} py={2} style={{background:'#3f50b5',borderRadius:'30px',color:'white'}}>
<Typography>All</Typography>
</Box>
<Box mx={2}  py={2} style={{background:'#3f50b5',borderRadius:'30px',color:'white',width:'200px',display:'grid',placeItems:'center'}}>
<Typography >Approve</Typography> 
</Box>
<Box mx={2} px={15} py={2} style={{background:'#3f50b5',borderRadius:'30px',color:'white'}}>
<Typography  >Pending</Typography>  
</Box>               
</Box>
                
         
        )
}
export default Fun