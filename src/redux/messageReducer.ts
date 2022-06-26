import {MessagePageType, RootActionType} from '../types';
import {v1} from 'uuid';


export const messageReducer = (state: MessagePageType, action: RootActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return state.myMessageData.push({
                id: v1(),
                friendName: 'Steven Franklin',
                message: action.newMessage,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            })
        default:
            return state
    }
}

export const addMessageAC = (newMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessage: newMessage
    } as const
}