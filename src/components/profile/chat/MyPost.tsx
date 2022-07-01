import {IconButton, Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';
import {MyPostType} from '../../../types';
import {useDispatch} from 'react-redux';
import {addLikeAC} from '../../../redux/profileReducer';

type MyPostPropsType = {
    post: MyPostType
}

export const MyPost = ({post}: MyPostPropsType) => {
    const dispatch = useDispatch()
    const onClickAddLike = () => {
        dispatch(addLikeAC(post.id))
    }
    return (
        <Paper sx={{mb: 1, p: 1}}>
            <Typography sx={{ml: 1}}>{post.postMessage}</Typography>
            <Box display={'flex'}
                 alignItems={'center'}>
                <IconButton
                    sx={{color: 'red'}}
                    onClick={onClickAddLike}
                >
                    <FavoriteBorderOutlinedIcon/></IconButton>
                <Typography sx={{color: 'red'}} fontWeight={'bold'}>{post.like}</Typography>
            </Box>
        </Paper>
    )
};