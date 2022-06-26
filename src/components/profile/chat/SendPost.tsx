import {Button, ButtonGroup, IconButton, Paper, TextField, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import React, {ChangeEvent, useState} from 'react';
import {RootActionType} from '../../../types';
import {addPostAC} from '../../../redux/profileReducer';

type SendPostPropsType = {
    dispatch: (action: RootActionType) => void
}
export const SendPost = (props: SendPostPropsType) => {
    const [newPost, setNewPost] = useState('')

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewPost(e.currentTarget.value)
    }
    const onClickSendPostHandler = () => {
        props.dispatch(addPostAC(newPost))
        setNewPost('')
    }
    return (
        <Paper sx={{mb: 1, p: 1}}>
            <Box display={'flex'} alignItems={'flex-end'}>
                <TextField value={newPost} onChange={onChangePost} label={'Add post...'} variant={'standard'} fullWidth/>
                <Button onClick={onClickSendPostHandler} variant={'contained'} sx={{ml: 1, alignItems: 'flex-end'}}>Post</Button>
            </Box>
            <ButtonGroup sx={{mt: 1}}>
                <Tooltip title='File' placement="top"><IconButton sx={{color: '#FD5D5D'}}><AttachmentIcon/></IconButton></Tooltip>
                <IconButton sx={{color: '#00AFC1'}}><SlowMotionVideoIcon/></IconButton>
                <IconButton sx={{color: '#6BCB77'}}><AddPhotoAlternateOutlinedIcon/></IconButton>
                <IconButton sx={{color: '#733C3C'}}><AddLocationAltOutlinedIcon/></IconButton>
                <IconButton sx={{color: '#F0A500'}}><SentimentSatisfiedOutlinedIcon/></IconButton>
            </ButtonGroup>
        </Paper>
    );
};