import {Grid} from '@mui/material';
import React from 'react';
import {MyPostType} from '../../../types';
import {MyPostContainer} from './MyPostContainer';
import {SendPostContainer} from './SendPostContainer';

type ChatPropsType = {
    myPostsData: Array<MyPostType>
    addLike: (postId: string) => void
}
export const Chat = (props: ChatPropsType) => {
    return (
        <Grid item xs={8}>
            <SendPostContainer/>
            {props.myPostsData.map(post => <MyPostContainer key={post.id} post={post} postId={post.id} addLike={props.addLike}/>)}
        </Grid>
    );
};

