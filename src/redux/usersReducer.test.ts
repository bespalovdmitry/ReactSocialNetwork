import {changeFollowedAC, setUsersAC, UsersReducer} from './usersReducer';
import {UsersPageType} from '../types';

test('followed test', () => {
    let startState: UsersPageType = {
        usersData: [
            {
                id: '1',
                followed: true,
                fullName: 'Dmitry B',
                status: 'Im new user',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: '2',
                followed: false,
                fullName: 'Jack K',
                status: 'Hello, see my profile',
                location: {country: 'USA', city: 'New York'}
            },
            {
                id: '3',
                followed: true,
                fullName: 'Sandra B',
                status: 'Travels lovely',
                location: {country: 'Singapore', city: 'Singapore'}
            }
        ]
    }

    let endState = UsersReducer(startState, changeFollowedAC('2'))

    expect(endState.usersData.length).toBe(3)
    expect(endState.usersData[1].followed).toBe(true)
    expect(endState.usersData[0].followed).toBe(true)
})

test('set users', () => {
    let startState: UsersPageType = {
        usersData: []
    }

    let endState = UsersReducer(startState, setUsersAC([{
            id: '6',
            followed: true,
            fullName: 'Dmitry B',
            status: 'Im new user',
            location: {country: 'Russia', city: 'Moscow'}
        },
            {
                id: '7',
                followed: false,
                fullName: 'jack B',
                status: 'Im new user',
                location: {country: 'USA', city: 'New York'}
            }
        ]
    ))

    expect(endState.usersData.length).toBe(2)
    expect(endState.usersData[1].location.city).toBe('New York')
    expect(endState.usersData[0].fullName).toBe('Dmitry B')
})