import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootType, UserType} from '../../types';
import {Dispatch} from 'redux';
import {changeFollowedAC, changePaginationAC, setPaginationAC, setUsersAC} from '../../redux/usersReducer';

const mapStateToProps = (state: RootType) => {
    return {
        usersData: state.usersPage.usersData,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeFollowed: (userId: string) => {
            dispatch(changeFollowedAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        pagination: (count: number) => {
            dispatch(setPaginationAC(count))
        },
        changePagination: (currentPage: number) => {
            dispatch(changePaginationAC(currentPage))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)