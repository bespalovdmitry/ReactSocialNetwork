import React from 'react';
import {MyPostType} from '../../../types';
import {MyPost} from './MyPost';

type MyPostPropsType = {
    addLike: (postId: string) => void
    post: MyPostType
    postId: string
}

export const MyPostContainer = (props: MyPostPropsType) => {
    const addLike = () => {
        props.addLike(props.postId)
    }
    return (
       <MyPost post={props.post} addLike={addLike}/>
    )
};