import React from 'react';
import { Avatar, Grid,Button, TextField,Switch } from '@material-ui/core';
import GridContainer from '../../../../@jumbo/components/GridContainer';

const Personalinfo = () => {
    return ( 
    
    
<Grid container style={{background:'white',padding:'10px'}} alignItems="center" justifyContent="center" spacing={3}>

<Grid sm={12}  alignItems="center" justifyContent="flex-start" container>
    <label style={{fontWeight:'bold',marginBottom:'10px'}}>Vehical Information</label>
</Grid>  

<Grid sm={6} item>

    <TextField variant="outlined" label="Vahicle Type" fullWidth/>
</Grid>
<Grid sm={6} item>

    <TextField variant="outlined" label="Vehicle Number" fullWidth/>
</Grid>

<Grid sm={6} item>

    <TextField variant="outlined" label="License Number" fullWidth/>
</Grid>

<Grid sm={6} item>

    
</Grid>

<Grid sm={6} style={{marginTop:'10px'}} alignItems="center" justifyContent="center" container direction="column">
   <label>National Identity Document</label>
    <img style={{width:'200px',height:"200px",border:"1px solid ",marginBottom:'10px'}}/>
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
<Grid sm={6} style={{marginTop:'10px'}} alignItems="center" justifyContent="center" container direction="column"> 
   <label>License Document</label>
    <img style={{width:'200px',height:"200px",border:"1px solid ",marginBottom:'10px'}}/>
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
<Grid sm={12} item container justifyContent="center" style={{marginTop:'20px'}}>

  <Button variant="contained" color="primary">Update Delivery Person</Button>
</Grid>
    </Grid> );
}
 
export default Personalinfo;