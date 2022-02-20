import React, {Component, useEffect, useState} from "react";
import { Grid, Box, Typography } from "@mui/material";
import './mainArea.css'
import MyPriceGraph from "./myPriceGraph";
import ProductType from "../types/productType";
import axios from "axios";
import DetailITem from "./detailItem";
import { useParams } from "react-router-dom";

function DetailMainArea() {
  const params = useParams()
  const product_id = params.product_id
  const [detailData, setDetailData] = useState<ProductType|undefined>()
  const [category, setCategory] = useState("")
  const [siteInfo, setSite] = useState("")
  useEffect(() => {
    const getDetailData = async () => {
      const response = await axios.post("/api/product/detail", {"product_id": product_id})
      setDetailData(response.data)        
    }
    getDetailData()
  }, [])

  useEffect(() => {
    detailData === undefined ? null : setCategory(detailData.category)
    detailData === undefined ? null : detailData.site === 1 ? setSite("Newegg") : setSite("Amazon")
  }, [detailData])

  return (
      <Box className={"DetailMainStyle"}>
        <Box className="DetailTypoBox">
          <Typography variant="h5" color="text.secondary">
            {category.toUpperCase()}
          </Typography>
          <Box />
          <Typography variant="h5" color="text.secondary">
            {siteInfo.toUpperCase()}
          </Typography>
        </Box>
        <Box className={"DetailMainContentArea"}>
          <Box className={"DetailMainGraphArea"}>
            {
              detailData === undefined ? <></> :
              <MyPriceGraph data={detailData}/>
            }
          </Box>
          <Box className={"DetailMainInfoArea"}>
              {
                detailData === undefined ? null : <DetailITem name={detailData.name} img_src={detailData.img_src} category={detailData.category} site={detailData.site} like={detailData.like} />
              }
          </Box>
        </Box>
        <Box sx={{flexBasis: "20%", order:3}}/>
      </Box>
  );
}
export default DetailMainArea;