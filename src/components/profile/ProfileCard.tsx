import {Avatar, Card, CardContent, CardMedia, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import cover from "../../media/green_iguana.jpeg";
import myAvatar from "../../media/my_avatar.jpeg";
import Typography from "@mui/material/Typography";
import React from "react";

export const ProfileCard = () => {
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
                    <Grid container sx={{textAlign: 'center'}}>
                        <Grid item xs={4}>
                            <Typography gutterBottom variant="h5" component="div">
                                Henry Price
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                UI/UX Designer
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography gutterBottom variant="h5" component="div">
                                125
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                POSTS
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography gutterBottom variant="h5" component="div">
                                375
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                FRIENDS
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    );
};