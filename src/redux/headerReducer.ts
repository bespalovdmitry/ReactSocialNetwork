import {AuthDataType, SetUserDataACType} from '../types';

const initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}
export const HeaderReducer = (state: AuthDataType = initialState, action: SetUserDataACType): AuthDataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state, ...action.payload.userData,
                isAuth: true
            }
        default: return state
    }
};


export const setUserDataAC = (userData: AuthDataType) => {
        return {
            type: 'SET-USER-DATA',
            payload: {
                userData,
            }
        } as const
}