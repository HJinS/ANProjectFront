import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyStar from './myStar';
import './mainArea.css';

interface productData{
    name: string,
    img_src: string,
    category: string,
    site: number,
    like?: boolean,
    id: string,
}

function DetailITem(props: productData) {
    return (
        <Card className="DetailCard">
            <CardMedia style={{justifyContent:'flex-start', width: '100%', height: '23vh'}} component="img" image={props.img_src}/>
            <CardContent style={{justifyContent:'flex-end'}}>
                <Box sx={{paddingTop: "5%"}}/>
                <Typography variant="body1" color="text.secondary" className={"MuiTypography-body1"}>
                    {props.name}
                </Typography>
                <Box sx={{height: "15%"}}/>
                <Box>
                {props.like === true ? <MyStar on={true} productId={props.id}/> : null}
                </Box>
            </CardContent>
        </Card>
    );
  }
  
  export default DetailITem