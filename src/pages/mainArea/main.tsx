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
        <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={1}>
                <Grid item xl ={3} lg = {3} md = {3} sm = {3} xs = {3}>
                    mainLeft
                </Grid>
                <Grid item xl ={9} lg = {9} md = {9} sm = {9} xs = {9}>
                    mainRight
                </Grid>
            </Grid>
        </Container>
        
    )
}

export default MainSub;