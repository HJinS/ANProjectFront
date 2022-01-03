import React, {Component} from "react";
import {Container, Typography, Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LogoArea from "./homeLogo/logoArea";
import InfoArea from "./info/infoArea";

const useStyles = makeStyles((theme)=> ({
    container: {
        background: theme.palette.warning.main,
    },
}));

function HeaderArea(){
    const classes = useStyles();
    return(
        <Box>
            <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={1}>
                    <Grid item xl ={3} lg = {3} md = {3} sm = {3} xs = {3}>
                        <LogoArea/>
                    </Grid>
                    <Grid item xl ={5} lg = {5} md = {5} sm = {5} xs = {5}>
                        search
                    </Grid>
                    <Grid item xl ={4} lg = {4} md = {4} sm = {4} xs = {4}>
                        <InfoArea/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
    )
}

export default HeaderArea;