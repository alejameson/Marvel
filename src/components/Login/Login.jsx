import React from 'react'
import { Grid } from '@mui/material'
import {makeStyles} from '@mui/material/styles'
import fondospm from '../../images/fondospm.png'

const UseStyles = makeStyles(theme=>({
    root:{
      backgroundImage:`url(${fondospm})`
        
    }
}))


function Login () {
  const classes = UseStyles()
  
  return (
   <Grid container component='main' className={classes.root}> 

   </Grid>
  )
}

export default Login