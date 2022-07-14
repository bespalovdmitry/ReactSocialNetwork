import {combineReducers, legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {messageReducer} from './messageReducer';
import {UsersReducer} from './usersReducer';
import {HeaderReducer} from './headerReducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: UsersReducer,
    auth: HeaderReducer
})
export type StoreType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)
export default store

// @ts-ignore
window.store = store