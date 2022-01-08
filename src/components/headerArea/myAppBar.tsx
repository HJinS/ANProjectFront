import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Search from './search/search';
import SearchIconWrapper from './search/searchIcon';
import StyledInputBase from './search/input';
import AppBar from './appBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

interface ImyAppBar{
    open: boolean,
    menuId: string,
    mobileMenuId: string,
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void,
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void,
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void,
};


function MyAppBar(props: ImyAppBar){
    const open = props.open;

    return(
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    logo
                </Typography>
                <Box sx={{ flexGrow: 1 }}/>
                <Search style={{flexGrow: 0.35}}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search'}}
                    />
                </Search>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={props.menuId}
                    aria-haspopup="true"
                    onClick={props.handleProfileMenuOpen}
                    color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;