import * as React from 'react';
import Box from '@mui/material/Box';
import MyAppBar from './myAppBar';

export default function PrimarySearchAppBar() {

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box>
      <MyAppBar menuId={menuId} mobileMenuId={mobileMenuId}/>
    </Box>
  );
}
