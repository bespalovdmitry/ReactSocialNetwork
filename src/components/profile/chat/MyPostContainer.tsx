import React from 'react';
import {MyPostType, StorePropsType} from '../../../types';
import {addLikeAC} from '../../../redux/profileReducer';
import {MyPost} from './MyPost';

type MyPostPropsType = {
    store: StorePropsType
    post: MyPostType
    postId: string
}

export const MyPostContainer = (props: MyPostPropsType) => {
    const addLike = () => {
        props.store.dispatch(addLikeAC(props.postId))
    }
    return (
       <MyPost post={props.post} addLike={addLike}/>
    )
};