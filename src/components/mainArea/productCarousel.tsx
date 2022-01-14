import React, {Component} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCarouselItem from "./productCarouselItem";
import product from "../../testDB/product.json";
import { Grid, Box } from "@mui/material";
import MyMore from "./myMoreIcon";

const responsive = {
  largeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5,
    slidesToSlide: 3,
    partialVisibilityGutter: 100,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1080},
    items: 4,  
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: {max: 1080, min: 464},
    items: 2,
    partialVisibilityGutter: 100,
  },
  mobile:{
    breakpoint: {max: 464, min: 0},
    items: 1,
    partialVisibilityGutter: 100,
  }
}

function ProductCarousel(){
  return(
    <Grid container rowSpacing={9} sx={{height: "100%", paddingTop: "2%"}}>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <MyMore sx={{justifyContent: "flex-end"}}/>
        </Box>
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
              <ProductCarouselItem key={product_item.product_id} name={product_item.name} price={product_item.price} img_src={product_item.img_src} category={product_item.category} site={product_item.site}/>
            ))
          }
        </Carousel>
      </Grid>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <MyMore sx={{justifyContent: "flex-end"}}/>
        </Box>
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
              <ProductCarouselItem key={product_item.product_id} name={product_item.name} price={product_item.price} img_src={product_item.img_src} category={product_item.category} site={product_item.site}/>
            ))
          }
        </Carousel>
      </Grid>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <MyMore sx={{justifyContent: "flex-end"}}/>
        </Box>
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
              <ProductCarouselItem key={product_item.product_id} name={product_item.name} price={product_item.price} img_src={product_item.img_src} category={product_item.category} site={product_item.site}/>
            ))
          }
        </Carousel>
      </Grid>
    </Grid>
    
  );
}

export default ProductCarousel;