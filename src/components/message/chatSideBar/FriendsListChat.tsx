import List from '@mui/material/List';
import React from 'react';
import {FriendCardChat} from './FriendCardChat';
import {FriendType} from '../../../types';
import {useSelector} from 'react-redux';
import {StoreType} from '../../../redux/storeRedux';

export const FriendsListChat = () => {
    const style = {
        width: '100%',
        maxWidth: 360,
    };
    const friendsData = useSelector<StoreType, Array<FriendType>>(state => state.messagePage.friendsData)
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            {friendsData.map(friend => (
                <FriendCardChat
                    key={friend.id}
                    friend={friend}
                />
            ))}
        </List>
    );
};

