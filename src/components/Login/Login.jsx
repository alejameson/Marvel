import React from 'react';
import './Login.css'; 
import fondospm from '../Login/fondospm.png';
import { Grid, Paper, TextField, Button} from '@mui/material';


function Login () {

 /*  <img className='fondo-spiderman' src={fondospm} alt="Spiderman Background" /> */


  const paperStyle={padding: 20, height: '45vh', width:280, margin: "20px auto"}
   return (
   <Grid sx={{marginTop: '120px'}}>
    <Paper elevation={10} style={paperStyle}>
      <h2>Sing in</h2>
        <form action="">  
          <TextField sx={{margin: '10px auto'}} label='Username' placeholder='Enter username' type='text' fullWidth required/>
          <TextField sx={{margin: '10px auto'}} label='Password' placeholder='Enter password' type='password' fullWidth required/>
          <Button sx={{marginTop: '20px'}} type='submit' color='primary' variant='contained' fullWidth> Sign In</Button>

       </form>
    </Paper>
   </Grid>
    );
}

export default Login