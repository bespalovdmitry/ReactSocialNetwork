import {Divider, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import {ChatHeader} from './ChatHeader';
import {MessageFromFriend} from './MessageFromFriend';
import React from 'react';
import {MyMessage} from './MyMessage';
import {MessageType} from '../../../types';
import {ChatSendMessageContainer} from './ChatSendMessageContainer';

type ChatAreaType = {
    friendMessageData: Array<MessageType>
    myMessageData: Array<MessageType>
    addMessage: (myMessage: string) => void
}
export const ChatArea = (props: ChatAreaType) => {
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
                    {props.friendMessageData.map((message) => {
                        return <MessageFromFriend key={message.id} friendName={message.friendName}
                                                  message={message.message} time={message.time}/>
                    })}
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    {props.myMessageData.map((message) => {
                        return <MyMessage key={message.id} friendName={message.friendName} message={message.message}
                                          time={message.time}/>
                    })}
                </Box>
            </Box>
            <Box>
                <Divider sx={{mb: 2}}/>
                <ChatSendMessageContainer addMessage={props.addMessage}/>
            </Box>
        </Paper>
    );
};