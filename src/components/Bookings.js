import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import constants from '../constants';
import './Bookings.css';

function Booking() {

  const theme = useTheme();

  const notify = () => toast('Success!');
  const { primaryColor, subPrimaryColor, salePrice, normalPrice } = constants;

  return (
    <Box style={{ height: '200px', width: '600px' }}>
      <Card className="booking-card">
        <CardContent className="booking-card-content">
          <Typography variant="h4" component="div">
            4 days - 3 nights
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hanoi to Ho Chi Minh
          </Typography>
          <Box style={{ marginTop: '20px' }}>
            <Typography styles={{ marginTop: '1rem', color: 'white' }} variant="body1">
              From
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h4">
                {salePrice.toLocaleString()} vnd
              </Typography>
              <Typography variant="h6" style={{ color: 'grey' }}>
                Was {normalPrice.toLocaleString()} vnd
              </Typography>
            </Box>
          </Box>
          <Box className="booking-card-sale">
            On Sale
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={notify} className="booking-card-button" variant='contained' size="large">Book Now</Button>
        </CardActions>
      </Card>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Box>
  )
}

export default Booking;
