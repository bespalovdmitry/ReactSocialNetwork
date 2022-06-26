import {IconButton, InputBase, Paper} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, {ChangeEvent, useState} from 'react';
import {RootActionType} from '../../../types';
import {addMessageAC} from '../../../redux/messageReducer';

type ChatSendMessageType = {
    dispatch: (action: RootActionType) => void
}
export const ChatSendMessage = (props: ChatSendMessageType) => {
    const [myMessage, setMyMessage] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setMyMessage(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.dispatch(addMessageAC(myMessage))
        setMyMessage('')
    }
    return (
        <Paper component="form" sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '40px',
            mb: 1,
            backgroundColor: '#EFF2F6'
        }}>
            <InputBase
                sx={{ml: 1, flex: 1, backgroundColor: '#EFF2F6'}}
                placeholder="Enter message"
                value={myMessage}
                onChange = {onChangeHandler}
            />
            <IconButton sx={{p: '10px'}} color={'primary'} onClick={onClickHandler}>
                <SendIcon/>
            </IconButton>
        </Paper>
    );
};