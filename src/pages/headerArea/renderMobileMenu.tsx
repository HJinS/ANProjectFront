import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface IrenderMobileMenu{
    mobileMenuId: string,
    isMenuOpen: boolean,
    mobileMoreAnchorEl: HTMLElement|null,
    isMobileMenuOpen: boolean,
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void,
    handleMobileMenuClose: (event: React.MouseEvent<HTMLElement>) => void,
};

function RenderMobileMenu(props: IrenderMobileMenu){
    return(
        <Menu
        anchorEl={props.mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={props.mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={props.isMobileMenuOpen}
        onClose={props.handleMobileMenuClose}
        >
            <MenuItem onClick={props.handleProfileMenuOpen}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
}

export default RenderMobileMenu;