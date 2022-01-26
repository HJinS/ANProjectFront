import * as React from 'react';
import Box from '@mui/material/Box';
import RenderMenu from './renderMenu';
import MyAppBar from './myAppBar';
import MyDrawer from './myDrawer';
const drawerWidth = 240;

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box>
      <MyAppBar open={open} menuId={menuId} mobileMenuId={mobileMenuId}
      handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}
      handleMobileMenuOpen={handleMobileMenuOpen}/>

      <MyDrawer open={open} menuId={menuId}
      drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose}/>
      
      <RenderMenu menuId={menuId} handleMenuClose={handleMenuClose}
      isMenuOpen={isMenuOpen} anchorEl={anchorEl}/>
    </Box>
  );
}
