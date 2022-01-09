import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import ProductItem from "./productItem";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Main(){
  return(
    <>
    <Carousel next={() => {}} prev={() => {}} animation="slide" autoPlay={false}
    NextIcon={<ArrowForwardIosIcon/>} PrevIcon={<ArrowBackIosIcon/>} strictIndexing={true}>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </Carousel>
    <ProductItem/>
    </>
    
  );
}

export default Main;