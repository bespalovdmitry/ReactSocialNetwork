import {Grid} from '@mui/material';
import React from 'react';
import {SendPost} from './SendPost';
import {MyPost} from './MyPost';
import {v1} from 'uuid';
import {MyPostType} from '../../../types';

type ChatPropsType = {
    myPostsData: Array<MyPostType>
    addPost: (postMessage: string) => void
}

export const Chat = (props: ChatPropsType) => {

    return (
        <Grid item xs={8}>
            <SendPost addPost={props.addPost}/>
            {props.myPostsData.map(post => <MyPost key={v1()} post={post}/>)}
        </Grid>
    );
};

