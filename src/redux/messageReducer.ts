import {MessagePageType, RootActionType} from '../types';
import {v1} from 'uuid';
import Steven from '../media/Steven_Franklin.jpg';
import Adam from '../media/Adam_Miller.jpg';
import Mitchel from '../media/Mitchel_Givens.jpg';
import Stephan from '../media/Stephen_Hadley.jpg';

const initialState: MessagePageType = {
    friendsData: [
        {
            id: v1(),
            friendName: 'Steven Frank',
            lastMessage: 'Hey, how are you?',
            lastMessageTime: '19 min ago',
            avatar: Steven,
            statusColor: '#33C38F',
        },
        {
            id: v1(),
            friendName: 'Adam Miller',
            lastMessage: 'Nice to meet you',
            lastMessageTime: '34 min ago',
            avatar: Adam,
            statusColor: '#74788D',
        },
        {
            id: v1(),
            friendName: 'Mitchel Givens',
            lastMessage: 'See you so...?',
            lastMessageTime: '1 hrs ago',
            avatar: Mitchel,
            statusColor: '#33C38F',
        },
        {
            id: v1(),
            friendName: 'Stephan Jang',
            lastMessage: 'I\'m available',
            lastMessageTime: '3 hrs ago',
            avatar: Stephan,
            statusColor: '#F1B34C',
        }
    ],
    friendMessageData: [
        {id: v1(), friendName: 'Steven Franklin', message: 'Hello, how are you?', time: '11:13'},
        {id: v1(), friendName: 'Steven Franklin', message: 'We can meet tomorrow?', time: '17:32'},
        {id: v1(), friendName: 'Steven Franklin', message: 'Okay?', time: '19:42'},
    ],
    myMessageData: [
        {id: v1(), friendName: 'Steven Franklin', message: 'Hello, how are you?', time: '11:13'},
    ]
}

export const messageReducer = (state: MessagePageType = initialState, action: RootActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {...state, myMessageData: [...state.myMessageData, {
                        id: v1(),
                        friendName: 'Steven Franklin',
                        message: action.newMessage,
                        time: `${new Date().getHours()}:${new Date().getMinutes()}`
                    }]}
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