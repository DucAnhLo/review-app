import './App.css';
import { Button, Box } from '@material-ui/core';
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
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <Box className='vertial'>
          <Overview />
          <ReviewAndRatings />
        </Box>
        <Booking />
      </Box>
    </ThemeProvider>
  
  );
}

export default App;
