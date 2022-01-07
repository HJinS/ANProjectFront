import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

interface IrenderMenu{
    menuId: string,
    handleMenuClose: () => void,
    isMenuOpen: boolean,
    anchorEl: HTMLElement|null,
};


function RenderMenu(props: IrenderMenu){
      return(
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            id={props.menuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={props.isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
        </Menu>
      );
}

export default RenderMenu;