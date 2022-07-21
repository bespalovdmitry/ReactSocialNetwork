import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {messageReducer} from './messageReducer';
import {UsersReducer} from './usersReducer';
import {HeaderReducer} from './headerReducer';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from 'react-redux';
import {RootActionType} from '../types';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: UsersReducer,
    auth: HeaderReducer
})
export type StoreType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType , unknown, RootActionType>

type DispatchType = ThunkDispatch<StoreType, void, RootActionType>
export const useAppDispatch = () => useDispatch<DispatchType>()

export default store

// @ts-ignore
window.store = store