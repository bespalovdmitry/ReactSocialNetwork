import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Error404 from './error/Error404';
import {Profile} from './profile/Profile';
import {Message} from './message/Message';
import {UsersContainer} from './users/UsersContainer';

export const PATH = {
    PROFILE: '/profile',
    MESSAGES: '/messages',
    USERS: '/users'
}

function Pages() {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>

            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.MESSAGES} element={<Message/>}/>
            <Route path={PATH.USERS} element={<UsersContainer />}/>

            <Route path={'/*'} element={<Error404/>}/>

        </Routes>
    )
}

export default Pages
