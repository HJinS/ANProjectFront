import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface productData{
    name: string,
    price: string,
    img_src: string,
    category: string,
    site: number,
}

function ProductItem(props: productData) {
    return (
      <Card sx={{ width: '25vw', display:'flex', flexDirection: 'row', borderRadius: 2}}>
          <CardMedia style={{backgroundColor: 'red', justifyContent:'flex-start',
                              width: '8vw', height: '20vh'}}
          component="img"
          image={props.img_src}
          />
          <CardContent style={{justifyContent:'flex-end'}}>
              <Typography variant="body2" color="text.secondary">
                  {props.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                  {props.price}
              </Typography>
          </CardContent>
      </Card>
    );
  }
  
  export default ProductItem;