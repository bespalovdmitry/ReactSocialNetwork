import {Button, ButtonGroup} from "@mui/material";
import React from "react";

export const ChatGroupBtn = () => {
    return (
        <ButtonGroup variant="outlined" fullWidth sx={{
            backgroundColor: '#ffffff',
            mb: 1
        }}>
            <Button variant={'contained'}>Chat</Button>
            <Button>Group</Button>
            <Button>Contacts</Button>
        </ButtonGroup>
    );
};