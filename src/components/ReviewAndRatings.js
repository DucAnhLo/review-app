import { useState } from 'react';
import { Box, Typography, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import BoxColor from './BoxColor';
import { Star } from '@material-ui/icons';

function ReviewAndRatings() {
  
    const theme = useTheme();

    const primaryColor = theme.palette.primary.main;
    const subPrimaryColor = theme.palette.subPrimary.main;

    const star = [5,4,3,2,1]

    const [ratings, setRatings] = useState([30, 10, 0, 0, 10]);

    const totalRatings = ratings.reduce((acc, val) => acc + val, 0);

    return (
        <Box style={{height: '400px', width:'600px' }}>
            <Box style={{ display: 'flex', flexDirection: 'row' ,alignItems:'center' }}>
                <BoxColor />
                <Typography variant='h6'>Ratings and Review</Typography>
            </Box>
            <Typography variant='subtitle1' style={{ color: 'grey', marginLeft:'20px' }}>Sumptuous Villa</Typography>
            
            <Box style={{ color: 'grey', marginLeft:'20px', marginTop:'30px', display:'flex', flexDirection:'row', width:'200px'}}>
                <Box>
                    <Typography style={{ color: 'black', fontSize:'50px'}}>
                        {((ratings[0]*5)+(ratings[1]*4)+(ratings[2]*3)+(ratings[3]*2)+(ratings[4]*1))/totalRatings}
                    </Typography>
                    <Rating 
                        name="read-only" 
                        value={((ratings[0]*5)+(ratings[1]*4)+(ratings[2]*3)+(ratings[3]*2)+(ratings[4]*1))/totalRatings} 
                        readOnly
                    />
                    <Typography style={{ color: 'grey', fontSize:'20px'}}>{totalRatings} ratings</Typography>
                </Box>

                <Box style={{ marginLeft: '20px'}}>
                    {star.map((rating, index) => (
                        <Box key={index} style={{ display:'flex', flexDirection:'row'}}>
                             <Box width="20px" mr={1}>
                                <Star style={{color: primaryColor}} />
                            </Box>
                            <Box width="20px" mr={1}>
                            <Typography variant="subtitle1">{star[index]}</Typography>
                            </Box>
                            <Box style={{width:'300px', margin:'0.65rem 0.5rem'}}>
                                <LinearProgress variant="determinate" value={(ratings[index]/totalRatings)*100} />
                            </Box>
                            <Box ml={1}>
                                <Typography variant="subtitle1">{ratings[index]}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default ReviewAndRatings;
