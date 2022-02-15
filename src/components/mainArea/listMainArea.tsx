import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css';
import MyPagination from './myPagination';
import FloatingMenu from "./floatingMenu";
import ProductList from "./productList";
import { RouteMatch, useParams } from "react-router-dom";
import ProductListType from "../types/productListType";
import axios from "axios";

const data = {
    listId: Number,
}

function ListMainArea() {
    const params = useParams()
    const listId = params.listId

    const [filterList, setFilter] = useState<string[]>([]);
    const [nextUrl, setNext] = useState<string>("");
    const [previousUrl, setPrevious] = useState<string>("");

    var uriLocation = ""

    const [productData, setData] = useState<ProductListType>({results: []})

    const addFilterItem = (filterItem: string) => {
        setFilter((list) => ([...list, filterItem]))
    }

    const deleteFilterItem = (filterItem: string) => {
        setFilter(filterList.filter(item => item !== filterItem))
    }

    useEffect(() => {
        console.log(filterList, "line = 32")
    }, [filterList])

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
        const response = await axios.get(nextUrl)
        setData(response.data)
        setNext(response.data.next)
        setPrevious(response.data.previous)
    }

    const previousPage = async () => {
        const response = await axios.get(previousUrl)
        setData(response.data)
        setNext(response.data.next)
        setPrevious(response.data.previous)
    }

    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "68%"}}>
                <MyPagination nextPage={nextPage} previousPage={previousPage}/>
                <Grid container>
                    <Grid item xs={4}>
                        <Box className={"FloatingMenuOuterBoxStyle"}>
                            <FloatingMenu addFilterItem={addFilterItem} deleteFilterItem={deleteFilterItem} />
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