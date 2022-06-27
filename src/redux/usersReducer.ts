import {RootActionType, UsersPageType, UserType} from '../types';

const initialState: UsersPageType  = {
    usersData: []
}
export const UsersReducer = (state: UsersPageType = initialState, action: RootActionType) => {
    switch (action.type) {
        case 'CHANGE-FOLLOWED':
            return {
                ...state, usersData: state.usersData.map(el => el.id === action.payload.userId ? {...el, followed: !el.followed} : el)
            }
        case 'SET-USERS':
            return {
                ...state,
                usersData: [...state.usersData, ...action.payload.users]
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

export const setUsersAC = (users: Array<UserType>) => {
  return {
      type: 'SET-USERS',
      payload: {users}
  } as const
}