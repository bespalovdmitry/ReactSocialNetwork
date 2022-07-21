import {Avatar, Card, CardContent, CardMedia, Grid, Link} from '@mui/material';
import Box from '@mui/material/Box';
import cover from '../../media/green_iguana.jpeg';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useSelector} from 'react-redux';
import {StoreType} from '../../redux/storeRedux';
import {ProfileDataType} from '../../types';
import Loader from '../Loader';


export const ProfileCard = () => {
    const profileData = useSelector<StoreType, ProfileDataType | null>(state => state.profilePage.profileData)
    return (
        <Grid item xs={4}>
            {profileData ?
                <Card>
                    <Box position={'relative'}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={cover}
                        />
                        <Avatar
                            src={profileData.photos.large}
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
                        <Grid container sx={{textAlign: 'center'}}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {profileData.fullName}
                                </Typography>
                                {profileData.lookingForAJob ?
                                    <Typography variant="h6" color="red">
                                        Looking for a job
                                    </Typography> :
                                    <Typography variant="h6" color="green">
                                        Employed
                                    </Typography>
                                }
                                <Typography variant={'body2'} color={'text.secondary'}>
                                    {profileData.lookingForAJobDescription}
                                </Typography>

                            </Grid>
                            <Grid item xs={6}>
                                {Object.entries(profileData.contacts).map((el, index) =>
                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start'
                                        }}
                                        key={`${index}${el}`}
                                        variant={'body2'}>
                                        {el[0]}:
                                        <Link
                                            href={el[1]}
                                            key={index}
                                            variant={'body2'}
                                            color={'text.secondary'}
                                            underline="hover"
                                        >{el[1]}</Link>
                                    </Typography>)}
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card> :
                <Loader/>
            }
        </Grid>
    );
};