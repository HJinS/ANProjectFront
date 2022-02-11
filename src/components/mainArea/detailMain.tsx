import React, {Component} from "react";
import { Grid, Box, Typography } from "@mui/material";
import './mainArea.css'
import MyPriceGraph from "./myPriceGraph";

function DetailMainArea() {
    return (
        <Box className={"DetailMainStyle"}>
            <Box sx={{flexBasis: "20%", order: 1}}/>
            <Box className={"DetailMainContentArea"}>
              <Box className={"DetailMainGraphArea"}>
                <MyPriceGraph />
              </Box>
              <Box className={"DetailMainInfoArea"}>
                <Typography variant="subtitle1">
                  {"Name of Product abcdof ddddddddddddddddddddddddoijf sdasdfsadfasudifjsaodfjosiadjfoisjfioasjfoijoafj odpifj"}
                </Typography>
              </Box>
            </Box>
            <Box sx={{flexBasis: "20%", order:3}}/>
        </Box>
    );
  }
  
export default DetailMainArea;