import {IconButton, InputBase} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {addMessageAC} from "../../../redux/messageReducer";

export const ChatSendMessage = () => {
    return (
        <AddMessageForm/>
    );
};

export const AddMessageForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {postMessage: ''},
        onSubmit: (values) => {
            dispatch(addMessageAC(String(values.postMessage)))
            values.postMessage = ''
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}
              style={{
                  padding: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '40px',
                  marginBottom: 1,
                  backgroundColor: '#EFF2F6'
              }}>
            <InputBase
                id="postMessage"
                name="postMessage"
                sx={{ml: 1, flex: 1, backgroundColor: '#EFF2F6'}}
                placeholder="Enter message"
                value={formik.values.postMessage}
                onChange={formik.handleChange}
            />
            <IconButton sx={{p: '10px'}} color={'primary'} type="submit">
                <SendIcon/>
            </IconButton>
        </form>

    )
}