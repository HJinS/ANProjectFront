import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Grid} from '@mui/material';
import HeaderArea from './components/headerArea/header';
import ListMainArea from './components/mainArea/listMainArea';
import ProductCarousel from './components/mainArea/productCarousel';
import DetailMainArea from './components/mainArea/detailMain';

function Router() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <div style={{height: '100vh'}}>
        <Grid container sx={{height: '100%', width: '100%'}}>
          <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} sx={{height: '2%'}}>
            <HeaderArea/>
          </Grid>
          <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} sx={{height: '98%'}}>
            <Routes>
              <Route path='/' element={<ProductCarousel/>} />
              <Route path='/list' element={<ListMainArea />} />
              <Route path='/detail' element={<DetailMainArea />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
}
export default Router;
