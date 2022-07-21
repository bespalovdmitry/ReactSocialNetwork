import {RootActionType, UsersPageType, UserType} from '../types';
import {followAPI, userAPI} from '../api/api';
// import {AppThunkType} from './storeRedux';
import {Dispatch} from 'redux';

const initialState: UsersPageType = {
    usersData: [],
    totalCount: 0,
    pageSize: 9,
    currentPage: 1,
    followingInProgress: [],
    isFetching: true
}
export const UsersReducer = (state: UsersPageType = initialState, action: RootActionType): UsersPageType => {
    switch (action.type) {
        case 'CHANGE-FOLLOWED':
            return {
                ...state,
                usersData: state.usersData.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case 'CHANGE-UNFOLLOW':
            return {
                ...state,
                usersData: state.usersData.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        case 'SET-USERS':
            return {
                ...state, usersData: action.payload.users
            }
        case 'SET-PAGINATION':
            return {
                ...state,
                totalCount: action.payload.count
            }
        case 'CHANGE-PAGINATION':
            return {
                ...state,
                currentPage: action.payload.page
            }
        case 'FOLLOWING-WAIT':
            return {
                ...state, followingInProgress: [action.payload.userId]
            }
        case 'CLEAR-FOLLOWING-ARR':
            return {
                ...state,
                followingInProgress: []
            }
        case 'SET_FETCHING':
            return {
                ...state,
                isFetching: action.payload.fetching
            }
        default:
            return state
    }
};

export const changeFollowedAC = (userId: number) => {
    return {
        type: 'CHANGE-FOLLOWED',
        payload: {userId}
    } as const
}
export const changeUnfollowAC = (userId: number) => {
    return {
        type: 'CHANGE-UNFOLLOW',
        payload: {userId}
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {users}
    } as const
}
export const setPaginationAC = (count: number) => {
    return {
        type: 'SET-PAGINATION',
        payload: {count}
    } as const
}
export const changePaginationAC = (page: number) => {
    return {
        type: 'CHANGE-PAGINATION',
        payload: {page}
    } as const
}
export const followingAC = (userId: number) => {
    return {
        type: 'FOLLOWING-WAIT',
        payload: {userId}
    } as const
}
export const clearFollowingArrAC = () => {
    return {
        type: 'CLEAR-FOLLOWING-ARR'
    } as const
}
export const setFetchingAC = (fetching: boolean) => {
    return {
        type: 'SET_FETCHING',
        payload: {fetching}
    } as const
}

export const getUsers = (currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetchingAC(true))
        userAPI.getUsers(currentPage, 9)
            .then((data) => {
                dispatch(setUsersAC(data.items))
                dispatch(setPaginationAC(data.totalCount))
                dispatch(setFetchingAC(false))
            })
            .catch((error) => {
                console.warn(error)
            })
    }
}

export const follow = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetchingAC(true))
        dispatch(followingAC(userID))
        followAPI.postFollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeFollowedAC(userID))
                }
            })
            .then(() => {
                dispatch(clearFollowingArrAC())
                dispatch(setFetchingAC(false))
            })
    }
}

export const unfollow = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetchingAC(true))
        dispatch(followingAC(userID))
        followAPI.delFollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeUnfollowAC(userID))
                }
            })
            .then(() => {
                dispatch(clearFollowingArrAC())
                dispatch(setFetchingAC(false))
            })
    }
}