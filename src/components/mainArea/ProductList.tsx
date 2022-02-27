import React from "react";
import ProductListItem from "./productListItem";
import ImageList from '@mui/material/ImageList';
import './mainArea.css';
import ProductListType from "../types/productListType";
import {Link} from 'react-router-dom';

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