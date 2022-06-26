import {Grid} from '@mui/material';
import React from 'react';
import {SendPost} from './SendPost';
import {MyPost} from './MyPost';
import {ProfilePageType, RootActionType} from '../../../types';

type ChatPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: RootActionType) => void
}

export const Chat = (props: ChatPropsType) => {

    return (
        <Grid item xs={8}>
            <SendPost
                dispatch={props.dispatch}
            />
            {props.profilePage.myPostsData.map(post => <MyPost key={post.id} post={post} postId={post.id} dispatch={props.dispatch}/>)}
        </Grid>
    );
};

