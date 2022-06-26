import React from 'react';
import {StorePropsType} from '../../../types';
import {addPostAC} from '../../../redux/profileReducer';
import {SendPost} from './SendPost';

type SendPostPropsType = {
    store: StorePropsType
}
export const SendPostContainer = (props: SendPostPropsType) => {
    const sendPost = (newPost: string) => {
        props.store.dispatch(addPostAC(newPost))
    }
    return (
        <SendPost sendPost={sendPost}/>
    );
};