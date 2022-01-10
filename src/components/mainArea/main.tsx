import React, {Component} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from "./productItem";
import { Box } from "@mui/material";

const responsive = {
  largeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5,
    slidesToSlide: 3,
    partialVisibilityGutter: 100,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1440},
    items: 2,  
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: {max: 1440, min: 464},
    items: 2,
    partialVisibilityGutter: 100,
  },
  mobile:{
    breakpoint: {max: 464, min: 0},
    items: 1,
    partialVisibilityGutter: 100,
  }
}

function Main(){
  return(
    <>
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={false}
    containerClass="react-multi-carousel-list"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    renderButtonGroupOutside={true}
    renderDotsOutside={true}>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </Carousel>
    </>
    
  );
}

export default Main;