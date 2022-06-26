import {ProfilePageType, RootActionType} from '../types';
import {v1} from 'uuid';

const initialState: ProfilePageType = {
    myPostsData: [
        {id: v1(), postMessage: 'Hello my friends!', like: 45},
        {id: v1(), postMessage: 'This is my first post', like: 32},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: RootActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return  {...state, myPostsData: [...state.myPostsData, {id: v1(), postMessage: action.postMessage, like: 0}]}
            // return state.myPostsData.push({id: v1(), postMessage: action.postMessage, like: 0})
        case 'ADD-LIKE':
            return {...state, myPostsData: state.myPostsData.map(post => post.id === action.postId ? {...post, like: post.like + 1} : post)}
        default: return state
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const addLikeAC = (postId: string) => {
    return {
        type: 'ADD-LIKE',
        postId: postId
    } as const
}