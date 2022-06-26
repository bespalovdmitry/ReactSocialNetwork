import {Divider, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import {ChatHeader} from './ChatHeader';
import {MessageFromFriend} from './MessageFromFriend';
import React from 'react';
import {MyMessage} from './MyMessage';
import {StorePropsType} from '../../../types';
import {ChatSendMessageContainer} from './ChatSendMessageContainer';

type ChatAreaPropsType = {
    store: StorePropsType
}
export const ChatArea = (props: ChatAreaPropsType) => {
    return (
        <Paper sx={{
            height: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box>
                    <ChatHeader/>
                    <Divider sx={{mb: 2}}/>
                    {props.store.getState().messagePage.friendMessageData.map((message) => {
                        return <MessageFromFriend key={message.id} friendName={message.friendName}
                                                  message={message.message} time={message.time}/>
                    })}
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    {props.store.getState().messagePage.myMessageData.map((message) => {
                        return <MyMessage key={message.id} friendName={message.friendName} message={message.message}
                                          time={message.time}/>
                    })}
                </Box>
            </Box>
            <Box>
                <Divider sx={{mb: 2}}/>
                <ChatSendMessageContainer store={props.store}/>
            </Box>
        </Paper>
    );
};