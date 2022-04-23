import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css';
import MyPagination from './myPagination';
import ProductList from "./productList";
import LikeProductType from "../types/likeProductType";
import ProductType from "../types/productType";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/__reducers/reducer_setting";
import ImageList from '@mui/material/ImageList';
import MyLoader from "../loader/listLoader";

function SearchResult() {
    const login = useSelector((state: RootState) => state.userLoginReducer.userLogin)
    const searchKeyword = useSelector((state: RootState) => state.searchReducer)
    const [nextUrl, setNext] = useState<string>("");
    const [previousUrl, setPrevious] = useState<string>("");

    const [productData, setData] = useState<ProductType[]>([]);
    const [likeData, setLikeData] = useState<LikeProductType[]>([]);
    const [empList, setList] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true
        if(isMounted){
            getListDataPost()
        }
        return ()=>{
            isMounted = false
        }
    }, [])

    const getListDataPost = async () => {
        setLoading(true)
        axios.post('/product/list/search', {"keyword": searchKeyword}).then(response=>{
            if(response.status === 200){
                console.log(response)
                if(login){
                    const responseData: LikeProductType[] = response.data.results
                    console.log(responseData, "login")
                    if(responseData.length > 0){
                        setLikeData(responseData)
                        setNext(response.data.next)
                        setPrevious(response.data.previous)
                    }
                }else{
                    const responseData: ProductType[] = response.data.results
                    console.log(responseData)
                    if(responseData.length > 0){
                        setData(responseData)
                        setNext(response.data.next)
                        setPrevious(response.data.previous)
                    }
                }
            }
        }).catch(error => console.log(error))
        setLoading(false)
    }

    const nextPage = async () => {
        setLoading(true)
        axios.post(nextUrl, {"keyword": searchKeyword}).then(response => {
            if(response.status === 200){
                if(login){
                    const responseData: LikeProductType[] = response.data.results
                    if(responseData.length > 0){
                        setLikeData(responseData)
                        setNext(response.data.next)
                        setPrevious(response.data.previous)
                    }
                }else{
                    const responseData: ProductType[] = response.data.results
                    if(responseData.length > 0){
                        setData(responseData)
                        setNext(response.data.next)
                        setPrevious(response.data.previous)
                    }
                }
            }
        }).catch(error => console.log(error))
        setLoading(false)
    }

    const previousPage = async () => {
        setLoading(true)
        axios.post(previousUrl, {"keyword": searchKeyword}).then(response => {
            if(response.status === 200){
                if(login){
                    const responseData: LikeProductType[] = response.data.results
                    if(responseData.length > 0){
                        setLikeData(responseData)
                        setNext(response.data.next)
                        setPrevious(response.data.previous)
                    }
                }else{
                    const responseData: ProductType[] = response.data.results
                    if(responseData.length > 0){
                        setData(responseData)
                        setNext(response.data.next)
                        setPrevious(response.data.previous)
                    }
                }
            }
        }).catch(error => console.log(error))
        setLoading(false)
    }
    
    return (
        <Box className={"ListMainAreaStyle"}>
            <Box sx={{width: "68%"}}>
                <MyPagination nextPage={nextPage} previousPage={previousPage}
                isNextUrl={(nextUrl === null || nextUrl === "") ? false:true} isPreviousUrl={(previousUrl === null || previousUrl === "")? false:true}/>
                <Grid container>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        {
                            isLoading === true || (likeData.length === 0 && productData.length === 0) ? <ImageList cols={3} rowHeight={500} className={"ProductListStyle"}>
                            {
                              empList.map((item) => (
                                <MyLoader key={item} />
                              ))
                            }
                          </ImageList> : 
                        login ? <ProductList likeResults={likeData} isLike={true}/> : <ProductList productResults={productData} isLike={false}/>
                        }
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            </Box>
        </Box>
    );
  }
  
export default SearchResult;