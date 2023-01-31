import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from "../styles/Home.module.css";
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';


export default function ProductsList({productsList}) {
return (
  <div className={styles.cards}>
  {productsList.map(pr=> {
    return (
      <Card className={styles.prCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pr.image}
          alt="PRODUCT IMAGE"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {pr.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     DESCRIPTION: {pr.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     PRICE: {pr.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     QUANTITY: {pr.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     CATEGORY: {pr.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     SKU: {pr.SKU}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     MANUFACTURER: {pr.manufacturer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
     MODEL: {pr.model}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    );
  })}
</div>
)
    
}


