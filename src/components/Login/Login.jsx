import React from 'react';
import './Login.css'; 
import { Box, Paper, TextField, Button} from '@mui/material';

function Login () {  
  return (
    <div className='loginContainer'>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100vh', width: '100%' }}>
        <Paper elevation={10} className='loginCard' sx={{bgcolor: 'rgba(255, 255, 255, 0.85)'}}>
          <h2>Sign in</h2>
          <form action="">  
            <TextField sx={{margin: '30px auto'}} label='Username' color='error' placeholder='Enter username' type='text' fullWidth/>
            <TextField sx={{margin: '10px auto'}} label='Password' color='error' placeholder='Enter password' type='password' fullWidth/>
            <Button sx={{marginTop: '50px'}} type='submit' color='error' variant='contained' fullWidth>Sign In</Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Login;
