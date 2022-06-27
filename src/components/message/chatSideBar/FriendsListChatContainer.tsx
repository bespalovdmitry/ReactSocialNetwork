import React from 'react';
import {RootType} from '../../../types';
import {connect} from 'react-redux';
import {FriendsListChat} from './FriendsListChat';
import {Dispatch} from 'redux';

const mapStateToProps = (state: RootType) => {
    return {
        friendsData: state.messagePage.friendsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}
export const FriendsListChatContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsListChat)

