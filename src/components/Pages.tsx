import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom';
import Error404 from './error/Error404';
import {Profile} from './profile/Profile';
import {Message} from './message/Message';
import {MessagePageType, MyPostType} from '../types';

export const PATH = {
    PROFILE: '/profile',
    MESSAGES: '/messages'
}

type PagesType = {
    myPostsData: Array<MyPostType>
    messagePage: MessagePageType
    addPost: (postMessage: string) => void
}
function Pages(props: PagesType) {
    return (
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>

                <Route path={PATH.PROFILE} element={<Profile
                    myPostsData={props.myPostsData}
                    addPost={props.addPost}
                />}/>
                <Route path={PATH.MESSAGES} element={<Message friendsData={props.messagePage.friendsData}
                                                              friendMessageData={props.messagePage.friendMessageData}
                                                              myMessageData={props.messagePage.myMessageData}/>}/>


                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
    )
}

export default Pages
