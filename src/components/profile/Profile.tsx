import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {Grid} from "@mui/material";
import {ProfileCard} from './ProfileCard';
import {MyPostType} from '../../types';
import {Chat} from './chat/Chat';

type ProfilePropsType = {
    myPostsData: Array<MyPostType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                <ProfileCard/>
                <Chat
                    myPostsData={props.myPostsData}
                />
            </Grid>
        </Box>
    );
};

