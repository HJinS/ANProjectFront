import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css';
import MyPagination from './myPagination';
import FloatingMenu from "./floatingMenu";
import ProductList from "./productList";
import { RouteMatch, useParams } from "react-router-dom";
import ProductListType from "../types/productListType";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/__reducers";

function ListMainArea() {
    const params = useParams()
    const listId = params.listId

    const filter = useSelector((state: RootState) => state.filterReducer)
    const [nextUrl, setNext] = useState<string>("");
    const [previousUrl, setPrevious] = useState<string>("");

    var uriLocation = ""

    const [productData, setData] = useState<ProductListType>({results: []})

    useEffect(() => {
        if(Number(listId) === 0){
            uriLocation = "/api/product/list/amazon"
        }else if(Number(listId) === 1){
            uriLocation = "/api/product/list/newegg"
        }else{
            uriLocation = "/api/product/list/like"
        }

        const getListData = async () => {
            console.log(uriLocation)
            const response = await axios.get(uriLocation)
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
        }
        getListData()}, [])

    const nextPage = async () => {
        axios.get(nextUrl).then(response => {
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
        }).catch(error => console.log(error))
    }

    const previousPage = async () => {
        axios.get(previousUrl).then(response => {
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
        }).catch(error => console.log(error))
    }

    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "68%"}}>
                <MyPagination nextPage={nextPage} previousPage={previousPage}
                isNextUrl={nextUrl === null ? false:true} isPreviousUrl={previousUrl === null ? false:true}/>
                <Grid container>
                    <Grid item xs={4}>
                        <Box className={"FloatingMenuOuterBoxStyle"}>
                            <FloatingMenu />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <ProductList results={productData.results}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
  }
  
export default ListMainArea;