import {Avatar, Button, Card, CardContent, CardMedia, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import cover from '../../media/green_iguana.jpeg';
import myAvatar from '../../media/my_avatar.jpeg';
import Typography from '@mui/material/Typography';
import React from 'react';

type FriendCardPropsType = {
    userId: string
    fullName: string
    location: {
        country: string
        city: string
    }
    followed: boolean
    status: string
    changeFollowed: (userId: string) => void
}
export const FriendCard = (props: FriendCardPropsType) => {
    const onClickFollow = () => {
      props.changeFollowed(props.userId)
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
                        src={myAvatar}
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
                                {props.fullName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.status}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.location.country}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.location.city}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                onClick={onClickFollow}
                                variant={'contained'}
                                color={props.followed ? 'secondary' : 'primary'}
                            >
                                {props.followed ? 'Unfollow' : 'Follow'}
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    );
};