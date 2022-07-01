import {changeFollowedAC, setUsersAC, UsersReducer} from './usersReducer';
import {UsersPageType} from '../types';

test('followed test', () => {
    let startState: UsersPageType = {
        usersData: [
            {
                id: '1',
                followed: true,
                name: 'Dmitry B',
                status: 'Im new user',
                photos: {
                    small: '',
                    large: ''
                },
                uniqueUrlName: ''
            },
            {
                id: '2',
                followed: false,
                name: 'Jack K',
                status: 'Hello, see my profile',
                photos: {
                    small: '',
                    large: ''
                },
                uniqueUrlName: ''
            },
            {
                id: '3',
                followed: true,
                name: 'Sandra B',
                status: 'Travels lovely',
                photos: {
                    small: '',
                    large: ''
                },
                uniqueUrlName: ''
            }
        ],
        totalCount: 0,
        pageSize: 9,
        currentPage: 1
    }

    let endState = UsersReducer(startState, changeFollowedAC('2'))

    expect(endState.usersData.length).toBe(3)
    expect(endState.usersData[1].followed).toBe(true)
    expect(endState.usersData[0].followed).toBe(true)
})

test('set users', () => {
    let startState: UsersPageType = {
        usersData: [],
        totalCount: 0,
        pageSize: 9,
        currentPage: 1
    }

    let endState = UsersReducer(startState, setUsersAC([{
        id: '1',
        followed: true,
        name: 'Dmitry B',
        status: 'Im new user',
        photos: {
            small: '',
            large: ''
        },
        uniqueUrlName: ''
        },
            {
                id: '2',
                followed: true,
                name: 'Dmitry B',
                status: 'Im new user',
                photos: {
                    small: '',
                    large: ''
                },
                uniqueUrlName: ''
            }
        ]
    ))

    expect(endState.usersData.length).toBe(2)
    expect(endState.usersData[0].name).toBe('Dmitry B')
})