import React from 'react';
import { Avatar, Grid,Button, TextField,Switch } from '@material-ui/core';
import GridContainer from '../../../../@jumbo/components/GridContainer';

const Personalinfo = () => {
    return ( 
    
    
    <Grid container style={{background:'white',padding:'10px'}} alignItems="center" justifyContent="center" spacing={3}>
<Grid sm={12}  alignItems="center" justifyContent="flex-start" container>
    <label style={{fontWeight:'bold',marginBottom:'10px'}}>Add User</label>
</Grid>


<Grid sm={12} item>

    <TextField variant="outlined" label="User Name" fullWidth/>
</Grid>
<Grid sm={12} item>

    <TextField variant="outlined" label="Email" fullWidth/>
</Grid><Grid sm={12} item>

<TextField variant="outlined" label="Phone" fullWidth/>
</Grid>
<Grid sm={12} item>

<TextField variant="outlined" label="Password" fullWidth/>
</Grid>
<Grid sm={12} item>

<TextField variant="outlined" label="Role" fullWidth/>
</Grid>

<Grid sm={12} item>
<Button variant="contained" color='primary'>DONE</Button>
</Grid>


    </Grid> );
}
 
export default Personalinfo;