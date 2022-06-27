import {combineReducers, legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {messageReducer} from './messageReducer';
import {UsersReducer} from './usersReducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: UsersReducer
})
const store = createStore(rootReducer)
export default store

