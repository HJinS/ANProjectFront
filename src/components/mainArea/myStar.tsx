import React, {Component} from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { SxProps, Theme } from "@mui/material";
import IconButton from'@mui/material/IconButton';

interface starInfo{
   sx?: SxProps,
   on: boolean,
}

function MyStar(props: starInfo) {
    return (
        <IconButton >
            {props.on ? <StarRateIcon sx={props.sx}/> : <StarBorderIcon sx={props.sx}/>}
        </IconButton>
    );
  }
  
export default MyStar;