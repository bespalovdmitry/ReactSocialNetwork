import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import {Grid} from '@mui/material';
import {ProfileCard} from './ProfileCard';
import {StorePropsType} from '../../types';
import {Chat} from './chat/Chat';

type ProfilePropsType = {
    store: StorePropsType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                <ProfileCard/>
                <Chat
                    store={props.store}
                />
            </Grid>
        </Box>
    );
};


