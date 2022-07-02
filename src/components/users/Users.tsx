import React, {useEffect} from 'react';
import Toolbar from '@mui/material/Toolbar';
import {FriendCard} from './FriendCard';
import Box from '@mui/material/Box';
import {Grid, Pagination, Stack} from '@mui/material';
import {UsersPageType} from '../../types';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from '../../redux/storeRedux';
import {changePaginationAC, setPaginationAC, setUsersAC} from '../../redux/usersReducer';

export const Users = () => {
    const usersPages = useSelector<StoreType, UsersPageType>(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${usersPages.currentPage}&count=${usersPages.pageSize}`)
            .then((response) => {
                dispatch(setUsersAC(response.data.items))
                dispatch(setPaginationAC(response.data.totalCount))
            })
    },[usersPages.currentPage, usersPages.pageSize, dispatch])

    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changePaginationAC(value))
    }

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
            <Box>
                <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                    {usersPages.usersData.map(user => <FriendCard
                        key={user.id}
                        user={user}
                    />)}
                </Grid>
            </Box>
        </Box>
    )
}