import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Error404 from './error/Error404';
import {Profile} from './profile/Profile';
import {Message} from './message/Message';
import {MessagePageType, ProfilePageType, RootActionType} from '../types';

export const PATH = {
    PROFILE: '/profile',
    MESSAGES: '/messages'
}

type PagesType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    dispatch: (action: RootActionType) => void
}
function Pages(props: PagesType) {
    return (
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>

                <Route path={PATH.PROFILE} element={<Profile
                    profilePage={props.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path={PATH.MESSAGES} element={<Message friendsData={props.messagePage.friendsData}
                                                              friendMessageData={props.messagePage.friendMessageData}
                                                              myMessageData={props.messagePage.myMessageData}
                                                              dispatch={props.dispatch}
                />}/>


                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
    )
}

export default Pages
