import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {

    const theme = useTheme();

    const primaryColor = theme.palette.primary.main;
    const subPrimaryColor = theme.palette.subPrimary.main;
    const notify = () => toast("Success!");

  return (
    <Box style={{height: '200px', width:'600px' }}>
        <Card style={{width:'500px', height:'400px', position: 'relative'}}>
        <CardContent style={{marginBottom:'40px'}}>
            <Typography variant="h4" component="div">
                4 days - 3 nights
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Hanoi to Ho Chi Minh
            </Typography>
            <Box style={{marginTop:'20px'}}>
                <Typography styles={{marginTop:'1rem', color:'white'}} variant="body1">
                    From
                </Typography>
                <Box style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="h4">
                        4.500.104 vnd
                    </Typography>
                    <Typography variant="h6" style={{color:'grey'}}>
                        Was 5.100.500 vnd
                    </Typography>
                </Box>
            </Box>
            <Box style={{ position: 'absolute', top: 0, right: 0, backgroundColor: primaryColor, color: subPrimaryColor, borderRadius: '0 0 0 25px', padding: '0.5rem 1rem', fontWeight: 'bold' }}>
                On Sale
            </Box>
        </CardContent>
        <CardActions>
            <Button onClick={notify} style={{color: subPrimaryColor, backgroundColor: primaryColor, borderRadius:'25px', width:'100%'}} variant='contained' size="large">Book Now</Button>
        </CardActions>
        </Card>
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Box>
  )
}

export default Booking;
