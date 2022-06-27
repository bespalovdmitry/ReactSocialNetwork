import React from 'react';
import {RootType} from '../../../types';
import {connect} from 'react-redux';
import {ChatArea} from './ChatArea';
import {Dispatch} from 'redux';
import {addMessageAC} from '../../../redux/messageReducer';

const mapStateToProps = (state: RootType) => {
    return {
        friendMessageData: state.messagePage.friendMessageData,
        myMessageData: state.messagePage.myMessageData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (myMessage: string) => {
            dispatch(addMessageAC(myMessage))
        }
    }
}


export const ChatAreaContainer = connect(mapStateToProps, mapDispatchToProps)(ChatArea)