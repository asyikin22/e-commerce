import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ( {product}) => {
  return (
    <Card sx={{ minHeight: '300px', width: '300px', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
            component='img'
            height='140'
            image={product.image}
            alt={product.name}
            sx={{ objectFit: 'contain', width: '100%'}}
        />

        <CardContent>
            <Typography variant='h5' component='div' sx={{ mb: 2}}>
                {product.name}
            </Typography>

            <Typography variant='body2' sx={{ color: 'grey' }}>
                {product.description}
            </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='h5' color='primary.main'>
                {product.price}
            </Typography>
            
            <IconButton aria-label='Add to cart' sx={{ fontSize: '2rem' }}>
                <AddShoppingCartIcon fontSize='inherit'/>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product