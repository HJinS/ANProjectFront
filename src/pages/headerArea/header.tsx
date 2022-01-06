import React, {Component} from "react";
import {Grid} from "@material-ui/core";
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
        <Grid container spacing={1} className={classes.container}>
            <PrimarySearchAppBar/>
        </Grid>
    )
}

export default HeaderArea;