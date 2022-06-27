import React from 'react';
import {ChatSendMessage} from './ChatSendMessage';

type ChatSendMessageType = {
    addMessage: (myMessage: string) => void
}
export const ChatSendMessageContainer = (props: ChatSendMessageType) => {

    const addMessage = (myMessage: string) => {
        props.addMessage(myMessage)
    }
    return (
        <ChatSendMessage addMessage={addMessage} />
    );
};