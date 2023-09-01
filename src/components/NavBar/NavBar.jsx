import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import './NavBar.css';
import marvelLogo from './marvel-logo.png';

function NavBar () {
    return(
       <AppBar position='static' sx={{bgcolor: '#212121'}}>
         <Toolbar>
            <Box component='div' sx={{ flexGrow: 1}}>
              <img src={marvelLogo} width="100" height="40"/> 
            </Box>
            <Stack direction='row' spacing={3}>
              <Button variant="text" color="inherit"> Home </Button>
              <Button variant="text" color="inherit"> About </Button>
              <Button variant="text" color="inherit"> Login </Button>
            </Stack>
         </Toolbar>
       </AppBar>
    )
}



export default NavBar;














