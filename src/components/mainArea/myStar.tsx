import React, {Component, useEffect, useState} from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import starInfoType from "../types/starType";
import IconButton from'@mui/material/IconButton';
import './mainArea.css';
import axios from "axios";

function MyStar(props: starInfoType) {

    const [like, setLike] = useState(props.on);
    const [clickCount, setCount] = useState(0);
    const uri = props.on ? '/api/product/like/delete' : '/api/product/like/add'

    const likeClick = () => {
        setLike(like === true ? false : true)
        setCount(clickCount+1)
    }

    useEffect(() => {
        return function cleanUp(){
            const isChanged = clickCount % 2 === 0 ? false : true
            if(isChanged){
                axios.post(uri, {'product_id': props.productId}).then(
                    response => {
                        if(response.status != 200){
                            console.log(response.data)
                        }
                    }).catch(error => {
                        console.log(error)
                    })
            }
        }
    })

    return (
        <IconButton className={"MyCustomButton"} disableRipple onClick={likeClick}>
            {like ? <StarRateIcon className={"MyStarIcon"}/> : <StarBorderIcon className={"MyStarIcon"}/>}
        </IconButton>
    );
}
  
export default MyStar;