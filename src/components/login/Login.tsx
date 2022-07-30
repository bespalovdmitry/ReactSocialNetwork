import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useFormik} from 'formik';
import {Button, TextField} from '@mui/material';
import {setLogin} from '../../redux/headerReducer';
import {useAppDispatch} from '../../redux/storeRedux';

export const Login = () => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Typography variant={'h1'}>LOGIN</Typography>
            <LoginForm />
        </Box>
    );
};

const LoginForm = () => {
    const dispatch = useAppDispatch()
    const loginForm = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: values => dispatch(setLogin(values.login, values.password))
    })
    return (
        <form onSubmit={loginForm.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
            <TextField
                id={'login'}
                name={'login'}
                onChange={loginForm.handleChange}
                value={loginForm.values.login}
                variant={'standard'}
                label={'Enter login'}
            />
            <TextField
                id={'password'}
                name={'password'}
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                variant={'standard'}
                label={'Enter password'}
                type={'password'}
            />
            <Button
                type={'submit'}
                variant={'contained'}
            >
                Login
            </Button>
        </form>
    )
}