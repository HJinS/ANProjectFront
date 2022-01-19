import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Grid} from '@mui/material';
import HeaderArea from './components/headerArea/header';
import ListMainArea from './components/mainArea/listMainArea';
import ProductCarousel from './components/mainArea/productCarousel';

function Router() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <div style={{height: "100vh"}}>
        <Grid container>
          <Grid item xl ={12} lg = {12} md = {12} sm = {12} xs = {12} className={"MainGridHeader"}>
            <HeaderArea/>
          </Grid>
          <Routes>
            <Route path='/' element={<ProductCarousel/>} />
            <Route path='/list' element={<ListMainArea />} />
          </Routes>
        </Grid>
      </div>
    </BrowserRouter>
  );
}
export default Router;
