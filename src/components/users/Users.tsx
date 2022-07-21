import React, {useEffect} from 'react';
import Toolbar from '@mui/material/Toolbar';
import {FriendCard} from './FriendCard';
import Box from '@mui/material/Box';
import {Grid, Pagination, Stack} from '@mui/material';
import {AuthDataType, UsersPageType} from '../../types';
import {useSelector} from 'react-redux';
import {StoreType, useAppDispatch} from '../../redux/storeRedux';
import {changePaginationAC, getUsers} from '../../redux/usersReducer';
import Loader from '../Loader';
import {Navigate} from 'react-router-dom';

export const Users = () => {
    const usersPages = useSelector<StoreType, UsersPageType>(state => state.usersPage)
    const authData = useSelector<StoreType, AuthDataType>(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
            document.title = 'User'
            dispatch(getUsers(usersPages.currentPage))
        }, [dispatch, usersPages.currentPage])

    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changePaginationAC(value))
    }

    if (!authData.isAuth) return <Navigate to={'/login'}/>
    return (
        <Box component="main"
             sx={{
                 flexGrow: 1, p: 3,
                 backgroundColor: '#f6f6f9',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center'
             }}>
            <Toolbar/>
            <Stack spacing={2}>
                <Pagination
                    page={usersPages.currentPage}
                    onChange={handleChangePagination}
                    count={Math.ceil(usersPages.totalCount / usersPages.pageSize)}
                    color="primary"
                    sx={{mb: 2}}/>
            </Stack>
            {usersPages.isFetching ? <Grid container spacing={2} sx={{mb: 1, mt: 1}}>
                <Loader/>
            </Grid> : null}
            <Box>
                <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                    {usersPages.usersData.map(user =>
                        <FriendCard
                            key={user.id}
                            user={user}
                        />
                    )}
                </Grid>
            </Box>
        </Box>
    )
}