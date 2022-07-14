import {Avatar, Button, Card, CardContent, CardMedia, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import cover from '../../media/green_iguana.jpeg';
import Typography from '@mui/material/Typography';
import React from 'react';
import {UserType} from '../../types';
import {useDispatch} from 'react-redux';
import {changeFollowedAC, changeUnfollowAC, followingAC} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import {followAPI} from '../../api/api';

type FriendCardPropsType = {
    user: UserType
}

export const FriendCard = ({user}: FriendCardPropsType) => {
    const dispatch = useDispatch()
    // const loading = useSelector<StoreType, boolean>(state => state.usersPage.followingInProgress)
    const onClickFollow = () => {
        dispatch(followingAC(true))
        followAPI.postFollow(user.id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeFollowedAC(user.id))
                }
            })
            .then(() => {
                dispatch(followingAC(false))
            })
    }

    const onClickUnfollow = () => {
        followAPI.delFollow(user.id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeUnfollowAC(user.id))
                }
            })
    }
    return (
        <Grid item xs={4}>
            <Card>
                <NavLink to={'/profile/' + user.id}>
                    <Box position={'relative'}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={cover}
                        />
                        <Avatar
                            src={user.photos.small}
                            sx={{
                                width: 56,
                                height: 56,
                                position: 'absolute',
                                bottom: '-26px',
                                left: '60px',
                                border: '2px solid white',
                            }}/>
                    </Box>
                </NavLink>
                <CardContent sx={{pt: 4}}>
                    <Grid container sx={{textAlign: 'center', alignItems: 'center'}}>
                        <Grid item xs={4}>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 1
                                }}
                            >
                                {user.status}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography gutterBottom variant="h5" component="div">
                                Country
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                City
                            </Typography>
                            {user.id === '2'? <span>2</span> : <span>3</span>}
                        </Grid>
                        <Grid item xs={4}>
                            {!user.followed ?
                                <Button
                                    component="button"
                                    onClick={onClickFollow}
                                    variant={'contained'}
                                    color={'primary'}
                                >
                                    Follow
                                </Button>
                                 :
                                <Button
                                    component="button"
                                    onClick={onClickUnfollow}
                                    variant={'contained'}
                                    color={'secondary'}
                                >
                                    Unfollow
                                </Button>
                            }
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};