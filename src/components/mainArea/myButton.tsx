import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { ButtonType } from '../types/buttonType';
import './mainArea.css'

function MyButton(props: ButtonType){
    const [click, setClick] = useState<boolean>(false);

    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        click ? props.addFilterItem(props.category) : props.deleteFilterItem(props.category)
        setClick(click => !click)
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