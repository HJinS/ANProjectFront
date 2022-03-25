import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Search from './search/search';
import SearchIconWrapper from './search/searchIcon';
import StyledInputBase from './search/input';
import AppBar from './appBar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { RootState } from "../../modules/__reducers/reducer_setting";
import LoginButton from './loginButton';
import AccountIconButton from './accountIconButton';
import { Link } from "react-router-dom";
import "./header.css";

interface ImyAppBar{
    menuId: string,
    mobileMenuId: string,
};


function MyAppBar(props: ImyAppBar){
    const login = useSelector((state: RootState) => state.userLoginReducer.userLogin);

    return(
        <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                <Link to="/" className="LinkStyle">
                    home
                </Link>
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
                    {login === false ? <LoginButton/> : <AccountIconButton menuId={props.menuId}/>}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;