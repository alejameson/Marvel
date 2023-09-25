import React, { useState } from 'react';
import './Login.css'; 
import { Box, Paper, TextField, Button} from '@mui/material';
import { useNavigate } from "react-router-dom";
import marvelLogo from './Marvel-Logo.png'


function Login () {  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    if (e.target.name === 'user'){
      setUser(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if (user === 'admin' && password === '123') {
      alert('Welcome');
      navigate('/home');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
    console.log(user, 'USER');
    console.log(password, 'PASSWORD'); 
  } 

  return (
    <div className='loginContainer'>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100vh', width: '100%' }}>
        <Paper elevation={10} className='loginCard' sx={{bgcolor: 'rgba(255, 255, 255, 0.85)'}}>
          <h2>Sign in</h2>
          <form action="">  
            <TextField sx={{margin: '30px auto'}} name='user' label='Username' onChange={(e) => handleOnChange(e)} color='error' placeholder='Enter username' type='text' fullWidth/>
            <TextField sx={{margin: '10px auto'}} name='password' label='Password' onChange={(e) => handleOnChange(e)} color='error' placeholder='Enter password' type='password' fullWidth/>
            <Button sx={{marginTop: '50px'}} type='submit' onClick={(e) => handleOnClick(e)} color='error' variant='contained' fullWidth>Sign In</Button>
          </form>
          <img src={marvelLogo} className='marvelStudio' alt="logo" width='300px' height='170px'  />
        </Paper>
      </Box>
    </div>
  );
}

export default Login;
