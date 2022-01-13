import React, {Component} from "react";
import ProductListlItem from "./productListItem";
import product from "../../testDB/product.json";
import { Box } from "@mui/material";

function ProductList() {
    const tmp = product.products.at(0)
    return (
      <Box sx={{marginLeft: "30px", marginTop: "30px"}}>
          {tmp ? <ProductListlItem name={tmp.name} price={tmp.price} img_src={tmp.img_src} category={tmp.catgegory} site={tmp.site}/> : <Box/>}
      </Box>
    );
  }
  
  export default ProductList;