import React, {Component} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from "./productItem";
import product from "../../testDB/product.json";
import { Grid } from "@mui/material";

const responsive = {
  largeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5,
    slidesToSlide: 3,
    partialVisibilityGutter: 100,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1440},
    items: 4,  
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
    <Grid container rowSpacing={20}>
      <Grid item xl={12}>
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
          {
            product.products.map(product_item => (
              <ProductItem key={product_item.product_id} name={product_item.name} price={product_item.price} img_src={product_item.img_src} category={product_item.catgegory} site={product_item.site}/>
            ))
          }
        </Carousel>
      </Grid>
      <Grid item xl={12}>
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
          {
            product.products.map(product_item => (
              <ProductItem key={product_item.product_id} name={product_item.name} price={product_item.price} img_src={product_item.img_src} category={product_item.catgegory} site={product_item.site}/>
            ))
          }
        </Carousel>
      </Grid>
      <Grid item xl={12}>
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
          {
            product.products.map(product_item => (
              <ProductItem key={product_item.product_id} name={product_item.name} price={product_item.price} img_src={product_item.img_src} category={product_item.catgegory} site={product_item.site}/>
            ))
          }
        </Carousel>
      </Grid>
    </Grid>
    
  );
}

export default Main;