import {Grid} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import {StoreType} from '../../../redux/storeRedux';
import {MyPostType} from '../../../types';
import {SendPost} from './SendPost';
import {MyPost} from './MyPost';


export const Chat = () => {
    let posts = useSelector<StoreType, Array<MyPostType>>(state => state.profilePage.myPostsData)
    return (
        <Grid item xs={8}>
            <SendPost/>
            {posts.map(post =>
                <MyPost
                key={post.id}
                post={post}
            />)}
        </Grid>
    );
};

