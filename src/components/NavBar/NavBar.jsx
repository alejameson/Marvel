import React from 'react';
import { AppBar, Toolbar, Button, Box, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import './NavBar.css';
import marvelLogo from './marvel-logo.png';

function NavBar () {
    return(
       <AppBar position='fixed' sx={{bgcolor: '#212121'}}>
         <Toolbar>
            <Box component='div' sx={{ flexGrow: 1}}>
              <img src={marvelLogo} alt='logo' width="100" height="40"/> 
            </Box>
            <Stack direction='row' spacing={3}>
              <Link to={"/home"}><Button variant="text" color="inherit"> Home </Button></Link>
              <Link to={"/home"}><Button variant="text" color="inherit"> About </Button></Link>
              <Link to={"/"}><Button variant="text" color="inherit"> Login </Button></Link>
            </Stack>
         </Toolbar>
       </AppBar>
    )
}



export default NavBar;














