import {Divider, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import {ChatHeader} from './ChatHeader';
import {MessageFromFriend} from './MessageFromFriend';
import {ChatSendMessage} from './ChatSendMessage';
import React from 'react';
import {MyMessage} from './MyMessage';
import {MessageType} from '../../../types';

type ChatAreaPropsType = {
    friendMessageData: Array<MessageType>
    myMessageData: Array<MessageType>
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
                    {props.friendMessageData.map((message) => {
                        return <MessageFromFriend key={message.id} friendName={message.friendName}
                                                  message={message.message} time={message.time}/>
                    })}
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {props.myMessageData.map((message) => {
                        return <MyMessage friendName={message.friendName} message={message.message}
                                          time={message.time}/>
                    })}
                </Box>

            </Box>
            <Box>
                <Divider sx={{mb: 2}}/>
                <ChatSendMessage/>
            </Box>
        </Paper>
    );
};