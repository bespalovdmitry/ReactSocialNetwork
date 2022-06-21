import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";

type MessageFromFriendPropsType = {
    friendName: string
    message: string
    time: string
}
export const MessageFromFriend = (props: MessageFromFriendPropsType) => {
    return (
        <Paper elevation={0} sx={{
            p: 2,
            width: 'fit-content',
            maxWidth: '43%',
            pb: 0.5,
            bgcolor: '#EDF0FD',
            borderRadius: '20px 20px 20px 0',
            mb: 1
        }}>
            <Typography color={'#1976d2'} sx={{fontSize: '16px', fontWeight: 'bold'}}>{props.friendName}</Typography>
            <Typography sx={{fontSize: '15px'}}>{props.message}</Typography>
            <Box display={'flex'} alignItems={'center'} sx={{mt: 1}}>
                <AccessTimeIcon sx={{width: '12px', height: '12px', mr: 1}}/>
                <Typography sx={{fontSize: '12px'}}>{props.time}</Typography>
            </Box>
        </Paper>
    );
};