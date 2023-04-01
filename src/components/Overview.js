import {useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import BoxColor from './BoxColor';

import constants from '../constants';

const Overview = () => {

    const MAX_CONTENT_LENGTH = 4;
    const theme = useTheme();
    const { primaryColor, subPrimaryColor, fullContent } = constants;

    const [isReadMoreShown, setReadMoreShown] = useState(false)
    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
    return (
        <Box style={{width:'600px'}}>
            <Box style={{ display: 'flex', flexDirection: 'row' ,alignItems:'center' }}>
                <BoxColor />
                <Typography variant='h6'>Overview</Typography>
            </Box>
            <Typography style={{marginLeft:'15px'}}>
                {isReadMoreShown ? fullContent : (fullContent.substring(0,300) + " ...")}
            </Typography>
            <Button onClick={toggleBtn} style={{ color: subPrimaryColor, marginLeft: '10px' }}>
                Read More
            </Button>
        </Box>
    )
};

export default Overview;
