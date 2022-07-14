import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, {useEffect} from 'react';
import {Avatar, Box, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setUserDataAC} from '../redux/headerReducer';
import {StoreType} from '../redux/storeRedux';
import {AuthDataType, ProfileDataType} from '../types';
import {setUserProfileAC} from '../redux/profileReducer';
import {authAPI, profileAPI} from '../api/api';

export const Header = () => {
    const dispatch = useDispatch()
    const userData = useSelector<StoreType, AuthDataType>(state => state.auth)
    const profile = useSelector<StoreType, ProfileDataType | null>(state => state.profilePage.profileData)

    useEffect(() => {
        document.title = 'Login'


        const authUser = async () => {
            const authData = await authAPI.getAuth()
            if (authData.resultCode === 0) {
                dispatch(setUserDataAC(authData))
            }
            const profileData = await profileAPI.getProfile(authData.data.id)
            dispatch(setUserProfileAC(profileData))
        }
        authUser()
    }, [dispatch])
    return (
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography variant="h6">
                    Social Network
                </Typography>
                {!userData.isAuth ?
                    <NavLink to={'/login'} style={{textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit">Login</Button>
                    </NavLink> :
                    <Box sx={{display: 'flex'}}>
                        <Typography variant="h6">
                            {profile?.fullName}
                        </Typography>
                        <Avatar alt="Remy Sharp" src={profile?.photos.large}/>
                    </Box>}


            </Toolbar>
        </AppBar>
    );
};