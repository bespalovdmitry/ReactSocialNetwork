import {Button, ButtonGroup, IconButton, Paper, TextField, Tooltip} from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addPostAC} from '../../../redux/profileReducer';
import {useFormik} from "formik";

export const SendPost = () => {
    return (
        <Paper sx={{mb: 1, p: 1}}>
                <SendPostForm />
            <ButtonGroup sx={{mt: 1}}>
                <Tooltip title="File" placement="top"><IconButton sx={{color: '#FD5D5D'}}><AttachmentIcon/></IconButton></Tooltip>
                <IconButton sx={{color: '#00AFC1'}}><SlowMotionVideoIcon/></IconButton>
                <IconButton sx={{color: '#6BCB77'}}><AddPhotoAlternateOutlinedIcon/></IconButton>
                <IconButton sx={{color: '#733C3C'}}><AddLocationAltOutlinedIcon/></IconButton>
                <IconButton sx={{color: '#F0A500'}}><SentimentSatisfiedOutlinedIcon/></IconButton>
            </ButtonGroup>
        </Paper>
    );
};

const SendPostForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {postMessage},
        onSubmit: (values) => {
            dispatch(addPostAC(String(values.postMessage)))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} style={{display: "flex", alignItems: "flex-end"}}>
            <TextField
                fullWidth
                id="postMessage"
                name="postMessage"
                value={formik.values.postMessage}
                onChange={formik.handleChange}
                variant={'standard'}
                label={'Add post...'}
            />
            <Button
                variant={'contained'}
                sx={{ml: 1, alignItems: 'flex-end'}}
                type="submit"
            >
                POST
            </Button>
        </form>
    )
}