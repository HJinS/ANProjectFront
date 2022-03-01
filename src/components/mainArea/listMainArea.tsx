import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css';
import MyPagination from './myPagination';
import FloatingMenu from "./floatingMenu";
import ProductList from "./productList";
import { useParams } from "react-router-dom";
import {ProductListType} from "../types/productListType";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/__reducers";
import Button from '@mui/material/Button';
import { initFilter } from "../../modules/__reducers/filterState";
import useDidMountEffect from "../myHooks/myDidMountEffect";

function ListMainArea() {
    const params = useParams()
    const listId = params.listId

    const setFilter = useDispatch();
    const filter = useSelector((state: RootState) => state.filterReducer)
    const [nextUrl, setNext] = useState<string>("");
    const [previousUrl, setPrevious] = useState<string>("");
    const [uriLocation, setUri] = useState<string>("");

    const [productData, setData] = useState<ProductListType>({results: []});

    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(Number(listId) === 0){
            setUri("/api/product/list/amazon")
        }else if(Number(listId) === 1){
            setUri("/api/product/list/amazon")
        }else{
            setUri("/api/product/list/amazon")
        }
    }, [])

    const getListData = async () => {
        setLoading(true)
        await axios.get(uriLocation).then(response => {
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
            setLoading(false)
        }).catch(error => console.log(error))
    }

    const getListDataPost = async () => {
        setLoading(true)
        axios.post(uriLocation, {"filter": filter}).then(response => {
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
            setLoading(false)
        }).catch(error => console.log(error))
    }

    useDidMountEffect(() => {
        getListData()
    }, [uriLocation])

    const nextPage = async () => {
        setLoading(true)
        axios.get(nextUrl).then(response => {
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
            setLoading(false)
        }).catch(error => console.log(error))
    }

    const previousPage = async () => {
        setLoading(true)
        axios.get(previousUrl).then(response => {
            setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
            setLoading(false)
        }).catch(error => console.log(error))
    }

    const filterAction = async () => {
        if(filter.length == 0){
            getListData()
        }else{
            getListDataPost()
        }
    }

    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "68%"}}>
                <MyPagination nextPage={nextPage} previousPage={previousPage}
                isNextUrl={nextUrl === null ? false:true} isPreviousUrl={previousUrl === null ? false:true}/>
                <Grid container>
                    <Grid item xs={4}>
                        <Box className={"FloatingMenuOuterBoxStyle"}>
                            <div className="FloatingMenuInnerBoxStyle">
                                <FloatingMenu />
                                <Button variant="outlined" className="FilterButtonStyle" onClick={filterAction}>
                                    적용
                                </Button>
                            </div>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <ProductList results={productData.results} isLoading={isLoading}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
  }
  
export default ListMainArea;