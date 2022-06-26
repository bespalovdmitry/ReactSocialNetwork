import List from '@mui/material/List';
import React from 'react';
import {FriendCardChat} from './FriendCardChat';
import {StorePropsType} from '../../../types';

type FriendsListChatPropsType = {
    store: StorePropsType
}
export const FriendsListChat = (props: FriendsListChatPropsType) => {
    const style = {
        width: '100%',
        maxWidth: 360,
    };
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            {props.store.getState().messagePage.friendsData.map(friend => (
                <FriendCardChat
                    key={friend.id}
                    id={friend.id}
                    friendName={friend.friendName}
                    avatar={friend.avatar}
                    lastMessage={friend.lastMessage}
                    lastMessageTime={friend.lastMessageTime}
                    statusColor={friend.statusColor}/>
            ))}
        </List>
    );
};

