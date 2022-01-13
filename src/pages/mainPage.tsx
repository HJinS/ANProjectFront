import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import HeaderArea from "../components/headerArea/header";
import ProductCarousel from "../components/mainArea/productCarousel";
import './mainPage.css'

function MainPage(){
    return(
        <Grid container spacing={1} className= {"MainGridContainer"}>
            <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={"MainGridHeader"}>
                <HeaderArea/>
            </Grid>
            <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={"MainGridMain"}>
                <ProductCarousel/>  
            </Grid>
        </Grid>
        
    )
}

export default MainPage;