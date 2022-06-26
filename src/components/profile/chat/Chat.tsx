import {Grid} from '@mui/material';
import React from 'react';
import {StorePropsType} from '../../../types';
import {MyPostContainer} from './MyPostContainer';
import {SendPostContainer} from './SendPostContainer';

type ChatPropsType = {
    store: StorePropsType
}

export const Chat = (props: ChatPropsType) => {
    return (
        <Grid item xs={8}>
            <SendPostContainer
                store={props.store}
            />
            {props.store.getState().profilePage.myPostsData.map(post => <MyPostContainer key={post.id} post={post} postId={post.id} store={props.store}/>)}
        </Grid>
    );
};

