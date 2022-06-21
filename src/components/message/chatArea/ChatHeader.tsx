import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import React from "react";

export const ChatHeader = () => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={"space-between"} sx={{mb: 1}}>
            <Box>
                <Typography variant={'h6'}>Steven Franklin</Typography>
                <Box display={'flex'} alignItems={'center'}>
                    <FiberManualRecordIcon fontSize={'small'} color={'success'}/>
                    <Typography sx={{color: '#74788D'}}>online</Typography>
                </Box>
            </Box>
            <Box>
                <IconButton><SearchIcon/></IconButton>
                <IconButton><SettingsOutlinedIcon/></IconButton>
                <IconButton><MoreHorizOutlinedIcon/></IconButton>
            </Box>
        </Box>
    );
};