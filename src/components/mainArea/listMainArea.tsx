import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css';
import MyPagination from './myPagination';
import FloatingMenu from "./floatingMenu";
import ProductList from "./productList";
import { useParams } from "react-router-dom";
import {LikeListType, ProductListType} from "../types/productListType";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/__reducers/reducer_setting";
import Button from '@mui/material/Button';
import useDidMountEffect from "../myHooks/myDidMountEffect";
import ImageList from '@mui/material/ImageList';
import MyLoader from "../loader/listLoader";

function ListMainArea() {
    const params = useParams()
    const listId = params.listId

    const filter = useSelector((state: RootState) => state.filterReducer)
    const [nextUrl, setNext] = useState<string>("");
    const [previousUrl, setPrevious] = useState<string>("");
    const [uriLocation, setUri] = useState<string>("");

    const [productData, setData] = useState<ProductListType>({results: []});
    const [likeData, setLikeData] = useState<LikeListType>({results: []});

    const [isLoading, setLoading] = useState<boolean>(false);
    const [empList, setList] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12]);

    useEffect(() => {
        let isMounted = true
        if(isMounted){
            if(Number(listId) === 0){
                setUri("/api/product/list/amazon")
            }else if(Number(listId) === 1){
                setUri("/api/product/list/newegg")
            }else{
                setUri("/api/product/list/like")
            }
        }
        return ()=>{
            isMounted = false
            console.log("likeData", likeData)
            console.log("productData", productData)
        }
    }, [])

    const getListData = async () => {
        const response = await axios.get(uriLocation)
        console.log(response.data)
        if(response.data.results.length !== 0){
            Number(listId) === 2 ? setLikeData(response.data) : setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
        }
    }

    const getListDataPost = async () => {
        setLoading(true)
        axios.post(uriLocation, {"filter": filter}).then(response => {
            if(response.data.results.length !== 0){
                Number(listId) === 2 ? setLikeData(response.data) : setData(response.data)
                setNext(response.data.next)
                setPrevious(response.data.previous)
            }
        }).catch(error => console.log(error))
    }

    useDidMountEffect(() => {
        let isMounted = true
        if(isMounted){
            getListData()
        }
        return ()=>{
            isMounted = false
        }
    }, [uriLocation])

    const nextPage = async () => {
        setLoading(true)
        axios.get(nextUrl).then(response => {
            Number(listId) === 2 ? setLikeData(response.data) : setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
        }).catch(error => console.log(error))
        setLoading(false)
    }

    const previousPage = async () => {
        setLoading(true)
        axios.get(previousUrl).then(response => {
            Number(listId) === 2 ? setLikeData(response.data) : setData(response.data)
            setNext(response.data.next)
            setPrevious(response.data.previous)
        }).catch(error => console.log(error))
        setLoading(false)
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
                        {
                            isLoading == true || (likeData.results.length == 0 && productData.results.length == 0) ? <ImageList cols={3} rowHeight={500} className={"ProductListStyle"}>
                            {
                              empList.map((item) => (
                                <MyLoader key={item} />
                              ))
                            }
                          </ImageList> : 
                        Number(listId) === 2 ? <ProductList likeResults={likeData.results} isLike={true}/> : <ProductList productResults={productData.results} isLike={false}/>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
  }
  
export default ListMainArea;