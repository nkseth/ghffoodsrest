import React from 'react';
import { Avatar, Grid,Button, TextField,Switch } from '@material-ui/core';
import GridContainer from '../../../../@jumbo/components/GridContainer';

const Personalinfo = () => {
    return ( 
    
    
    <Grid container style={{background:'white',padding:'10px'}} alignItems="center" justifyContent="center" spacing={3}>
<Grid sm={12}  alignItems="center" justifyContent="flex-start" container>
    <label style={{fontWeight:'bold',marginBottom:'10px'}}>Edit Cuisine</label>
</Grid>
<Grid sm={12}  alignItems="center" justifyContent="center" container direction="column">
    <label style={{fontWeight:'bold',marginBottom:'10px'}}>Cuisine Image</label>
<Avatar style={{width:'200px',height:'200px'}} />
</Grid>
<Grid sm={12} style={{marginTop:'10px'}} alignItems="center" justifyContent="center" container>
 <input
        accept="image/*"
       style={{display:"none"}}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>

</Grid>

<Grid sm={8} item>

    <TextField variant="outlined" label="first Name" fullWidth/>
</Grid>


<Grid sm={4} item>
<lable>Status</lable>
    <Switch color="primary"/>
</Grid>



    </Grid> );
}
 
export default Personalinfo;