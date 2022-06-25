import {Grid} from '@mui/material';
import React from 'react';
import {SendPost} from './SendPost';
import {MyPost} from './MyPost';
import {v1} from 'uuid';
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
            {props.profilePage.myPostsData.map(post => <MyPost key={v1()} post={post}/>)}
        </Grid>
    );
};

