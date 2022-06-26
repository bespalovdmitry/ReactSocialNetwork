import React from 'react';
import {StorePropsType} from '../../../types';
import {addMessageAC} from '../../../redux/messageReducer';
import {ChatSendMessage} from './ChatSendMessage';

type ChatSendMessageType = {
    store: StorePropsType
}
export const ChatSendMessageContainer = (props: ChatSendMessageType) => {

    const addMessage = (myMessage: string) => {
        props.store.dispatch(addMessageAC(myMessage))
    }
    return (
        <ChatSendMessage addMessage={addMessage} />
    );
};