import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ListItemText from '@mui/material/ListItemText';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import {NavLink} from 'react-router-dom';
import {ListItemButton} from '@mui/material';

export const SideBar = () => {
    const drawerWidth = 240;
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                backgroundColor: '#2A3042'
            }}
        >
            <Toolbar/>

            <Box sx={{overflow: 'auto'}}>


                <List>
                        <NavLink to="/profile" style={{textDecoration: 'none'}}>
                            <ListItemButton>
                                <ListItemIcon><AssignmentIndOutlinedIcon/></ListItemIcon>
                                <ListItemText primary="Profile" sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                            </ListItemButton>
                        </NavLink>

                        <NavLink to="/messages" style={{textDecoration: 'none'}}>
                            <ListItemButton>
                                <ListItemIcon><ChatOutlinedIcon/></ListItemIcon>
                                <ListItemText primary="Chat" sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                            </ListItemButton>
                        </NavLink>
                </List>

            </Box>
        </Drawer>

    );
};