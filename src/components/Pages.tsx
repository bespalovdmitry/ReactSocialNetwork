import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Error404 from './error/Error404';
import {Profile} from './profile/Profile';
import {Message} from './message/Message';
import {StorePropsType} from '../types';

export const PATH = {
    PROFILE: '/profile',
    MESSAGES: '/messages'
}

type PagesType = {
    store: StorePropsType
}

function Pages(props: PagesType) {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>

            <Route path={PATH.PROFILE} element={<Profile store={props.store}/>}/>
            <Route path={PATH.MESSAGES} element={<Message store={props.store}/>}/>

            <Route path={'/*'} element={<Error404/>}/>

        </Routes>
    )
}

export default Pages
