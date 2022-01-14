import React, {Component} from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { SxProps, Theme } from "@mui/material";
import IconButton from'@mui/material/IconButton';
import './mainArea.css';

interface starInfo{
   sx?: SxProps,
   on: boolean,
}

function MyStar(props: starInfo) {
    return (
        <IconButton className={"MyCustomButton"}>
            {props.on ? <StarRateIcon className={"MyStarIcon"}/> : <StarBorderIcon className={"MyStarIcon"}/>}
        </IconButton>
    );
  }
  
export default MyStar;