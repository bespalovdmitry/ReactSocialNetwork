import React from 'react';
import './App.css';
import {CssBaseline} from '@mui/material';
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import Box from '@mui/material/Box';
import Pages from './components/Pages';

function App() {
    return (
        <Box className="App" sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <SideBar/>
            <Pages/>
        </Box>
    );
}

export default App;
