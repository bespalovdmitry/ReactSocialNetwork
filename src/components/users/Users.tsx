import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import {FriendCard} from './FriendCard';
import Box from '@mui/material/Box';
import {Button, Grid} from '@mui/material';
import {UserType} from '../../types';
import {v1} from 'uuid';

type UsersPropsType = {
    usersData: Array<UserType>
    changeFollowed: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}


export const Users = (props: UsersPropsType) => {

    const onClickSetUsers = () => {
        props.setUsers([
            {id: v1(), followed: true, fullName: 'Dmitry B', status: 'Im new user', location: {country: 'Russia', city: 'Moscow'}},
            {id: v1(), followed: false, fullName: 'Jack K', status: 'Hello, see my profile', location: {country: 'USA', city: 'New York'}},
            {id: v1(), followed: true, fullName: 'Sandra B', status: 'Travels lovely', location: {country: 'Singapore', city: 'Singapore'}}
        ])
    }

    if (props.usersData.length === 0){
        props.setUsers([
            {id: v1(), followed: true, fullName: 'Arina B', status: 'Im new user', location: {country: 'Germany', city: 'Berlin'}},
            {id: v1(), followed: false, fullName: 'James K', status: 'Hello, see my profile', location: {country: 'Italia', city: 'Rome'}},
            {id: v1(), followed: true, fullName: 'Alan B', status: 'Travels lovely', location: {country: 'Thailand', city: 'Phuket'}}
        ])
    }

    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Box>
                <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                    {props.usersData.map(user => <FriendCard
                        key={user.id}
                        userId={user.id}
                        fullName={user.fullName}
                        location={user.location}
                        followed={user.followed}
                        status={user.status}
                        changeFollowed={props.changeFollowed}
                    />)}
                </Grid>
                <Button onClick={onClickSetUsers}>Show more</Button>
            </Box>
        </Box>
    );
};