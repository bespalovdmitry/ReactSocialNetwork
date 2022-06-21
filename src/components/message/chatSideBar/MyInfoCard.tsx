import Box from "@mui/material/Box";
import {Avatar, Badge} from "@mui/material";
import myAvatar from "../../../media/my_avatar.jpeg";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import React from "react";

export const MyInfoCard = () => {
    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{mb: 2}}>
                <Box display={'flex'} alignItems={'center'}>
                    <Avatar src={myAvatar}/>
                    <Box sx={{ml: 2}}>
                        <Typography variant={'h6'}>Henry Price</Typography>
                        <Box display={'flex'} alignItems={'center'}>
                            <FiberManualRecordIcon fontSize={'small'} color={'success'}/>
                            <Typography sx={{color: '#74788D'}}>Active</Typography>
                        </Box>
                    </Box>
                </Box>
                <Badge
                    color={'error'}
                    variant="dot"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <NotificationsActiveOutlinedIcon/>
                </Badge>
            </Box>
        </Box>
    );
};