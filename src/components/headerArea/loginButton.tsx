import React from "react";
import { Button, Typography } from "@mui/material";
import './header.css';
import axios, { AxiosResponse } from "axios";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

function requestLogin(){
    console.log("Login Button Clicked")

    axios.get('/api/social/google/login')
        .then(onLoginSuccess).catch(error => {
            console.log(error.response)
        })
}

function onSilentRefresh(){
    axios.get('/api/social/token/refresh')
        .then(onLoginSuccess).catch(error => {
            console.log(error.response)
        })
}

function onLoginSuccess(response: AxiosResponse){
    const {access_token} = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
}


function LoginButton(){
      return(
        <Button className={"LoginButtonStyle"} onClick={requestLogin}>
            <Typography variant = 'caption' color="black">
                {"Log in"}
            </Typography>
        </Button>
      );
}

export default LoginButton;