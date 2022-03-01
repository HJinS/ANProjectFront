import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from "@mui/material";
import MyStar from './myStar';
import './mainArea.css';
import { Link } from "react-router-dom";

interface productData{
    name: string,
    price: number,
    img_src: string,
    category: string,
    site: number,
    id: string,
}

function ProductListItem(props: productData) {
    return (
      <Card className="ListItem">
        <CardActionArea component="div">
          <Link to={'../detail'.concat(props.id)} className="LinkStyle">
            <CardMedia style={{justifyContent:'flex-start', width: '100%', height: '280px'}} component="img" image={props.img_src}/>
          </Link>
        </CardActionArea>
          <CardContent style={{justifyContent:'flex-end'}}>
            <Box sx={{paddingTop: "5%"}}/>
            <CardActionArea component="div">
              <Link to={'../detail'.concat(props.id)} className="LinkStyle">
                <Typography variant="body1" color="text.secondary" className={"MuiTypography-body1"}>
                  {props.name}                    
                </Typography>
              </Link>
            </CardActionArea>
            <Box sx={{height: "15%"}}/>
            <Box>
              <Typography gutterBottom variant="body2" component="div" className={"MuiTypography-body2"}>
                  {props.category}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" className={"MuiTypography-h5"}>
                  {props.price}
                  <MyStar on={false}/>
              </Typography>
            </Box>
          </CardContent>
      </Card>
    );
}
  
  export default ProductListItem;