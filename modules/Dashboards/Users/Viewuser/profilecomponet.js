import { Avatar, Box, Typography } from '@material-ui/core'
import React from 'react'
const Fun=()=>{
        return(
            <Box style={{boxShadow:'0 0 10px gray',background:'white',padding:'10px'}}>
                <Box style={{display:'flex',justifyContent:'space-around'}}>
                <Avatar style={{width:'100px',height:'100px'}} />
                <Typography>Total Order: 0</Typography>
                <Typography>Pending: 0</Typography>
                <Typography>Approve: 0</Typography>
                </Box>
                
<Box ml={10} mt={5}> 
<Typography>User Name : Test</Typography>
                <Typography>Phone Number : 1234567890</Typography>
                <Typography>Email : T11@Gmail.Com1</Typography>
</Box>
                
            </Box>
        )
}
export default Fun