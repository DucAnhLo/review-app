import { useState } from 'react';
import { Box, Typography, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import BoxColor from './BoxColor';
import { Star } from '@material-ui/icons';
import constants from '../constants';
import './ReviewAndRatings.css';

function ReviewAndRatings() {
  
    const theme = useTheme();

    const { primaryColor, subPrimaryColor, star} = constants;

    const [ratings, setRatings] = useState([11, 14, 0, 0, 10]);

    const totalRatings = ratings.reduce((acc, val) => acc + val, 0);

    return (
        <Box className='container'>
            <Box className='title' >
                <BoxColor />
                <Typography variant='h6'>Ratings and Review</Typography>
            </Box>
            <Typography variant='subtitle1' className='sub-title' style={{marginLeft:'15px'}}>Sumptuous Villa</Typography>
            
            <Box className='rating'>
                <Box>
                    <Typography style={{fontSize:'50px', color:'black'}}>
                        {(((ratings[0]*5)+(ratings[1]*4)+(ratings[2]*3)+(ratings[3]*2)+(ratings[4]*1))/totalRatings).toFixed(1)}
                    </Typography>
                    <Rating 
                        name="read-only" 
                        value={((ratings[0]*5)+(ratings[1]*4)+(ratings[2]*3)+(ratings[3]*2)+(ratings[4]*1))/totalRatings}
                        precision={0.1}
                        readOnly
                    />
                    <Typography className='rating-stars'>{totalRatings} ratings</Typography>
                </Box>

                <Box style={{ marginLeft: '20px'}}>
                    {star.map((rating, index) => (
                        <Box key={index} className="star-container">
                             <Box className='star'>
                                <Star style={{color: primaryColor}} />
                            </Box>
                            <Box className='star-title'>
                            <Typography variant="subtitle1">{star[index]}</Typography>
                            </Box>
                            <Box className='progress-bar'>
                                <LinearProgress variant="determinate" value={(ratings[index]/totalRatings)*100} />
                            </Box>
                            <Box className='rating-count'>
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
