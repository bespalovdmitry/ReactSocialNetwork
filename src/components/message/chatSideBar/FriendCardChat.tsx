import {Avatar, ListItemButton, styled} from '@mui/material';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography';
import React from 'react';
import {FriendType} from '../../../types';

const StyledListItem = styled(ListItemButton)`
  &:hover {
    background-color: white;
    border-radius: 5px;
  }
`
type FriendCardChatType = {
    friend: FriendType
}
export const FriendCardChat = ({friend}: FriendCardChatType) => {
    return (
        <Link to={friend.id} style={{textDecoration: 'none'}}>
            <StyledListItem divider>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                     sx={{width: '100%'}}>
                    <FiberManualRecordIcon fontSize={'small'} sx={{color: `${friend.statusColor}`}}/>
                    <Avatar src={friend.avatar}/>
                    <Box>
                        <Typography variant={'h6'} sx={{color: '#1976D2'}}>{friend.friendName}</Typography>
                        <Typography sx={{color: '#74788D'}}>{friend.lastMessage}</Typography>
                    </Box>
                    <Typography sx={{
                        display: 'flex',
                        alignSelf: 'start',
                        fontSize: '12px',
                        color: '#74788D',
                    }}>{friend.lastMessageTime}</Typography>
                </Box>
            </StyledListItem>
        </Link>
    );
};