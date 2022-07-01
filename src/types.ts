import {addLikeAC, addPostAC} from './redux/profileReducer';
import {addMessageAC} from './redux/messageReducer';
import {changeFollowedAC, changePaginationAC, setPaginationAC, setUsersAC} from './redux/usersReducer';


export type StorePropsType = {
    _state: RootType
    getState: () => RootType
    _callSubscriber: (store: RootType) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: RootActionType) => void
}
export type RootActionType = AddPostACType | AddMessageACType | AddLikeACType | ChangeFollowedACType | SetUsersACType |
    SetPaginationAC | ChangePaginationAC
export type RootType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    usersPage: UsersPageType
}
export type UsersPageType = {
    usersData: Array<UserType>
    totalCount: number,
    pageSize: number,
    currentPage: number
}

export type UserType = {
    photos: {
        large: string
        small: string
    }
    id: string
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string
    // location: { country: string, city: string }
}
export type MessagePageType = {
    friendsData: Array<FriendType>
    friendMessageData: Array<MessageType>
    myMessageData: Array<MessageType>
}
export type MessageType = { id: string, friendName: string, message: string, time: string }
export type FriendType = { id: string, friendName: string, lastMessage: string, lastMessageTime: string, avatar: string, statusColor: string }
export type ProfilePageType = {
    myPostsData: Array<MyPostType>
}
export type MyPostType = { id: string, postMessage: string, like: number }

export type AddPostACType = ReturnType<typeof addPostAC>
export type AddMessageACType = ReturnType<typeof addMessageAC>
export type AddLikeACType = ReturnType<typeof addLikeAC>
export type ChangeFollowedACType = ReturnType<typeof changeFollowedAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetPaginationAC = ReturnType<typeof setPaginationAC>
export type ChangePaginationAC = ReturnType<typeof changePaginationAC>
