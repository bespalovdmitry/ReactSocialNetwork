import React from 'react';
import {RootType} from '../../../types';
import {Chat} from './Chat';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addLikeAC} from '../../../redux/profileReducer';


const mapStateToProps = (state: RootType) => {
    return {
        myPostsData: state.profilePage.myPostsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addLike: (postId: string) => {
            dispatch(addLikeAC(postId))
        }
    }
}
export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

