import React from 'react'
import s from './error404.module.css'
import Toolbar from '@mui/material/Toolbar';
import {Box} from '@mui/material';

function Error404() {
    return (
        <Box component="main" sx={{flexGrow: 4}}>
            <Toolbar/>
            <div className={s.fof}>
                <h1>Error 404</h1>
            </div>
        </Box>
    )
}

export default Error404