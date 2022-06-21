import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export const SearchField = () => {
    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '40px', mb: 3}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search..."
            />
            <IconButton sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
};