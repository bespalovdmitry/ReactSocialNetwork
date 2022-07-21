import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React, {useEffect} from 'react';
import {Grid} from '@mui/material';
import {ProfileCard} from './ProfileCard';
import {Chat} from './chat/Chat';
import {Navigate, useParams} from 'react-router-dom';
import {profileAPI} from '../../api/api';
import {setUserProfileAC} from '../../redux/profileReducer';
import {StoreType, useAppDispatch} from '../../redux/storeRedux';
import {useSelector} from 'react-redux';
import {AuthDataType} from '../../types';


export const Profile = () => {
    const dispatch = useAppDispatch()
    const {userId} = useParams()
    const authData = useSelector<StoreType, AuthDataType>(state => state.auth)
    useEffect(() => {
        document.title = 'Profile'
        profileAPI.getProfile(Number(userId) || authData.data.id as number)
            .then((res) => {
                dispatch(setUserProfileAC(res))
            })
            .catch((err) => {
                console.warn(`Profile ${err}`)
            })
    }, [dispatch, userId, authData.data.id])

    if (!authData.isAuth) return <Navigate to={'/login'}/>
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                <ProfileCard/>
                <Chat/>
            </Grid>
        </Box>
    );
};

