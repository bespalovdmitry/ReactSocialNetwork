import {combineReducers, legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {messageReducer} from './messageReducer';
import {StorePropsType} from '../types';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})
const store: StorePropsType = createStore(rootReducer)
export default store

