import {Avatar, Button, Card, CardContent, CardMedia, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import cover from '../../media/green_iguana.jpeg';
import Typography from '@mui/material/Typography';
import React from 'react';
import {UserType} from '../../types';
import {useDispatch} from 'react-redux';
import {changeFollowedAC} from '../../redux/usersReducer';

type FriendCardPropsType = {
    user: UserType
}
export const FriendCard = ({user}: FriendCardPropsType) => {
    const dispatch = useDispatch()
    const onClickFollow = () => {
        dispatch(changeFollowedAC(user.id))
    }
    return (
        <Grid item xs={4}>
            <Card>
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
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                onClick={onClickFollow}
                                variant={'contained'}
                                color={user.followed ? 'secondary' : 'primary'}
                            >
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    );
};