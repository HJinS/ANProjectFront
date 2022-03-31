import React from "react";
import { Button, Typography } from "@mui/material";
import './header.css';
import axios, { AxiosResponse } from "axios";
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from "react-redux";
import { login, logout } from "../../modules/__reducers/userLoginState";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

function requestLogin(){
    console.log("Login Button Clicked")

    axios.get('/api/social/google/login')
        .then(onLoginSuccess).catch(error => {
            console.log(error.response)
        })
}

function onSilentRefresh(){
    const dispatch = useDispatch();
    axios.get('/api/social/token/refresh')
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
      return(
        <Button className={"LoginButtonStyle"} onClick={requestLogin}>
            <Typography variant = 'caption' color="black">
                <GoogleIcon />
            </Typography>
        </Button>
      );
}

export default LoginButton;