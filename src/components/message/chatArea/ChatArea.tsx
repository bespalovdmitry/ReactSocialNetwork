import {Divider, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import {ChatHeader} from './ChatHeader';
import {MessageFromFriend} from './MessageFromFriend';
import React from 'react';
import {MyMessage} from './MyMessage';
import {MessagePageType} from '../../../types';
import {ChatSendMessage} from "./ChatSendMessage";
import {useSelector} from "react-redux";
import {StoreType} from "../../../redux/storeRedux";


export const ChatArea = () => {
    const messageData = useSelector<StoreType, MessagePageType>(state => state.messagePage)
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
                    {messageData.friendMessageData.map((message) => {
                        return <MessageFromFriend key={message.id} friendName={message.friendName}
                                                  message={message.message} time={message.time}/>
                    })}
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    {messageData.myMessageData.map((message) => {
                        return <MyMessage key={message.id} friendName={message.friendName} message={message.message}
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