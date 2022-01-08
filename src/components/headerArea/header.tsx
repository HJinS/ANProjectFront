import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PrimarySearchAppBar from "./headerAppBar";

const useStyles = makeStyles((theme)=> ({
    container: {
        background: theme.palette.secondary.main,
        height: "100%",
    },
}));

function HeaderArea(){
    const classes = useStyles();
    return(
        <PrimarySearchAppBar/>
    )
}

export default HeaderArea;