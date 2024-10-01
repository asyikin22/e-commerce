import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ( {product}) => {
  return (
    <Card sx={{ minHeight: '300px', width: '300px', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
            component='img'
            height='140'
            image=''
            alt={product.name}
        />

        <CardContent>
            <Typography variant='h5' component='div'>
                {product.name}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
                {product.description}
            </Typography>

            <Typography variant='h7' color='textSecondary'>
                {product.price}
            </Typography>
        </CardContent>

        <CardActions>
            <IconButton aria-label='Add to cart'>
                <AddShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product