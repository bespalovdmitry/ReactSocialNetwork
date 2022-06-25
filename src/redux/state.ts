import {RootType, StorePropsType} from '../types';
import {v1} from 'uuid';
import Steven from '../media/Steven_Franklin.jpg';
import Adam from '../media/Adam_Miller.jpg';
import Mitchel from '../media/Mitchel_Givens.jpg';
import Stephan from '../media/Stephen_Hadley.jpg';

export const store: StorePropsType = {
    _state: {
        profilePage: {
            myPostsData: [
                {id: v1(), postMessage: 'Hello my friends!', like: 45},
                {id: v1(), postMessage: 'This is my first post', like: 32},
            ],
            newPostText: ''
        },
        messagePage: {
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
    },
    getState() {return this._state},
    _callSubscriber(state: RootType) {},
    subscribe(observer){this._callSubscriber = observer},
    dispatch(action){
        if (action.type === 'ADD-POST') {
            this._state.profilePage.myPostsData.push({id: v1(), postMessage: action.postMessage, like: 0})
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            this._state.messagePage.myMessageData.push({id: v1(), friendName: 'Steven Franklin', message: action.newMessage, time: `${new Date().getHours()}:${new Date().getMinutes()}`})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = (postMessage: string) => {
  return {
      type: 'ADD-POST',
      postMessage: postMessage
  } as const
}

export const addMessageAC = (newMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessage: newMessage
    } as const
}
// @ts-ignore
window.store = store