import React, {Component, useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCarouselItem from "./productCarouselItem";
import product from "../../testDB/product.json";
import { Grid, Box } from "@mui/material";
import MyMore from "./myMoreIcon";
import {Link} from "react-router-dom";
import './mainArea.css';
import axios, { AxiosResponse } from "axios";
import { CloseOutlined } from "@mui/icons-material";
import ProductInterface from "../interfaces/productInterface";

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

function axiosMainResponse(this: any, response: AxiosResponse){
  if(response.status != 200){
    console.log("Error status = ", response.status)
  }
  this.setAmazonData(response.data)
  console.log(response.data, "data loaded")
}

function ProductCarousel(){
  const [amazonData, setAmazonData] = useState<[ProductInterface]>();
  return(
    <Grid container rowSpacing={9} sx={{height: "100%", paddingTop: "4%"}}>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <Link to='list'>
            <MyMore sx={{justifyContent: "flex-end"}}/>
          </Link>
        </Box>
        <Carousel
        className={"CarouselStyle"}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        containerClass="react-multi-carousel-list"
        dotListClass="custom-dot-list-style"
        renderButtonGroupOutside={true}
        renderDotsOutside={true}>
          {
            useEffect(()=>{
                axios.get('/api/product/main/amazon').
                then(axiosMainResponse).catch(error => {
                console.log(error.response)
              })
            })
          }
          { 
            amazonData!.map(data => (
              <ProductCarouselItem key={data.id} name={data.name} price={data.price[0].price} img_src={data.img_src} category={data.category} site={data.site}/>
            ))
          }
        </Carousel>
      </Grid>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <Link to='list'>
            <MyMore sx={{justifyContent: "flex-end"}}/>
          </Link>
        </Box>
        <Carousel
        className={"CarouselStyle"}
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
          <Link to='list'>
            <MyMore sx={{justifyContent: "flex-end"}}/>
          </Link>
        </Box>
        <Carousel
        className={"CarouselStyle"}
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