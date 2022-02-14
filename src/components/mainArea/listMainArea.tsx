import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css';
import MyPagination from './myPagination';
import FloatingMenu from "./floatingMenu";
import ProductList from "./productList";
import { useParams } from "react-router-dom";

function ListMainArea() {
    const listID = useParams();

    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "68%"}}>
                <Grid container>
                    <Grid item xs={4}>
                        <Box className={"FloatingMenuOuterBoxStyle"}>
                            <FloatingMenu />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <ProductList/>
                    </Grid>
                </Grid>
                <MyPagination/>
            </Box>
        </Box>
    );
  }
  
export default ListMainArea;