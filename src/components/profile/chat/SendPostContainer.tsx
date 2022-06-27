import React from 'react';
import {RootType} from '../../../types';
import {addPostAC} from '../../../redux/profileReducer';
import {SendPost} from './SendPost';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

const mapStateToProps = (state: RootType) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        }
    }
}
export const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost)