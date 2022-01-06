import React, {Component} from "react";
import {Container, Typography, Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import HeaderArea from "./headerArea/header";
import MainSub from "./mainArea/main";

const useStyles = makeStyles((theme)=> ({
    gridContainer:{
        height: "100%",
    },

    gridHeader:{
        height: "6vh",
        background: theme.palette.common.black,
    },
    gridMain:{
        height: "94vh",
        background: theme.palette.secondary.dark,
    },
}));

function MainPage(){
    const classes = useStyles();
    return(
        <Grid container spacing={1} className= {classes.gridContainer}>
            <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={classes.gridHeader}>
                <HeaderArea/>
            </Grid>
            <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={classes.gridMain}>
                <MainSub/>
            </Grid>
        </Grid>
        
    )
}

export default MainPage;