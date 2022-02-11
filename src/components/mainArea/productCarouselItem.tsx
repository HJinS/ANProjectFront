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
    price: number,
    img_src: string,
    category: string,
    site: number,
    like?: boolean
}

function ProductCarouselItem(props: productData) {
    return (
        <Card sx={{ width: '638px', height: '285px', display:'flex', flexDirection: 'row', borderRadius: 3}}>
            <CardMedia style={{justifyContent:'flex-start', width: '180px', height: '100%'}}
            component="img" image={props.img_src}/>
            <CardContent style={{justifyContent:'flex-end', height: '100%'}}>
                <Box sx={{paddingTop: "5%"}}/>
                <Typography variant="body1" color="text.secondary" className={"MuiTypography-body1"} >
                    {props.name}
                </Typography>
                <Box sx={{height: "15%"}}/>
                <Box>
                    <Typography gutterBottom variant="body2" component="div" align='left' marginBottom="3%">
                        {props.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" align='left'>
                        {props.price}
                        {props.like===undefined ? null : <MyStar on={props.like} sx={{marginBottom: "8px", marginLeft: "5px", color: "#1976D2"}}/>}
                        
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
  
export default ProductCarouselItem;