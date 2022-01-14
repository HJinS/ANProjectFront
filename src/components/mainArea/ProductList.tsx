import React, {Component} from "react";
import ProductListItem from "./productListItem";
import product from "../../testDB/product.json";
import ImageList from '@mui/material/ImageList';
import './mainArea.css';

function ProductList() {
    return (
      <ImageList cols={3} rowHeight={500} className={"ProductListStyle"}>
        {product.products.map((productItem) => (
          <ProductListItem name={productItem.name} price={productItem.price} img_src={productItem.img_src}
          category={productItem.category} site={productItem.site} />
        ))}
      </ImageList>
    );
  }
  
  export default ProductList;