import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { ButtonType } from '../types/buttonType';
import './mainArea.css'
import { addFilter, deleteFilter } from '../../modules/__reducers/filterState';
import { useDispatch } from 'react-redux';

function MyButton(props: ButtonType){
    const [click, setClick] = useState<boolean>(false);
    const dispatch = useDispatch();

    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        click ? deleteFilterItem(props.category) : addFilterItem(props.category)
        setClick(click => !click)
    }

    const addFilterItem = (filterItem: string) => {
        dispatch(addFilter(filterItem))
    }

    const deleteFilterItem = (filterItem: string) => {
        dispatch(deleteFilter(filterItem))
    }

    return(
        <Button className="ButtonStyle" variant="contained" color="inherit" sx={{backgroundColor: click ? "#F4F4F4":"#bfb4b4"}} onClick={buttonHandler}>
            <Typography variant="body2" color="text.secondary">
                {props.category}
            </Typography>
        </Button>
    )
}

export default MyButton