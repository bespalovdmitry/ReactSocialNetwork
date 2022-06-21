import {IconButton, Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';
import {MyPostType} from '../../../types';

type MyPostPropsType = {
    post: MyPostType
}

export const MyPost = (props: MyPostPropsType) => {
    return (
        <Paper sx={{mb: 1, p: 1}}>
            <Typography sx={{ml: 1}}>{props.post.postMessage}</Typography>
            <Box display={'flex'} alignItems={'center'}><IconButton
                sx={{color: 'red'}}><FavoriteBorderOutlinedIcon/></IconButton>
                <Typography sx={{color: 'red'}} fontWeight={'bold'}>{props.post.like}</Typography></Box>
        </Paper>
    )
};