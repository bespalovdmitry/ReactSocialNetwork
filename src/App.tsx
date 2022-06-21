import React from 'react';
import './App.css';
import {CssBaseline} from '@mui/material';
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import Box from '@mui/material/Box';
import {StorePropsType} from './types';
import Pages from './components/Pages';

type AppPropsType = {
    store: StorePropsType
    addPost: (postMessage: string) => void
}
function App(props: AppPropsType) {

    return (
        <Box className="App" sx={{display: 'flex'}}>

            <CssBaseline/>
            <Header/>
            <SideBar/>
                <Pages
                    myPostsData={props.store._state.profilePage.myPostsData}
                    messagePage={props.store._state.messagePage}
                    addPost={props.addPost}
                />
        </Box>
    );
}

export default App;
