import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Error404 from './error/Error404';
import {Profile} from './profile/Profile';
import {Message} from './message/Message';
import {Users} from './users/Users';
import {Login} from './login/Login';

export const PATH = {
    PROFILE: '/profile/*',
    MESSAGES: '/messages',
    USERS: '/users',
    LOGIN: '/login'
}

function Pages() {
    return (
        <Routes>
                <Route path={PATH.PROFILE} element={<Profile/>}>
                    <Route path={':userId'} element={<Profile/>}/>
                </Route>
                <Route path={PATH.MESSAGES} element={<Message/>}/>
                <Route path={PATH.USERS} element={<Users/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>

                <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    )
}

export default Pages
