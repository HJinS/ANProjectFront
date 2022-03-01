import React from "react";
import ProductListItem from "./productListItem";
import ImageList from '@mui/material/ImageList';
import './mainArea.css';
import {ProductListComponentType} from "../types/productListType";
import MyLoader from "../loader/listLoader";

function ProductList(listData: ProductListComponentType) {
  const empList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if(listData.isLoading == true){
    return(
      <ImageList cols={3} rowHeight={500} className={"ProductListStyle"}>
        {
          empList.map((item) => (
            <MyLoader key={item} />
          ))
        }
      </ImageList>  
    )
  }
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