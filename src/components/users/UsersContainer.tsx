import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootType, UserType} from '../../types';
import {Dispatch} from 'redux';
import {changeFollowedAC, setUsersAC} from '../../redux/usersReducer';

const mapStateToProps = (state: RootType) => {
    return {
        usersData: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeFollowed: (userId: string) => {
            dispatch(changeFollowedAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)