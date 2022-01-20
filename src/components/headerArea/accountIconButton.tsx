import React from "react";
import './header.css';
import { IconButton } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

interface IAccountIconButton{
    menuId: string,
}

function AccountIconButton(props: IAccountIconButton){
      return(
        <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={props.menuId}
        aria-haspopup="true"
        color="inherit"
        >
            <AccountCircle />
        </IconButton>
      );
}

export default AccountIconButton;