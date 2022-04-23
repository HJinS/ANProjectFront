import React from "react";
import { Button, Typography } from "@mui/material";
import './header.css';
import axios, { AxiosResponse } from "axios";
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from "react-redux";
import { login, logout } from "../../modules/__reducers/userLoginState";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

function onSilentRefresh(){
    const dispatch = useDispatch();
    axios.get('/social/token/refresh')
        .then(onLoginSuccess).catch(error => {
            dispatch(logout())
            console.log(error.response)
        })
}

function onLoginSuccess(response: AxiosResponse){
    const {access_token} = response.data;
    const dispatch = useDispatch();
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
    dispatch(login());
}


function LoginButton(){
    const client_id = process.env.REACT_APP_OAUTH_CLIENT_ID
    const callback_uri = process.env.REACT_APP_OAUTH_CALLBACK_URI
    const scope = "https://www.googleapis.com/auth/userinfo.email"
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&response_type=code&redirect_uri=${callback_uri}&scope=${scope}`
    return(
        <Button className={"LoginButtonStyle"} href={url}>
            <Typography variant = 'caption' color="black">
                <GoogleIcon />
            </Typography>
        </Button>
    );
}

export default LoginButton;