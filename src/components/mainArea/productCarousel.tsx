import React, {Component, useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCarouselItem from "./productCarouselItem";
import { Grid, Box } from "@mui/material";
import MyMore from "./myMoreIcon";
import {Link} from "react-router-dom";
import './mainArea.css';
import axios from "axios";
import ProductType from "../types/productType";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/__reducers/reducer_setting";
import MyCarouselItemLoader from "../loader/carouselLoader";
import LikeProductType from "../types/likeProductType";

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
  const [amazonData, setAmazonData] = useState<ProductType[]>([]);
  const [neweggData, setNeweggData] = useState<ProductType[]>([]);
  const [likeData, setLikeData] = useState<LikeProductType[]>([]);
  const login = useSelector((state: RootState) => state.userLoginReducer.userLogin);
  const [isLoading, setLoading] = useState<boolean>(false);
  const emptyList = [1, 2, 3, 4, 5, 6, 7];

  useEffect(()=>{
    const getMainData = async () => {
      setLoading(true)
      const amazonResponse = await axios.get('/api/product/main/amazon')
      setAmazonData(amazonResponse.data)
      const neweggResponse = await axios.get('/api/product/main/newegg')
      setNeweggData(neweggResponse.data)
      if(login){
        const likeResponse = await axios.get('/api/product/main/like')
        setLikeData(likeResponse.data)
      }
      setLoading(false)
    }
    getMainData()
  }, [])

  return(
    <Grid container rowSpacing={9} sx={{height: "100%", paddingTop: "4%"}}>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <Link to='list/0'>
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
            isLoading == true ? emptyList.map(data => (
              <MyCarouselItemLoader key={data}/>
            )) : amazonData.map(data => (
              <ProductCarouselItem key={data.id} name={data.name} price={data.price[0].price} img_src={data.img_src} category={data.category} site={data.site} id={data.id} like={data.like}/>
            ))
          }
        </Carousel>
      </Grid>
      <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <Link to='list/1'>
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
            isLoading == true ? emptyList.map(data => (
              <MyCarouselItemLoader key={data}/>
            )) : neweggData.map(data => (
              <ProductCarouselItem key={data.id} name={data.name} price={data.price[0].price} img_src={data.img_src} category={data.category} site={data.site} id={data.id} like={data.like}/>
            ))
          }
        </Carousel>
      </Grid>

      {
        login === false ? null : 
        <Grid item xl={12}>
        <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
          <Box sx={{justifyContent: "flex-start", width:"98%"}}/>
          <Link to='list/2'>
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
            isLoading == true ? emptyList.map(data => (
              <MyCarouselItemLoader key={data}/>
            )) : likeData.map(data => (
              <ProductCarouselItem key={data.products.product_id} name={data.products.name} price={data.price[0].price} img_src={data.products.img_src} category={data.products.category} site={data.products.site} id={data.products.product_id}/>
            ))
          }
        </Carousel>
      </Grid>
      }
    </Grid>
    
  );
}

export default ProductCarousel;