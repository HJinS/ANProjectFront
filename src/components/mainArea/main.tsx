import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ProductItem() {
  return (
    <Card sx={{ width: '30vw', display:'flex', flexDirection: 'row' }}>
        <CardMedia style={{backgroundColor: 'red', justifyContent:'flex-start',
                            width: '10vw', height: '20vh'}}
        component="img"
        image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent style={{justifyContent:'flex-end'}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
    </Card>
  );
}

export default ProductItem;