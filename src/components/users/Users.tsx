import React, {useEffect, useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import {FriendCard} from './FriendCard';
import Box from '@mui/material/Box';
import {Grid, Pagination, Stack} from '@mui/material';
import {UsersPageType} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from '../../redux/storeRedux';
import {changePaginationAC, setPaginationAC, setUsersAC} from '../../redux/usersReducer';
import Loader from '../Loader';
import {userAPI} from '../../api/api';

export const Users = () => {
    const [loader, setLoader] = useState(true)
    const usersPages = useSelector<StoreType, UsersPageType>(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'User'
        userAPI.getUsers(usersPages.currentPage, 9)
            .then((data) => {
                dispatch(setUsersAC(data.items))
                dispatch(setPaginationAC(data.totalCount))
                setLoader(false)
            })
    }, [usersPages.currentPage, usersPages.pageSize, dispatch])

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
                    onClick={() => setLoader(true)}
                    page={usersPages.currentPage}
                    onChange={handleChangePagination}
                    count={Math.ceil(usersPages.totalCount / usersPages.pageSize)}
                    color="primary"
                    sx={{mb: 2}}/>
            </Stack>
            {loader ? <Grid container spacing={2} sx={{mb: 1, mt: 1}}>
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