import {RootActionType, UsersPageType, UserType} from '../types';

const initialState: UsersPageType  = {
    usersData: [],
    totalCount: 0,
    pageSize: 9,
    currentPage: 1,
    followingInProgress: true
}
export const UsersReducer = (state: UsersPageType = initialState, action: RootActionType): UsersPageType => {
    switch (action.type) {
        case 'CHANGE-FOLLOWED':
            return {
                ...state, usersData: state.usersData.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case 'CHANGE-UNFOLLOW':
            return {
                ...state, usersData: state.usersData.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
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
                ...state,
                // following: action.payload.isDownloading
            }
        default: return state
    }
};


export const changeFollowedAC = (userId: string) => {
    return {
        type: 'CHANGE-FOLLOWED',
        payload: {userId}
    } as const
}

export const changeUnfollowAC = (userId: string) => {
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

export const followingAC = (isDownloading: boolean) => {
    return {
            type: 'FOLLOWING-WAIT',
        payload: {isDownloading}
    } as const
}

