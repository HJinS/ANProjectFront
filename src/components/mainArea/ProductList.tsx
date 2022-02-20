import React, {Component, useEffect, useState} from "react";
import ProductListItem from "./productListItem";
import product from "../../testDB/product.json";
import ImageList from '@mui/material/ImageList';
import './mainArea.css';
import ProductListType from "../types/productListType";


function ProductList(listData: ProductListType) {

  return (
    <ImageList cols={3} rowHeight={500} className={"ProductListStyle"}>
      {listData.results.map((data) => (
        <ProductListItem key={data.id} name={data.name} price={data.price[0].price} img_src={data.img_src}
        category={data.category} site={data.site} id={data.id}/>
      ))}
    </ImageList>
  );
}
  
  export default ProductList;