import React, {Component} from "react";
import {Container, Typography, Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
    container: {
        //sbackground: theme.palette.primary.light,
        height: "100%",
    },
}));

function MainSub(){
    const classes = useStyles();
    return(
        <Grid container spacing={1} className={classes.container}>
            <Grid item xl ={2} lg = {2} md = {2} sm = {2} xs = {2} style = {{backgroundColor:"green"}}>
                mainLeft
            </Grid>
            <Grid item xl ={9} lg = {9} md = {9} sm = {9} xs = {9}>
                mainRight
            </Grid>
        </Grid>
    )
}

export default MainSub;