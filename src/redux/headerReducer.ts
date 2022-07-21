import {AuthDataType, SetUserDataACType} from '../types';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

const initialState = {
    data: {
        id: null,
        email: '',
        login: '',
    },
    messages: [],
    fieldsErrors: [],
    resultCode: null,
    isAuth: false,
}
export const HeaderReducer = (state: AuthDataType = initialState, action: SetUserDataACType): AuthDataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state, ...action.payload.userData,
                isAuth: true
            }
        default:
            return state
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

export const getAuthProfile = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then((res) => {
                if (res.resultCode === 0) {
                    dispatch(setUserDataAC(res))
                }
            })
    }

}