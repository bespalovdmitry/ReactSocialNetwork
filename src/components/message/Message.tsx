import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {Grid} from "@mui/material";
import {MyInfoCard} from "./chatSideBar/MyInfoCard";
import {SearchField} from "./chatSideBar/SearchField";
import {ChatGroupBtn} from "./chatSideBar/ChatGroupBtn";
import {FriendsListChat} from "./chatSideBar/FriendsListChat";
import {ChatArea} from "./chatArea/ChatArea";
import {FriendType, MessageType, RootActionType} from '../../types';

type MessagePropsType = {
    friendsData: Array<FriendType>
    friendMessageData: Array<MessageType>
    myMessageData: Array<MessageType>
    dispatch: (action: RootActionType) => void
}

export const Message = (props: MessagePropsType) => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <Toolbar/>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <MyInfoCard/>
                    <SearchField/>
                    <ChatGroupBtn/>
                    <FriendsListChat friendsData={props.friendsData}/>
                </Grid>
                <Grid item xs={9}>
                    <ChatArea
                        friendMessageData={props.friendMessageData}
                        myMessageData={props.myMessageData}
                        dispatch={props.dispatch}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};




