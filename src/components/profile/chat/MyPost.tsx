import {IconButton, Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';
import {MyPostType, RootActionType} from '../../../types';
import {addLikeAC} from '../../../redux/profileReducer';

type MyPostPropsType = {
    dispatch: (action: RootActionType) => void
    post: MyPostType
    postId: string
}

export const MyPost = (props: MyPostPropsType) => {
    const onClickAddLike = () => {
        props.dispatch(addLikeAC(props.postId))
    }
    return (
        <Paper sx={{mb: 1, p: 1}}>
            <Typography sx={{ml: 1}}>{props.post.postMessage}</Typography>
            <Box display={'flex'}
                 alignItems={'center'}>
                <IconButton
                    sx={{color: 'red'}}
                    onClick={onClickAddLike}
                >
                    <FavoriteBorderOutlinedIcon/></IconButton>
                <Typography sx={{color: 'red'}} fontWeight={'bold'}>{props.post.like}</Typography>
            </Box>
        </Paper>
    )
};