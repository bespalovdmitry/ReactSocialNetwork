import {addLikeAC, addPostAC, setUserProfileAC} from './redux/profileReducer';
import {addMessageAC} from './redux/messageReducer';
import {
    changeFollowedAC,
    changePaginationAC,
    changeUnfollowAC, followingAC,
    setPaginationAC,
    setUsersAC
} from './redux/usersReducer';
import {setUserDataAC} from './redux/headerReducer';


export type StorePropsType = {
    _state: RootType
    getState: () => RootType
    _callSubscriber: (store: RootType) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: RootActionType) => void
}
export type RootActionType = AddPostACType | AddMessageACType | AddLikeACType | ChangeFollowedACType | SetUsersACType |
    SetPaginationAC | ChangePaginationAC | SetUserProfileACType | SetUserDataACType | ChangeUnfollowACType | FollowingACType
export type RootType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    usersPage: UsersPageType
}

export type AuthDataType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}
export type UsersPageType = {
    usersData: Array<UserType>
    totalCount: number,
    pageSize: number,
    currentPage: number,
    followingInProgress: true
}

export type ProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
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
    profileData: ProfileDataType | null
}
export type MyPostType = { id: string, postMessage: string, like: number }

export type AddPostACType = ReturnType<typeof addPostAC>
export type AddMessageACType = ReturnType<typeof addMessageAC>
export type AddLikeACType = ReturnType<typeof addLikeAC>
export type ChangeFollowedACType = ReturnType<typeof changeFollowedAC>
export type ChangeUnfollowACType = ReturnType<typeof changeUnfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetPaginationAC = ReturnType<typeof setPaginationAC>
export type ChangePaginationAC = ReturnType<typeof changePaginationAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export type FollowingACType = ReturnType<typeof followingAC>
