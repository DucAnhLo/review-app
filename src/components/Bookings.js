import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

function Booking() {

    const theme = useTheme();

    const primaryColor = theme.palette.primary.main;
    const subPrimaryColor = theme.palette.subPrimary.main;

  return (
    <Box style={{ backgroundColor: primaryColor, width: '20vh', height: '500px', width:'600px' }}>
  
    </Box>
  )
}

export default Booking