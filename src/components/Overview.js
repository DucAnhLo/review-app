import {useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import BoxColor from './BoxColor';

import constants from '../constants';

const Overview = () => {

    const MAX_CONTENT_LENGTH = 4;
    const theme = useTheme();
    const { primaryColor, subPrimaryColor, fullContent } = constants;

    const hasMoreContent = fullContent.split('\n').length > MAX_CONTENT_LENGTH;

    const [showMore, setShowMore] = useState(false);

    return (
        <Box style={{width: '20vh', height: '200px', width:'600px'}}>
            <Box style={{ display: 'flex', flexDirection: 'row' ,alignItems:'center' }}>
                <BoxColor />
                <Typography variant='h6'>Overview</Typography>
            </Box>
            <Typography
                style={{
                    color: "grey",
                    marginLeft: "20px",
                    height: "calc(1.5em * 4)", // set height to 4 rows of text
                    overflow: "hidden",
                    display: "-webkit-box",
                    "-webkit-line-clamp": 4, // limit to 4 lines of text
                    "-webkit-box-orient": "vertical",
                }}
            >
                {showMore ? fullContent : fullContent.split('\n').slice(0, MAX_CONTENT_LENGTH).join('\n')}
            </Typography>
            {hasMoreContent && !showMore && (
                <Button onClick={() => setShowMore(true)} style={{ color: subPrimaryColor, marginLeft: '10px' }}>
                    Read More
                </Button>
            )}
        </Box>
    )
};

export default Overview;
