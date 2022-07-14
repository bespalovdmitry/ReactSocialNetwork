import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React, {useEffect} from 'react';
import {Grid} from '@mui/material';
import {MyInfoCard} from './chatSideBar/MyInfoCard';
import {SearchField} from './chatSideBar/SearchField';
import {ChatGroupBtn} from './chatSideBar/ChatGroupBtn';
import {ChatAreaContainer} from './chatArea/ChatAreaContainer';
import {FriendsListChat} from './chatSideBar/FriendsListChat';


export const Message = () => {
    useEffect(() => {
        document.title = 'Chat'
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <Toolbar/>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <MyInfoCard/>
                    <SearchField/>
                    <ChatGroupBtn/>
                    <FriendsListChat/>
                </Grid>
                <Grid item xs={9}>
                    <ChatAreaContainer/>
                </Grid>
            </Grid>
        </Box>
    );
};




