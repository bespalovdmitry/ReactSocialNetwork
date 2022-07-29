import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {addPostAC} from "../../../redux/profileReducer";
import {Button, TextField} from "@mui/material";
import React from "react";

export const SendPostForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {postMessage: ''},
        onSubmit: (values) => {
            dispatch(addPostAC(String(values.postMessage)))
            values.postMessage = ''
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} style={{display: "flex", alignItems: "flex-end"}}>
            <TextField
                fullWidth
                id="postMessage"
                name="postMessage"
                value={formik.values.postMessage}
                onChange={formik.handleChange}
                variant={'standard'}
                label={'Add post...'}
            />
            <Button
                variant={'contained'}
                sx={{ml: 1, alignItems: 'flex-end'}}
                type="submit"
            >
                POST
            </Button>
        </form>
    )
}