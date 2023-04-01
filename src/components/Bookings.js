import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BoxColor from './BoxColor';

function Booking() {

    const theme = useTheme();

    const primaryColor = theme.palette.primary.main;
    const subPrimaryColor = theme.palette.subPrimary.main;

  return (
    <Box style={{ backgroundColor: primaryColor, width: '20vh', height: '1000px', width:'300px' }}>
        <BoxColor />
        <div>
            <h1>Booking</h1>
        </div>
    </Box>
  )
}

export default Booking