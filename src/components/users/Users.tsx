import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import {FriendCard} from './FriendCard';
import Box from '@mui/material/Box';
import {Grid, Pagination, Stack} from '@mui/material';
import {UserType} from '../../types';
import axios from 'axios';

type UsersPropsType = {
    usersData: Array<UserType>
    changeFollowed: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    totalCount: number
    pagination: (count: number) => void
    pageSize: number
    changePagination: (page: number) => void
    currentPage: number
}


export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.pagination(response.data.totalCount)
            })
            .catch((resolve) => {
                console.log(resolve)
            })
    }

    render() {
        const handleChangePagination =  async (event: React.ChangeEvent<unknown>, value: number) => {
             await this.props.changePagination(value)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.pagination(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                })
                .catch((rej) => {
                    console.log(rej)
                })
        }

        return (
            <Box component="main" sx={{flexGrow: 1, p: 3,
                backgroundColor: '#f6f6f9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
                <Toolbar/>
                <Stack spacing={2}>
                    <Pagination
                        page={this.props.currentPage}
                        onChange={handleChangePagination}
                        count={Math.ceil(this.props.totalCount / this.props.pageSize)}
                        color="primary"
                        sx={{mb: 2}}/>
                </Stack>
                <Box>
                    <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                        {this.props.usersData.map(user => <FriendCard
                            key={user.id}
                            userId={user.id}
                            fullName={user.name}
                            // location={user.location}
                            followed={user.followed}
                            status={user.status}
                            photos={user.photos.small}
                            changeFollowed={this.props.changeFollowed}
                        />)}
                    </Grid>
                </Box>
            </Box>
        );
    }
}