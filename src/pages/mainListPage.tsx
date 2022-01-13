import React, {Component} from "react";
import {Grid, Box} from "@material-ui/core";
import HeaderArea from "../components/headerArea/header";
import './mainPage.css'
import ProductList from "../components/mainArea/ProductList";

function MainListPage(){
    return(
        <Grid container spacing={1} className= {"MainGridContainer"}>
            <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={"MainGridHeader"}>
                <HeaderArea/>
            </Grid>
            <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={"MainGridMain"}>
                <ProductList/>
            </Grid>
        </Grid>
    )
}

export default MainListPage;