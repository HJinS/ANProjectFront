import React from "react";
import ProductListItem from "./productListItem";
import ImageList from '@mui/material/ImageList';
import './mainArea.css';
import {ProductListComponentType} from "../types/productListType";


function ProductList(listData: ProductListComponentType) {
  return (
    <ImageList cols={3} rowHeight={500} className={"ProductListStyle"}>
      {
        listData.isLike === true ? listData.likeResults!.map(
          data => (
            <ProductListItem key={data.products.product_id} name={data.products.name} price={data.price[0].price}
            img_src={data.products.img_src} category={data.products.category} site={data.products.site}
            id={data.products.product_id}/>)) : listData.productResults!.map(
              data => (
                <ProductListItem key={data.id} name={data.name} price={data.price[0].price}
                img_src={data.img_src} category={data.category} site={data.site}
                id={data.id} like={data.like}/>))
      }
    </ImageList>
  );
}
  
  export default ProductList;