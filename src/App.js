import './App.css';
import { useState } from 'react';
import { Button, Box, Divider } from '@material-ui/core';
import ReviewAndRatings from './components/ReviewAndRatings';
import Overview from './components/Overview';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Booking from './components/Bookings';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f6a20c',
    },
    subPrimary: {
      main: '#004058',
    },
    
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});


function App() {
  const [bookingMargin, setBookingMargin] = useState('30px');

  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <Box className='vertial'>
          <Overview />
          <Divider style={{ margin: '16px 0', borderTop: '1px solid'}} />
          <ReviewAndRatings />
        </Box>
        <Box style={{ marginLeft: bookingMargin , marginTop:'5rem'}}>
          <Booking className="booking" />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
