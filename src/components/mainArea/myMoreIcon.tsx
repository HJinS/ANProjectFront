import React, {Component} from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SxProps } from "@mui/material";
import IconButton from'@mui/material/IconButton';

interface IMyMoreIcon{
    sx?: SxProps,
}

function MyMoreIcon(props: IMyMoreIcon) {
    return (
        <IconButton>
            <MoreHorizIcon sx={props.sx}/>
        </IconButton>
    );
  }
  
export default MyMoreIcon;