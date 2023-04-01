import React from 'react'
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

function BoxColor() {
    const theme = useTheme();

    const primaryColor = theme.palette.primary.main;
    const subPrimaryColor = theme.palette.subPrimary.main;
  return (
    <div>
        <Box 
            style={
                { backgroundColor: subPrimaryColor, 
                    width: '1rem', 
                    height:'2rem', 
                    borderRadius: '10%',
                    margin: '1rem'
                }
                }>
        </Box>
    </div>
  )
}

export default BoxColor