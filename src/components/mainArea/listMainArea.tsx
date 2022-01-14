import React, {Component} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css'
import ProductList from './productList';

function ListMainArea() {
    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "65%"}}>
                <Grid container>
                    <Grid item xs={4}>
                        {"filter area"}
                    </Grid>
                    <Grid item xs={8}>
                        <ProductList/>
                    </Grid>
                </Grid>
            </Box>
            
        </Box>
    );
  }
  
export default ListMainArea;