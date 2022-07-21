import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, {useEffect} from 'react';
import {Avatar, Box, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthProfile} from '../redux/headerReducer';
import {StoreType, useAppDispatch} from '../redux/storeRedux';
import {AuthDataType} from '../types';

export const Header = () => {
    const dispatch = useAppDispatch()
    const profileData = useSelector<StoreType, AuthDataType>(state => state.auth)

    useEffect(() => {
        document.title = 'Login'
        dispatch(getAuthProfile())
    }, [dispatch])
    return (
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography variant="h6">
                    Social Network
                </Typography>
                {!profileData.isAuth ?
                    <NavLink to={'/login'} style={{textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit">Login</Button>
                    </NavLink> :
                    <Box sx={{display: 'flex'}}>
                        <Typography variant="h6">
                            {profileData?.data.login}
                        </Typography>
                        <Avatar alt="Remy Sharp" src={''}/>
                    </Box>}
            </Toolbar>
        </AppBar>
    );
};