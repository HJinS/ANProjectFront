import React, {Component} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css'
import ProductList from './productList';
import MyPagination from './myPagination';
import FloatingMenu from "./floatingMenu";

function ListMainArea() {
    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "65%"}}>
                <Grid container>
                    <Grid item xs={4}>
                        <Box className={"FloatingMenuOuterBoxStyle"}>
                            <FloatingMenu/>
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