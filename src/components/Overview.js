import {useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Button, Dialog, DialogTitle, DialogActions,DialogContent } from '@material-ui/core';
import BoxColor from './BoxColor';

const Overview = () => {

    
  
    const theme = useTheme();
    const[open, setOpen]= useState(false);
    

    const primaryColor = theme.palette.primary.main;
    const subPrimaryColor = theme.palette.subPrimary.main;
    const content = `Experience luxury and comfort at its finest in our spacious and elegantly designed rooms.
                    With an unparalleled attention to detail, every aspect of your stay has been carefully crafted to ensure a memorable experience.
                    Each room boasts a plush king-sized bed ...`
    const fullContent = `Experience luxury and comfort at its finest in our spacious and elegantly designed rooms. 
                    With an unparalleled attention to detail, every aspect of your stay has been carefully crafted to ensure a memorable experience. 
                    Each room boasts a plush king-sized bed, high thread count linens, and a variety of pillows to guarantee a restful night’s sleep. 
                    Our rooms are also equipped with state-of-the-art technology, including a flat-screen TV with premium cable channels and high-speed internet access. 
                    The bathrooms feature luxurious amenities, including plush towels, high-quality toiletries, and a rainfall showerhead. 
                    To ensure your comfort, we also provide plush bathrobes and slippers. 
                    Our rooms also come with a fully stocked mini-bar, an in-room safe, and a work desk for your convenience. 
                    For guests seeking the ultimate in luxury, our suites offer breathtaking views of the city skyline, a separate living area, and a private balcony. 
                    The suites also feature a Jacuzzi tub, perfect for relaxing after a long day of sightseeing. At our hotel, we believe that your comfort is our top priority. 
                    Our rooms are designed to provide a sanctuary of comfort and relaxation, ensuring that your stay is an unforgettable experience.`

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
   
    return (
        <Box style={{width: '20vh', height: '200px', width:'600px'}}>
            <Box style={{ display: 'flex', flexDirection: 'row' ,alignItems:'center' }}>
                <BoxColor />
                <Typography variant='h6'>Overview</Typography>
            </Box>
            <Typography style={{ color: 'grey', marginLeft:'20px' }}>{content}</Typography>
            <Button onClick={handleOpen} style={{ color:subPrimaryColor, marginLeft:'10px' }}>
                Read More
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{'Full Room Description'}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">{fullContent}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Close
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>

    )
};

export default Overview;
